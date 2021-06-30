import './styles.css'

import { ButtonHTMLAttributes } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps ) {
  return (
    <button
    {... props}
    >
     <FaSignInAlt /> Entrar
    </button>
  )
}
