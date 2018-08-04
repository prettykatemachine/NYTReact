import React from "react";
import "./Results.css";

export const Results = ({children}) => (
  <div className="list-overflow-container">
      <ul className="searched-items list-group">
        {children}
      </ul>
    </div>
);