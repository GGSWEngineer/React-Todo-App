import React from "react";
import TodoItem from "./Todo";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";

function TodoList(props) {
  const displayTodos = props.todos.map((todo) => (
    <>
    <Todo key={todo.id} task={todo.task} completed={todo.completed}/>
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
