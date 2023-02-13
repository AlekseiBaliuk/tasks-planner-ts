import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import styles from "./AppBar.module.scss";

export const AppBar = () => {
  return (
    <header className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
