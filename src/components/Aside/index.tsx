import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import styles from './styles.module.css'

export const Aside = () => {
	return (
		<aside className={styles.aside}>
			<Image src={Logo} alt="Logo da code connect" width={128} height={40} />
		</aside>
	)
}
