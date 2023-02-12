import React from "react";
import { Add } from "@library/icons";
import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.btn}>
      {props.label}
      <Add />
    </button>
  );
};

export default Button;
