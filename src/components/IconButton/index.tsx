import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

type IconButtonProps = {
	children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = ({ children, ...props }: IconButtonProps) => {
	return (
		<button className={styles.btn} {...props}>
			{children}
		</button>
	)
}
