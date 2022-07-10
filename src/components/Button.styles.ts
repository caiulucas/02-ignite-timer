import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary'| 'success' | 'danger';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  color: ${({theme})=>theme.white};

  background-color: ${({variant, theme}) => theme['green-500']};
`