import { Button } from "components/Button/Button";
import toast from "react-hot-toast";
import styles from "./TaskForm.module.scss";
import { addTask } from "redux/operations";
import { useAppDispatch } from "hooks/redux-hook";

type FormFields = {
  text: HTMLInputElement;
};

export const TaskForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const task = event.currentTarget.text.value.trim();
    if (task === "") {
      return toast.error("Enter some text");
    }
    dispatch(addTask(task));
    toast.success("You add new task");
    event.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
