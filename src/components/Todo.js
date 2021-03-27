import React from "react";

const Todo = (props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : "",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <div>
      <button onClick={props.onDelete}>x</button>
    </div>
  </div>
);

export default Todo;
