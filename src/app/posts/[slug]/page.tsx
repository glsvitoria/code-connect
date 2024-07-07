import logger from '@/logger'
import { remark } from 'remark'
import html from 'remark-html'
import styles from './page.module.css'
import { CardPost } from '@/components/CardPost'
import db from '../../../../prisma/db'
import { Post } from '@/types'
import { redirect } from 'next/navigation'

async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const post = await db.post.findFirst({
			where: {
				slug,
			},
			include: {
				author: true,
			},
		})

		if (!post) {
			throw new Error(`Post com slug ${slug} não foi encontrado`)
		}

		const processedContent = await remark().use(html).process(post.markdown)
		const contentHtml = processedContent.toString()
		post.markdown = contentHtml

		logger.info('Post carregado com sucesso')

		return post
	} catch (error) {
		logger.error('Falha ao obter o post com o slug: ', {
			slug,
			error,
		})
	}

	redirect('/not-found')
}

type PagePostProps = {
	params: {
		slug: string
	}
}

export default async function PagePost({ params }: PagePostProps) {
	const post = await getPostBySlug(params?.slug || '')

	if (!post) {
		return <h1>Post não encontrado</h1>
	}

	return (
		<div>
			<CardPost post={post} highlight />
			<h3 className={styles.subtitle}>Código:</h3>
			<div className={styles.code}>
				<div dangerouslySetInnerHTML={{ __html: post.markdown }} />
			</div>
		</div>
	)
}
