import React, { ReactNode as ReactElement } from "react";
import { Button } from "native-base";
import { twMerge } from "tailwind-merge";

const PrimaryButton = ({
  cname,
  children,
  leftIcon,
  ...rest
}: {
  cname?: string;
  leftIcon?: JSX.Element;
  children: ReactElement;
  // [key: string]: () => any;
}) => {
  const allCSS = twMerge(
    "hover:bg-primary-5 font-Karla rounded-lg bg-mainBlue py-3 text-[18px] text-base font-bold text-white transition duration-300 hover:text-white",
    cname
  );

  return (
    <Button
      className={allCSS}
      leftIcon={leftIcon}
      _text={{ fontWeight: "bold" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
