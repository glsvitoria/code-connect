import { ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonProps = {
	children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
	return <button className={styles.btn}>{children}</button>
}
