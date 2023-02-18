import { AnchorHTMLAttributes } from "react";

enum LinkTypes {
  primary = "primary",
  secondary = "secondary",
}

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  className?: string;
  type?: keyof typeof LinkTypes;
  underlined?: boolean;
  to?: string;
  ssr?: boolean;
}
