import React, { useEffect } from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useTodoState from "./hooks/useTodoState";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [{id: 1, task: "Pet a monkey", completed: false}];

  const [mood, setMood] = useLocalStorageState("mood", "happy")

  console.log(mood, setMood)

  // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");



  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

  // const initialTodos = [
  //   {
  //     id: 1,
  //     task: "Buy groceries",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     task: "Clean the house",
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     task: "Go for a walk",
  //     completed: false,
  //   },
  // ];


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
      <Grid
        container
        justify="center"
        style={{ marginTop: "1rem", backgroundColor: "red" }}
      >
        <Grid item xs={11} m={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          <button onClick={() => setMood("angry")}>get angrty</button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

// TodoApp
// -TodoForm
// -TodoList
// -TodoItem

// id, task, completed
