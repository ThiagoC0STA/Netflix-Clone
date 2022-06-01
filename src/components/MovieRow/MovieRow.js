import React, { useState } from "react";
import "./MovieRow.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function movierow({ title, items }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = (window.innerWidth - listW > x) - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <MdKeyboardArrowLeft style={{ fontSize: 70 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <MdKeyboardArrowRight style={{ fontSize: 100 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default movierow;
