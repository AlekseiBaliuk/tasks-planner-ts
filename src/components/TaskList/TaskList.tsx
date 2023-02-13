import { Task } from "components/Task/Task";
import { selectVisibleTasks } from "redux/selectors";
import styles from "./TaskList.module.scss";
import { useAppSelector } from "hooks/redux-hook";

export const TaskList = () => {
  const tasks = useAppSelector(selectVisibleTasks);

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
