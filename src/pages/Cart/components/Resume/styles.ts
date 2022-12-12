import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
  height: fit-content;

  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  flex: 1;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 12px;
`

export const Item = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
`

export const ItemDivider = styled.div`
  background-color: ${({ theme }) => theme['base-button']};
  height: 1px;
  width: 100%;
  margin: 24px 0;
`

export const Main = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Image = styled.img`
  height: 64px;
  width: 64px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const ActionsContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
`

export const Title = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme['base-subtitle']};
  font-weight: 400;
`

const containerActionStyle = css`
  display: flex;
  align-items: center;
  height: 38px;

  padding: 8px;

  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-title']};
  border-radius: 6px;
  gap: 4px;

  width: fit-content;
`

export const CounterAction = styled.div`
  ${containerActionStyle}

  span {
    width: 20px;
    text-align: center;
  }
`

export const DeleteAction = styled.div`
  ${containerActionStyle}
  cursor: pointer;

  span {
    text-transform: uppercase;
    font-size: 12px;
    color: ${({ theme }) => theme['base-text']};
  }

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

export const ButtonAction = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.purple};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const Value = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme['base-text']};
  white-space: nowrap;
  margin-left: auto;
`

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 16px 0;
`

const resumeStyle = css`
  display: flex;
  justify-content: space-between;
`

export const Summary = styled.div`
  ${resumeStyle}
  font-size: 14px;
`

export const Tax = styled.div`
  ${resumeStyle}
  font-size: 14px;
`

export const Total = styled.div`
  ${resumeStyle}
  font-size: 20px;
  font-weight: 700;
`
