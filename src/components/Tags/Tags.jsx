import React from "react";
import '../Tags/tags.scss';

function Tags({ data }) {
    return (
        <div className="tags-container">
            <ul className='tags-list'>
                {data.map((item) => (
                    item.tags.map((tags, index) => (
                        <li key={`${index}-${tags.title}`} className="tags-item">{tags}</li>
                    ))
                ))}
            </ul>
        </div>
    );
};

export default Tags;
