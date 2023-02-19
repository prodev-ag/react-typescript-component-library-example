import React, { FC, memo } from "react";
import { LinkProps } from "./types";
import styles from "./Link.module.css";
import cn from "classnames";

export const Link: FC<LinkProps> = (props) => {
  const { className, type, children, to, underlined, ...restProps } = props;

  const LinkElement = !!to ? "a" : "span";

  return (
    <LinkElement
      {...restProps}
      href={to}
      className={cn(
        styles.link,
        {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
          [styles.underlined]: underlined,
        },
        className
      )}
    >
      {children}
    </LinkElement>
  );
};

export default memo(Link);
