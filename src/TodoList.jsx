import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import "./TodoListStyle.css";
import Icon from '@material-ui/core/Icon';
import ClearIcon from '@material-ui/icons/Clear';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
    onIconClick: PropTypes.func,
};

function TodoList({todoList=[],onTodoClick=null,onIconClick=null}) {
    const handleTodoClick = (todo,idx) => {
        if(onTodoClick){
            onTodoClick(todo,idx);
        }
    }
    const handleIconClick = (todo,idx) => {
        if(onIconClick){
            onIconClick(todo,idx);
        }
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo,idx)=>(
                <div className="todo-wrap">
                   

                    <li key={todo.id} className={classnames({"todo-item":true,completed: todo.status === 'completed'})}
                     onClick={()=>handleTodoClick(todo,idx)}
                    >{todo.title}</li>
                    
               
                <hr style={{width: "106%", marginLeft: "-34px"}}/>
                </div>
            ))}
        </ul>
    );
}

export default TodoList;