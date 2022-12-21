import { MdDeleteForever, MdEditNote } from "react-icons/md";

export default function Task(props) {
  function reSubmit(e) {
    e.preventDefault();
    props.handleResubmit(props.task.id);
  }
  return (
    <>
      {props.task.editing ? (
        <li>
          <form className="form formEdit" onSubmit={reSubmit}>
            <input
              onChange={props.handleChange}
              type="text"
              placeholder="change task..."
              autoFocus
            />
            <button type="submit">Resubmit</button>
          </form>
        </li>
      ) : (
        <li className="task-row">
          {props.task.text}
          <MdDeleteForever
            className="iconDel"
            onClick={() => props.deleteTask(props.task.id)}
          />

          <MdEditNote
            className="iconEdit"
            onClick={() => props.isEdited(props.task.id)}
          />
          {/*<button
            className="delBtn"
            onClick={() => props.deleteTask(props.task.id)}
            type="button"
          >
            Delete
          </button>
          <button
            className="editBtn"
            onClick={() => props.isEdited(props.task.id)}
            type="button"
          >
            Edit
          </button>*/}
        </li>
      )}
    </>
  );
}
