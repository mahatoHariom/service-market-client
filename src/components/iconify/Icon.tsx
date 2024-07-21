import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";

interface IconProps extends React.ComponentProps<typeof IconifyIcon> {
  name?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = "",
 
  ...props
}) => {
  return (
    <IconifyIcon
      {...props}
      width={size}
      height={size}
      // color={color}
      className={`text-default-50 ${className}`}
    />
  );
};

export default Icon;
