import { CardPost } from '@/components/CardPost'
import logger from '@/logger'
import { Post } from '@/types'

import styles from './page.module.css'
import Link from 'next/link'
import db from '../../prisma/db'
import { Search } from '@/components/icons/search'
import { Prisma } from '@prisma/client'

type GetAllPostsRequest = {
	page: number
	search: string
}

type GetAllPostsResponse = {
	data: Post[]
	prev: number | null
	next: number | null
}

async function getAllPosts({
	page,
	search,
}: GetAllPostsRequest): Promise<GetAllPostsResponse> {
	try {
		const where: Prisma.PostWhereInput = {}

		if (search !== '') {
			where.title = {
				contains: search,
				mode: 'insensitive',
			}
		}

		const perPage = 6

		const totalItems = await db.post.count({ where })
		const totalPages = Math.ceil(totalItems / perPage)

		const prev = page > 1 ? page - 1 : null
		const next = totalPages > page ? page + 1 : null

		const skip = (page - 1) * perPage

		const posts = await db.post.findMany({
			take: perPage,
			skip,
			where,
			orderBy: {
				createdAt: 'desc',
			},
			include: {
				author: true,
			},
		})

		return { data: posts, prev, next }
	} catch (error) {
		logger.error('Error fetching posts', { error })

		return { data: [], prev: null, next: null }
	}
}

interface HomeProps {
	searchParams: {
		page?: string
		q?: string
	}
}

export default async function Home({ searchParams }: HomeProps) {
	const currentPage = Number(searchParams?.page || 1)
	const search = searchParams?.q || ''
	const {
		data: posts,
		prev,
		next,
	} = await getAllPosts({
		page: currentPage,
		search,
	})

	console.log(posts)

	return (
		<main className={styles.grid}>
			{!posts ? (
				<div className={styles.results}>
					<p
						style={{
							color: 'white',
						}}
					>
						Ocorreu um erro ao carregar os posts, por favor tente
						novamente mais tarde.
					</p>
				</div>
			) : posts.length > 0 ? (
				<>
					{posts.map((post) => (
						<CardPost key={post.id} post={post} />
					))}
					<div className={styles.links}>
						{prev && (
							<Link
								href={{
									pathname: '/',
									query: { page: prev, q: search },
								}}
							>
								Página anterior
							</Link>
						)}
						{next && (
							<Link
								href={{
									pathname: '/',
									query: { page: next, q: search },
								}}
							>
								Próxima página
							</Link>
						)}
					</div>
				</>
			) : (
				<div className={styles.results}>
					<Search />
					<p
						style={{
							color: 'white',
						}}
					>
						Nenhum resultado encontrado para sua busca, tente um termo
						diferente.
					</p>
				</div>
			)}
		</main>
	)
}
