import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";


function Overview(props) {
  return (
    <ol className="task-row-container">
      {props.taskList.map((task) => {
        if (task.editing) {
          return (
            <li key={task.id} id={task.id}>
              <form className="form formEdit" onSubmit={props.handleResubmit}>
                <input onChange={props.handleChange} type="text" placeholder="change task.."></input>
                <button type="submit">Resubmit</button>
              </form>
            </li>
          );
        } else {
          return (
            <li className="task-row" key={task.id} id={task.id}>
              {task.text}
               {/*<MdDeleteForever className="iconDel" onClick={props.deleteTask}/>

              <MdEditNote className="iconEdit" onClick={props.isEdited}/>*/}
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