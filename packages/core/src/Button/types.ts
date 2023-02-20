import { ReactChild, AllHTMLAttributes } from "react";

enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
}

enum ButtonSizes {
  l = "l",
  m = "m",
  s = "s",
}

enum ButtonTypes {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export interface ButtonProps
  extends Omit<AllHTMLAttributes<HTMLElement>, "size"> {
  className?: string;
  wide?: boolean;
  before?: ReactChild;
  variant?: keyof typeof ButtonVariants;
  size?: keyof typeof ButtonSizes;
  waiting?: boolean;
  type?: keyof typeof ButtonTypes;
  active?: boolean;
}
