import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import "./TodoStyles.css"
Todo.propTypes = {
    
};

function Todo(props) {
    const initTodoList =[
        {
            id:1,
            title: 'Eat',
            status: 'new'
        },
        {
            id:2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id:3,
            title: 'Code',
            status: 'new'
        }
    ]

    const [todoList,setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState('all')

    const handleTodoClick = (todo,idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status ==='new' ?'completed':'new',
        }
        setTodoList(newTodoList)
    }
    const handleShowAllClick = () => {
        setFilteredStatus('all')
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new')
    }
    const handleTodoFormSubmit = (values)=>{
        const newTodo = {
            id:todoList.length+1,
            title:values.title,
            status: 'new',
        }
        const newTodoList=[...todoList,newTodo]
        setTodoList(newTodoList)
    }
  
    const renderedTodoList = todoList.filter(todo=>filteredStatus==='all'|| filteredStatus===todo.status)
    return (
        <div className="root">
            <h3>What's up, Duc!</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div className="buttons">
                <button className="btn" onClick={handleShowAllClick}>Show All</button>
                <button className="btn" onClick={handleShowCompletedClick}>Show Completed</button>
                <button className="btn" onClick={handleShowNewClick}>Show New</button>
            </div>
        
        
        </div>
    );
}

export default Todo;