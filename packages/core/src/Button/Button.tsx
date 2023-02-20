import React, { forwardRef } from "react";
import { ButtonProps } from "./types";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      wide,
      before,
      children,
      variant = "primary",
      type = "button",
      size = "m",
      waiting,
      disabled,
      active,
      ...restProps
    } = props;

    const isText =
      typeof children === "string" ||
      (Array.isArray(children) &&
        children.every((child) => typeof child === "string"));

    const content = (
      <>
        {before && <span className={styles.before}>{before}</span>}
        {waiting ? (
          <>
            <span className={cn(styles.text)}>Секунду...</span>
          </>
        ) : (
          <>
            {isText ? (
              <span className={styles.text}>{children}</span>
            ) : (
              children
            )}
          </>
        )}
      </>
    );

    const baseProps = {
      ...restProps,
      ref,
      className: cn(
        styles.button,
        {
          [styles.wide]: wide,
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
          [styles.sizeL]: size === "l",
          [styles.sizeM]: size === "m",
          [styles.sizeS]: size === "s",
          [styles.active]: active,
        },
        className
      ),
      children: content,
    };

    return <button {...baseProps} type={type} disabled={disabled} />;
  }
);

Button.displayName = "Button";

export default Button;
