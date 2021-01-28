import logo from './logo.svg';
// import './App.css';
import React, {useState, useRef, useEffect} from "react";
import TodoList from './TodoList'
import uuidv4 from 'uuid/dist/esm-node/v4'

//root of the application
function App() {
    const [todos, setTodos] = useState([])
    // variable to get access input
    const todoNameRef = useRef()
    const LOCAL_STORAGE_KEY = 'todoApp.todos'
    //load todos from local storage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos)
            setTodos(storedTodos)

    }, [])

    //save todos to local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        //runs this function everytime the todos array change
    }, [todos])

    function handleAddTodo(e) {
        //get inputs value
        const name = todoNameRef.current.value
        if (name === '') return
        //setting to dos by adding it to prevTo do array
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    return (
        //empty tag around all elements bc it can only return one element
        <>
            <TodoList todos={todos}/>
            <input ref={todoNameRef} type="text"/>
            <button onClick={handleAddTodo}>Add Todo</button>
            <button>Clear Todos</button>
            <div>0 left to do</div>
        </>
    )
}

export default App;
