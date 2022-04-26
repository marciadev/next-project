import { useState } from 'react'

const Index = () => {

    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        e.preventDefault();

        setUserInput(e.target.value)
        console.log(userInput)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        setTodoList([
            userInput,
            ...todoList
        ])
        setUserInput('')
    }

    const handleDelete = (todo) => {
        const updatedArr = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo))
        setTodoList(updatedArr)
    }

    return (
        <div>
            <h3>Next JS Todo List</h3>
            <form>
                <input type="text" value={userInput} placeholder="Type to add a new task" onChange={handleChange}/><button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todoList.length >=1 ? todoList.map((todo, index)=> {
                        return <li key={index}>{todo}<button onClick={(e)=>{e.preventDefault(); handleDelete(todo)}}>X</button></li>
                    }) 
                    : "Enter a todo item"
                }
            </ul>
        </div>
    )
}

export default Index;