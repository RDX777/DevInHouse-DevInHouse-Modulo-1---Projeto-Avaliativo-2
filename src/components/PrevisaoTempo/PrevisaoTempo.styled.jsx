import styled from "styled-components"

export const BoxStyled = styled.div`
  width: 80%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: 10px 5px 5px black;
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  
`