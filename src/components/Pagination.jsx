import React from "react";
//css
import "./Pagination.css";

const Pagination = ({
  page,
  totalPages,
  onLeftClick,
  onRightClick,
  loading,
}) => {
  return (
    <div className="pagination-container">
      <button onClick={!loading && onLeftClick}>◀</button>
      <p>
        Página {page} de {totalPages}
      </p>
      <button onClick={!loading && onRightClick}>▶</button>
    </div>
  );
};

export default Pagination;
