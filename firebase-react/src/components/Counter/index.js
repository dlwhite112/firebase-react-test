import React, { useState } from "react";
import styles from "./counter.module.css";
import randomColor from "randomcolor";

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");

  return (
    <div>
      <p>Current Count : {count} </p>
      <button onClick={() => setCount(count + 1)}>Click me to increment</button>
      <button onClick={() => setCount(count - 1)}>Click me to decrement</button>

      <div className={styles.wrapper}>
        <div
          onClick={() =>
            setColor(
              randomColor({
                hue: "blue",
              })
            )
          }
          style={{ backgroundColor: color }}
          className={styles.square}
        >
          {" "}
          Top{" "}
        </div>
        <div
          onClick={() =>
            setColor2(
              randomColor({
                hue: "red",
              })
            )
          }
          style={{ backgroundColor: color2 }}
          className={styles.square}
        >
          Bottom
        </div>
      </div>
    </div>
  );
}
