import styled from "styled-components";

export const ContainerGeralStyled = styled.main`
background-color: ${({ theme }) => theme.colors.backgroundPrimary};
width: 100vw;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`