import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme['base-card']};
  padding: 20px 24px;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 6px;
  border-bottom-left-radius: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex: 1;
`

export const Image = styled.img`
  margin-top: -50px;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 8px 4px;
`

export const Tag = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;

  color: ${({ theme }) => theme['yellow-dark']};
  background-color: ${({ theme }) => theme['yellow-light']};
  padding: 4px 8px;

  border-radius: 100px;
`

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;

  margin-top: 16px;

  color: ${({ theme }) => theme['base-subtitle']};
`

export const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;

  margin-top: 8px;

  color: ${({ theme }) => theme['base-label']};
`

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  width: 100%;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Price = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  display: flex;
  align-items: baseline;
  gap: 4px;
`

export const Value = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  text-align: right;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  height: 38px;

  padding: 8px;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;
  gap: 4px;

  span {
    width: 20px;
    text-align: center;
  }
`

export const Button = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.purple};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const Icon = styled.div`
  padding: 8px;
  height: 38px;
  width: 38px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  background: ${({ theme }) => theme['purple-dark']};

  svg {
    fill: ${({ theme }) => theme.white};
  }

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
