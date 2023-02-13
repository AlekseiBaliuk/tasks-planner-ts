import { ReactNode } from 'react';
import styles from "./Layout.module.scss";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return <main className={styles.container}>{children}</main>;
};
