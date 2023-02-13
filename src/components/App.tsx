import { useEffect } from "react";
import { Layout } from "components/Layout/Layout";

import { Toaster } from "react-hot-toast";

import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { fetchTasks } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { useAppDispatch, useAppSelector } from "hooks/redux-hook";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <ThemeSwitcher />
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Layout>
  );
};
