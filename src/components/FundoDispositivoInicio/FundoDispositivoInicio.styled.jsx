import styled from "styled-components";

export const DivDispositivoInicio = styled.div`
width: 80%;
height: 75%;
background: ${({ theme }) => theme.colors.backgroundSecondary};
color: ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.spacing.sm};
padding: ${({ theme }) => theme.spacing.xl};
margin: ${({ theme }) => theme.spacing.xl};
box-shadow: 10px 5px 5px black;
display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 1em;
row-gap: 1em;
overflow-y: scroll;
overflow: overlay;
`