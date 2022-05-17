import React from "react";
import {useState} from "react";
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";

const Todo =()=>{
    const [value, setvalue] = useState("");
    const [todos,setTodos ]=useState ([]);

    // const onDelete =(id)=>{
    //   let newTodos = todos.filter((todo)=>todo.id!==id);
    //   setTodos(newTodos);
    // };

    return (
      <div className={styles.bigbox}>
      <div className={styles.todoList}>
      {todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} />
    ))}
      </div>

      <div className={styles.container}>
          {/* Todo */}
          <input className={styles.input} value={value}  placeholder="Write Something"  onChange={
            (e)=>{
              setvalue(e.target.value);
            }
            } />
          <button 
          className={styles.btn}
          onClick={()=>{
              
              setTodos([...todos, {id:Date.now(),value:value}]);
              setvalue("");
              }}
              >
             +
          </button>
      </div>
      </div>
    );
};

export default Todo;