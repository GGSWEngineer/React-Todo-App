import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
  const displayTodos = todos.map((todo, i) => (
    <>
    <Todo {...todo} key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    {i < todos.length - 1 && <Divider/>}
    </>
  ));
  if(todos.length) 
    return (
    <Paper>
      <List>{displayTodos}</List>
    </Paper>
  );
  return null
}

export default TodoList;


// id={todo.id} task={todo.task} completed={todo.completed} in the displayTodos variable we are mapping over the todos in the intiail todos we dont have to put  id={todo.id} task={todo.task} completed={todo.completed} we can just put {..todos} and it will make the app work still