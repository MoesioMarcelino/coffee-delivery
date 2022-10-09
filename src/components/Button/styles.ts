import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

interface ButtonContainerProps {
  selected?: boolean
  background?: keyof typeof defaultTheme
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-transform: uppercase;
  padding: 16px;
  color: ${({ theme, color }) => color || theme.purple};
  background: ${({ theme, background }) =>
    background ? theme[background] : theme['base-button']};
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid transparent;

  font-weight: 400;
  font-size: 12px;
  line-height: 160%;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme['purple-light']};
      border: 1px solid ${({ theme }) => theme.purple};
    `}
`
