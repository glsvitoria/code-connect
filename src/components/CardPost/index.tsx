import { Post } from '@/types'
import Image from 'next/image'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'
import Link from 'next/link'

type CardPostProps = {
	post: Post
	highlight?: boolean
}

export const CardPost = ({ post, highlight = false }: CardPostProps) => {
	return (
		<Link href={`/posts/${post.slug}`} className={styles.link}>
			<article
				className={styles.card}
				style={{ width: highlight ? 993 : 486 }}
			>
				<header className={styles.header}>
					<figure style={{ height: highlight ? 300 : 133 }}>
						<Image
							src={post.cover}
							alt={`Capa do post de título: ${post.title}`}
							width={438}
							height={133}
						/>
					</figure>
				</header>
				<section className={styles.body}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</section>
				<footer className={styles.footer}>
					<Avatar name={post.author.name} imageSrc={post.author.avatar} />
				</footer>
			</article>
		</Link>
	)
}
