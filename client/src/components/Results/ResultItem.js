import React from "react";
import "./Results.css";

export const ResultItem = props => (
  <li className='list-group-item'>
  	{props.children}
  </li>
);