import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { CategoryContainer, CheckMarkButton, CheckboxLabel, CleanButton, ItemCount, ListItemButton, ListItemInput, ListItemInputContainer, RadioInput, RadioInputContainer } from "./Cateogry.Styled";
import { Modal } from "./Modal";
import { useCookies } from 'react-cookie';


const localStorageKeys = {
    ADDEDITEMS_KEY: "myAppAddedItems"
}



export function Category({todo, categoryClicked}) {
const localStorageItemsKey = `${localStorageKeys.ADDEDITEMS_KEY}_${todo.id}`
const [itemInput, setItemInput] = React.useState("")
const [showForm, setShowForm] = React.useState(false)
const [addedItems, setAddedItems] = React.useState(JSON.parse(localStorage.getItem(localStorageItemsKey)) || [])
const [openModal, setOpenModal] = React.useState(false)
const [cookies, setCookie] = useCookies(['cookieName']);
const [checkboxState, setCheckboxState] = React.useState(false)

const cookieValue = cookies.cookieName;
// Local Storage



const saveStatesToLocalStorage = () => {
    localStorage.setItem(localStorageItemsKey, JSON.stringify(addedItems))
}







// // Load state when component mounts


// Save to Local Storage
React.useEffect(() => {
saveStatesToLocalStorage()
console.log(addedItems)

}, [addedItems])



function isShown() {
    setShowForm(prev => !prev)
}

// Adding new Item from input
function handleSubmit(e) {
    e.preventDefault()
    if (itemInput === "") return
    const newItem = {name: itemInput, id: uuidv4(), isCompleted: false}

    setAddedItems(prev => {
        return [newItem, ...prev]

    })
    isShown()
    setItemInput("")

}

function completeCheckbox(id) {
setAddedItems(prev => {
    return prev.map(item => {
        return item.id === id ? {...item, isCompleted: !item.isCompleted} : item
    })
})
}

const checkForCompletedItems = () => {
    return addedItems.some(item => item.isCompleted)
}

function openModalFunc(e) {
    if (cookieValue !== 'cookieValue') {
      // Show the modal
      setOpenModal(true);
    } else {
      // Don't show the modal, run the filter function directly
      setAddedItems((prev) => {
        return prev.filter((completed) => {
          return !completed.isCompleted;
        });
      });
    }
  }


  function cleanItemList() {
    if (checkboxState) {
      // Set the cookie to remember the choice
      setCookie('cookieName', 'cookieValue', { path: '/', maxAge: 3600 });
    }
    setAddedItems((prev) => {
      return prev.filter((completed) => {
        return !completed.isCompleted;
      });
    });
    setOpenModal(false)
  }

    return (
        <>
        <CategoryContainer
        onClick={() => categoryClicked(todo.id)}
        key={todo.id}
        isClicked={todo.clicked}>
            {todo.name} 
            <ItemCount isClicked={todo.clicked}>{addedItems.length}</ItemCount>
            {checkForCompletedItems() && todo.clicked && <CleanButton 
            onClick={openModalFunc}
           
            >Clean</CleanButton>}
            <Modal 
            nameOfCategory={todo.name} 
            open={openModal}
            openModalFunc={openModalFunc}
            addedItemsState={addedItems}
            setAddedItemsState={setAddedItems}
            cleanItemList={cleanItemList}
            checkboxState={checkboxState}
            setCheckboxState={setCheckboxState}
            setOpenModal={setOpenModal}
            ></Modal>
            </CategoryContainer>

            {todo.clicked && <ListItemButton type="button" onClick={isShown} isShown={showForm}>+ List Item</ListItemButton>}
            <form onSubmit={handleSubmit}>
            <ListItemInputContainer>
            {todo.clicked && showForm && 
            <ListItemInput type="text"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value) }
            />}
            {todo.clicked && showForm && <CheckMarkButton type="submit" isActive={itemInput}>✔</CheckMarkButton>}
            </ListItemInputContainer>
            
                {todo.clicked && addedItems.map((item, index )=> {
                    return  <RadioInputContainer key={item.id} isFirst={index === addedItems.length - 1}>
                        <RadioInput type="checkbox" 
                        id={item.id}
                        isCompleted={item.isCompleted}
                        checked={item.isCompleted}
                        onClick={()=>completeCheckbox(item.id)}
                        />
                        <CheckboxLabel htmlFor={item.id} checked={item.isCompleted}>{item.name}</CheckboxLabel>
                    </RadioInputContainer>
                     
                })}
           
                
            </form>
          
        </>

    )
}