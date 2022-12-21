import React from "react";
import Task from "./Task";

function Overview(props) {
  return (
    <ol className="task-row-container">
      {props.taskList.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleChange={props.handleChange}
            handleResubmit={props.handleResubmit}
            deleteTask={props.deleteTask}
            isEdited={props.isEdited}
          />
        );
      })}
    </ol>
  );
}

export default Overview;
