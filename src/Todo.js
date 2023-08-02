import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo({ task, completed, removeTodo, id, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
            <DeleteIcon onClick={() => removeTodo(id)}/>
        </IconButton>
        <IconButton>
            <EditIcon aria-label="Edit"/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
