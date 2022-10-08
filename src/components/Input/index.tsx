import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: 'enabled' | 'disabled'
}

export function Input(props: InputProps) {
  return (
    <Container>
      <input {...props} />
      {props.optional === 'enabled' && <span>Opcional</span>}
    </Container>
  )
}
