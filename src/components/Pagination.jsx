import React from "react";
//css
import "./Pagination.css";

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>◀</button>
      <p>
        Página {page} de {totalPages}
      </p>
      <button onClick={onRightClick}>▶</button>
    </div>
  );
};

export default Pagination;
