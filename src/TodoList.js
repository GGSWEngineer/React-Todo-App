import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function TodoList(props) {
  const displayTodos = props.todos.map((todo) => (
    <>
    <ListItem>
      <ListItemText>{todo.task}</ListItemText>
    </ListItem>
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
