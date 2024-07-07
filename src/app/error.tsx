'use client'

import { Heading } from '@/components/Heading'
import { ArrowBack } from '@/components/icons/arrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import style from './error/styles.module.css'
import banner from './error/500.png'

export default function Error({
	error,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className={style.container}>
			<Image src={banner} alt="Foto de um robô" />
			<Heading>Opa! Ocorreu um erro.</Heading>
			<p className={style.text}>
				Não conseguimos carregar a página, volte para seguir navegando.
			</p>
			<Link href="/">
				Voltar ao feed <ArrowBack color="#81FE88" />
			</Link>
		</div>
	)
}
