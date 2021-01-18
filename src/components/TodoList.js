import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
   return(
    <div className="todo-container">
        <ul className="todo-list">
           {filteredTodos.map((filteredTodo) => (
              <Todo key={filteredTodo.id} todo={filteredTodo} setTodos={setTodos} todos={todos} text={filteredTodo.text}/> 
           ))}
        </ul>
     </div>
   );
};

export default TodoList;