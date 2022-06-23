import styles from './Button.module.css'
import { ReactNode } from 'react'

interface Props {
  variant: 'white' | 'red'
  children: ReactNode
}

export function Button({ children, variant }: Props) {
  return (
    <>
      <button className={styles[variant]}>{children}</button>
    </>
  )
}
