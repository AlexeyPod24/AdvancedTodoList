import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppContainer, MainButton, MainForm, MainInput, MainTitle } from "./Main.Styled";
import { Category } from "./Category";



export function Main() {

const [mainInputState, setMainInputState] = React.useState("")    
const [addCategoryTodo, setAddCategoryTodo] = React.useState(JSON.parse(localStorage.getItem("categories")) || [])


React.useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(addCategoryTodo))
    
    }, [addCategoryTodo])
    



// Functions


function handleSubmit(e) {
    e.preventDefault()
}

function addCategory() {
    if (mainInputState === "") return
    const newTodo = {name: mainInputState, id: uuidv4(), clicked: false }

    setAddCategoryTodo(prev => {
        return ([...prev, newTodo])
    })

    setMainInputState("")
}

function categoryClicked(itemId) {
   setAddCategoryTodo(prev => {
    return prev.map(category => {
        return category.id === itemId ? {...category, clicked: !category.clicked} : {...category, clicked: false}
    })
   })

}

// Local Storage

// const localStorageKeys = {
//     MAININPUTSTATE_KEY: "myAppmainInputState",
//     ADDCATEGORYTODO_KEY: "myAppaddCategoryTodo"
// }

// const saveStatesToLocalStorage = () => {

//     localStorage.setItem(localStorageKeys.MAININPUTSTATE_KEY, mainInputState)
//     localStorage.setItem(localStorageKeys.ADDCATEGORYTODO_KEY, JSON.stringify(addCategoryTodo))
// }

// const loadStatesFromLocalStorage = () => {

//     const loadedMainInputState = localStorage.getItem(localStorageKeys.MAININPUTSTATE_KEY || "")
//     const loadedAddCategoryTodo = JSON.parse(localStorage.getItem(localStorageKeys.ADDCATEGORYTODO_KEY)) || []

//     setMainInputState(loadedMainInputState)
//     setAddCategoryTodo(loadedAddCategoryTodo)    
// }

// // Load state when component mounts
// React.useEffect(() => {
//     loadStatesFromLocalStorage();
//   }, []);

// // Save to Local Storage
// React.useEffect(() => {
// saveStatesToLocalStorage()

// }, [mainInputState, addCategoryTodo])

// JSX


    return (
        <>
    <AppContainer>
    <MainTitle>My Lists</MainTitle>
    <MainForm onSubmit={handleSubmit}>
        <MainInput
        placeholder="New list"
        type="text"
        onChange={(e) => setMainInputState(e.target.value)}
        value={mainInputState}
        />
        <MainButton onClick={addCategory} stylechange={mainInputState}>+ Add</MainButton>
    </MainForm>

    {addCategoryTodo.map(todo => {
        return <Category
        key={todo.id}
        todo={todo}
        categoryClicked={categoryClicked}
        >{addCategoryTodo}</Category> 
        
        
    })}

    </AppContainer>
    </>
    )
}