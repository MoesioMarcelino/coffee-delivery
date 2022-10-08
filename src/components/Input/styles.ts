import styled from 'styled-components'

export const Container = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme['base-input']};
  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme['base-button']};

  display: flex;
  gap: 8px;

  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme['yellow-dark']};
  }

  input {
    border: 0;
    background: transparent;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme['base-text']};
    }

    &:focus {
      outline: 0;
    }
  }

  span {
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: ${({ theme }) => theme['base-label']};
  }
`
