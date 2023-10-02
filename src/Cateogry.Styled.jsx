import styled from "styled-components";


export const CategoryContainer = styled.div`
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
margin-top: 1rem;
background-color: ${({isClicked}) => isClicked ? "#FF6A55" : 'white'};
color: ${({isClicked}) => isClicked ? "white" : "black"};
text-align: left;
padding-top: 1rem;
position: relative;
overflow: hidden;
`


export const ListItemButton = styled.button`
width: 100%;
/* &:focus {
    outline: none;
    box-shadow: 0 0 3px #007bff;
} */
border-bottom-left-radius: ${({isShown}) => !isShown ? "1px" : "8px"};
border-bottom-right-radius: ${({isShown}) => !isShown ? "1px" : "8px"};
height: 3rem;
border: none;
font-family: Montserrat;
font-size: 1rem;
font-weight: 600;
line-height: normal;
padding-left: 1rem;
background-color: white;
color: rgba(0, 0, 0, 0.40);
text-align: left;

`

export const ListItemInputContainer = styled.div`
position: relative;
`

export const ListItemInput = styled.input`
width: 100%;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
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

export const CheckMarkButton = styled.button`
position: absolute;
top: 12px;
right: 12px;
background-color: white;
border: none;
font-size: 1rem;
font-weight: ${({isActive}) => isActive ? "600" : '400'};
color: ${({isActive}) => isActive ? "green" : 'gray'};
cursor: ${({isActive}) => isActive ? "pointer" : 'none'};
`

export const RadioInputContainer = styled.div`
 width: 100%;
  border-bottom-left-radius: ${({ isFirst }) => (isFirst ? "8px" : "1px")};
  border-bottom-right-radius: ${({ isFirst }) => (isFirst ? "8px" : "1px")};
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
background-color: white;
padding-top: 1rem;
display: flex;
align-items: center;
gap: 10px;

`

export const RadioInput = styled.input.attrs({ type: "checkbox" })`
width: 3%;
border-bottom-left-radius: ${({isShown}) => !isShown ? "1px" : "8px"};
border-bottom-right-radius: ${({isShown}) => !isShown ? "1px" : "8px"};
border-radius: 50%;
height: 3rem;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding-left: 1rem;
padding-right: 5rem;
cursor: pointer;
list-style-type: none;
`

export const CheckboxLabel = styled.label`
text-decoration: ${({checked}) =>  checked ? "line-through" : "none"};
color: ${({checked}) =>  checked ? "lightgray" : "black"};
cursor: pointer;
`

export const ItemCount = styled.span`
color: ${({isClicked}) => isClicked ? "lightgray" : "gray"};
padding: 0 .5rem;

` 

export const CleanButton = styled.button`
position: absolute;
top: 15px;
right: 20px;
background: none;
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;


`

// MODAL

