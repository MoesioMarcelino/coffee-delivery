import { ButtonHTMLAttributes, ReactNode } from 'react'
import { defaultTheme } from '../../styles/theme/default'

import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children: ReactNode
  selected?: boolean
  background?: keyof typeof defaultTheme
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
