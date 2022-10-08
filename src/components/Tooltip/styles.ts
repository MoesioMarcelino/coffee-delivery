import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${({ theme }) => theme['purple-light']};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 1;
    transition: all 0.4s;
    visibility: hidden;
    text-align: center;

    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translate(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme['purple-light']};
      border-width: 6px 6px 0 6px;
      bottom: 28px;
      top: -10%;
      position: absolute;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
    }
  }

  opacity: 1;
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
