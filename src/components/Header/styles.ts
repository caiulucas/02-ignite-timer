import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border-bottom-color 0.3s;

      &:hover {
        border-bottom-color: ${({ theme }) => theme['green-500']};
      }

      &[title]:hover::after {
        content: attr(title);
        position: absolute;
        top: -2rem;
        padding: 0.5rem 1rem;

        background-color: ${({ theme }) => theme['gray-950']};
        color: ${({ theme }) => theme['gray-100']};

        font-weight: 700;
        font-size: 0.875rem;
        border-radius: 5px;
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
