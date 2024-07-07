export type Post = {
	id: string
	cover: string
	title: string
	slug: string
	body: string
	markdown: string
	createdAt: Date
	updatedAt: Date
	author: Author
}

export type Author = {
	id: string
	name: string
	username: string
	avatar: string
}
