import { BiError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { GoInfo } from "react-icons/go";
import React from "react";

export type IconType = "info" | "success" | "error";

export function Icon(props: { type: IconType }): JSX.Element {
  const { type } = props;

  switch (type) {
    case "error":
      return <BiError />;
    case "success":
      return <TiTick />;
    case "info":
      return <GoInfo />;
  }
}
