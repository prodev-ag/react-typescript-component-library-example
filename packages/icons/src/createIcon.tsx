import React, { LegacyRef } from "react";

type IconPaths = {
  16?: React.ReactNode | React.ReactNode[];
  24: React.ReactNode | React.ReactNode[];
};

enum IconSizes {
  small = 16,
  large = 24,
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSizes;
  color?: string;
}

export const createSvgIcon = (paths: IconPaths, displayName: string): any => {
  const publicDisplayName = `${displayName}Icon`;

  const Component = React.forwardRef(
    (props: IconProps, ref: LegacyRef<any>): JSX.Element => {
      const {
        size = IconSizes.large,
        color = "currentColor",
        ...otherProps
      } = props;
      const path =
        paths[16] && size !== IconSizes.large ? paths[16] : paths[24];
      const dim: string = IconSizes.small ? "16px" : "24px";
      const w: string = dim;
      const h: string = dim;
      const viewBox =
        paths[16] && size === IconSizes.small ? `0 0 16 16` : "0 0 24 24";

      return (
        <svg
          data-qa={publicDisplayName}
          ref={ref}
          width={w}
          height={h}
          fill={color}
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          {...otherProps}
        >
          {Array.isArray(path) ? path.map((el: React.ReactNode) => el) : path}
        </svg>
      );
    }
  );

  if (process.env.NODE_ENV !== "production") {
    Component.displayName = publicDisplayName;
  }

  return Component;
};

export default createSvgIcon;
