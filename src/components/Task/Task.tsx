import { MdClose } from "react-icons/md";
import styles from "./Task.module.scss";
import { deleteTask, toggleCompleted } from "redux/operations";
import { useAppDispatch } from "hooks/redux-hook";

type Todo = {
  task: {
    id: string;
    text: string;
    completed: boolean;
    createdAt: string;
  };
};

export const Task = ({ task }: Todo) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={styles.text}>{task.text}</p>
      <button className={styles.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
