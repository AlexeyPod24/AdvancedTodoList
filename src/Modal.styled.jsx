import styled from "styled-components";

export const ModalContainer = styled.div`
position: fixed;
width: 33%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 1rem;
z-index: 1000;
display: flex;
flex-direction: column;
border-radius: 16px;


`
export const ModalTitle = styled.h3`
 color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;


`
export const ModalCheckboxContainer = styled.div`
padding: 1rem 0;
display: flex;
align-items: center;
gap: .5rem;


`
export const ModalCheckbox = styled.input`
border-color: blue;
   

`

export const ModalLabel = styled.label`
color: #FF6A55;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;

`
export const ModalButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const ModalButton = styled.button`
width: 100px;
height: 42px;
flex-shrink: 0;
border-radius: 8px;
background: ${({no}) => no ? "#FF8181" : "#80C890" };
border: none;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const ModalBackground = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;


`

export const TitleItemStyle = styled.span`
color:#FF8181 ;

`