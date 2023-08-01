import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList"

function TodoApp() {
  const initialTodos = [
    {
      id: 1,
      task: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      task: "Clean the house",
      completed: true,
    },
    {
      id: 3,
      task: "Go for a walk",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <h1>Todo Application!</h1>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos}/>
    </Paper>
  );
}

export default TodoApp;

// TodoApp
// -TodoForm
// -TodoList
// -TodoItem

// id, task, completed
