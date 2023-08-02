import React from "react";
import TodoItem from "./Todo";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
  const displayTodos = todos.map((todo) => (
    <>
    <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    <Divider/>
    </>
  ));
  return (
    <Paper>
      <List>{displayTodos}</List>
    </Paper>
  );
}

export default TodoList;
