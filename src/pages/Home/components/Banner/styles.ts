import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/theme/default'

interface ContainerProps {
  background: string
}

export const Container = styled.div<ContainerProps>`
  padding: 0 56px;
  background-image: url(${({ background }) => background});

  display: flex;
  height: 544px;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div``

export const Title = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 48px;
  line-height: 130%;
  font-weight: 800;
  color: ${({ theme }) => theme['base-title']};
`

export const Subtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  margin-top: 16px;
  color: ${({ theme }) => theme['base-subtitle']};
`

export const Reasons = styled.div`
  margin-top: 66px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
`

export const Reason = styled.div`
  flex: 1;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 12px;
`

type IconColorType = {
  variant: keyof typeof defaultTheme
}

export const Icon = styled.div<IconColorType>`
  height: 32px;
  width: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  color: ${({ theme }) => theme.white};
  background: ${({ theme, variant }) => theme[variant]};
`
