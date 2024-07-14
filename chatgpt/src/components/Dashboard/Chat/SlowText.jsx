import React, { useState, useRef, useEffect } from "react";

const SlowText = ({ speed, text }) => {
  const [placeholder, setPlaceholder] = useState(text[0]);
  const index = useRef(0);

  useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev) => prev + text[index.current]);
    }
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, text]);

  return <span>{placeholder}</span>;
};

export default SlowText;
