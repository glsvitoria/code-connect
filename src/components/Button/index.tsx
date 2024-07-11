import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={styles.btn} {...props}>{children}</button>
}
