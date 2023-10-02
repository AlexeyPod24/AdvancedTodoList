import styled from "styled-components";


export const AppContainer = styled.div`
width: 50%;
margin: 0 auto;
background-color: pink;
margin-top: 4em;
padding: 2em 1em 1em 1em;
position: relative;
`

export const MainTitle = styled.h1`
padding-bottom: 1em;

`

export const MainForm = styled.form`


`

export const MainInput = styled.input`
width: 100%;
border-radius: 8px;
&:focus {
    outline: none;
    box-shadow: 0 0 3px #007bff;
}
height: 3rem;
border: none;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 1rem;
padding-right: 5rem;
    


`

export const MainButton = styled.button`
position: absolute;
top: 106px;
right: 25px;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
border-radius: 8px;
background: ${({ stylechange }) => stylechange ? "#80C890" : "none"};
width: 64px;
height: 40px;
border: none;
color: ${({ stylechange }) => stylechange ? "white" : "rgba(0, 0, 0, 0.20)"};
cursor: ${({ stylechange }) => stylechange ? "pointer" : ""};

`

