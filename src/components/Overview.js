import React from "react";


function Overview(props) {
  return (
    <ol className="task-row-container">
      {props.taskList.map((task) => {
        if (task.editing) {
          return (
            <li key={task.id} id={task.id}>
              <form className="form" onSubmit={props.handleResubmit}>
                <input onChange={props.handleChange} type="text" placeholder="change task.."></input>
                <button type="submit">Resubmit</button>
              </form>
            </li>
          );
        } else {
          return (
            <li className="task-row" key={task.id} id={task.id}>
              {task.text}
              <button className="delBtn" onClick={props.deleteTask} type="button">
                Delete
              </button>
              <button className="editBtn" onClick={props.isEdited} type="button">
                Edit
              </button>
            </li>
          );
        }
      })}
    </ol>
  );
}

export default Overview;

/*
function Overview(props) {
  <ol>
    {props.taskList.map((task) => {
      if (task.editing) {
        return (
          <li key={task.id} id={task.id}>
            <form onSubmit={props.handleResubmit}>
              <input type="text"></input>
              <button type="submit">resubmit</button>
            </form>
          </li>
        );
      } else {
        return (
          <li key={task.id} id={task.id}>
            {task.text}
            <button onClick={props.deleteTask} type="button">
              Delete
            </button>
            <button onClick={props.isEdited} type="button">
              Edit
            </button>
          </li>
        );
      }
    })}
  </ol>;
}
*/

/* FUNKAR !!!!
function Overview(props) {
  return (
    <ol>
      {props.taskList.map((task) => {
        return (
          <li key={task.id} id={task.id}>
            {task.text}
            <button onClick={props.deleteTask} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}*/
