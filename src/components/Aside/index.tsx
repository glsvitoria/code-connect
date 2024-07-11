import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

export const Aside = () => {
	return (
		<aside className={styles.aside}>
			<Link href="/">
				<Image
					src={Logo}
					alt="Logo da code connect"
					width={128}
					height={40}
				/>
			</Link>
		</aside>
	)
}
