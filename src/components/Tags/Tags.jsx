import React from "react";
import "../Tags/tags.scss";

function Tags({ data }) {
  return (
    <div className="tags-container">
      <ul className="tags-list">
        {data.map((item, index) => (
          <li key={`${index}-${item.tags}`} className="tags-item">
            {item.tags}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;

