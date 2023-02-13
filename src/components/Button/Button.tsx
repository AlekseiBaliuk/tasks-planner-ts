import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: ReactNode;
}

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}: IButton) => {
  return (
    <button
      className={clsx(styles.btn, { [styles.isSelected]: selected })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
