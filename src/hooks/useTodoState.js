// import {useState} from 'react';
import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: (todoId) => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    toggleTodo: (todoId) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: (todoId, newTask) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        )
      );
    },
  };
};

// const addTodo = (newTodoText) => {
//     setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
//   }

//   const removeTodo = (todoId) => {
//     setTodos(todos.filter((todo) => todo.id !== todoId))
//   }

//   const toggleTodo = (todoId) => {
//     setTodos(todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo))
//   }

//   const editTodo = (todoId, newTask) => {
//     setTodos(todos.map((todo) => todo.id === todoId ? {...todo, task: newTask} : todo))
//   }
