import React from 'react';
import { useState } from 'react';
import styles from "./todo.module.css";

const TodoItem = ({todo})=> {
    const [isCompleted,setIsCompleted]=useState(todo.isCompleted);
  return (
    <div className={styles.todo}  key={todo.id}>
    

    <div className={isCompleted ? styles.striked:""}>{todo.value} </div>
    <input className={styles.checkbox}  type="radio" checked={isCompleted} onChange={(e)=>{
      setIsCompleted(e.target.checked);
    }}/>
</div>
  );
};

export default TodoItem;