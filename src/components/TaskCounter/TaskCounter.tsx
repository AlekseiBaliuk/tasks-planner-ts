import { useAppSelector } from 'hooks/redux-hook';
import { selectTaskCount } from 'redux/selectors';
import styles from "./TaskCounter.module.scss";

export const TaskCounter = () => {
  const count = useAppSelector(selectTaskCount);

  return (
    <div>
      <p className={styles.text}>Active: {count.active}</p>
      <p className={styles.text}>Completed: {count.completed}</p>
    </div>
  );
};
