import React from "react";
import { ModalBackground, ModalButton, ModalButtonContainer, ModalCheckbox, ModalCheckboxContainer, ModalContainer, ModalLabel, ModalTitle, TitleItemStyle } from "./Modal.styled";
import ReactDOM from 'react-dom';




export function Modal({open, nameOfCategory, openModalFunc, addedItemsState, setAddedItemsState, cleanItemList, checkboxState, setCheckboxState, setOpenModal}) {

    

    if (!open ) return null


function handleBackgroundClick(e) {
    e.stopPropagation()
}

function handleSubmit(e) {
    e.preventDefault()
} 

// function cleanItemList() {

// setAddedItemsState(prev => {
//     return prev.filter(completed => {
//         return !completed.isCompleted
//     })
// })
//     openModalFunc()
// }

console.log(checkboxState)
    return ReactDOM.createPortal(
        <>
        <ModalBackground onClick={handleBackgroundClick}/>
<ModalContainer onClick={handleBackgroundClick}>
    <ModalTitle>Do you want to remove all completed items from <TitleItemStyle>{nameOfCategory}</TitleItemStyle>?</ModalTitle>
    <form onSubmit={handleSubmit}>
        <ModalCheckboxContainer>
        <ModalCheckbox type="checkbox" id="checkbox" checked={checkboxState} onChange={() => setCheckboxState(prev => !prev)} />
        <ModalLabel htmlFor="checkbox">Don't ask me again</ModalLabel>
        </ModalCheckboxContainer>
        <ModalButtonContainer>
        <ModalButton type="button" no="no" onClick={() => setOpenModal(false)}>No</ModalButton>
        <ModalButton type="button" yes="yes" onClick={cleanItemList}>Yes</ModalButton>
        </ModalButtonContainer>
        
    </form>
</ModalContainer>
        </>,
        document.getElementById('portal')

    )
}