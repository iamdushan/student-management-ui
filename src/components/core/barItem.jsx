import React from "react";
import { NavLink } from "reactstrap";

function BarItem(props) {
  return (
    <>
      <NavLink href={props.url}>{props.linkName}</NavLink>
    </>
  );
}

export default BarItem;
