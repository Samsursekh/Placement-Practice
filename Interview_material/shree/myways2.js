let buildthis = "https://www.algochurn.com/frontend/multiple-filters";

let answercode =
  "https://codesandbox.io/s/nice-star-p8qlnr?file=/src/App.js:0-2375";

let filters = ["Bags", "Watches", "Sports", "Sunglasses"];
import "./styles.css";

import react, { useEffect, useState } from "react";
const items = [
  { name: "Black leather handbag", category: "Bags" },
  { name: "Silver wristwatch", category: "Watches" },
  { name: "Red sports jersey", category: "Sports" },
  { name: "Aviator sunglasses", category: "Sunglasses" },
  { name: "Canvas backpack", category: "Bags" },
  { name: "Gold watch", category: "Watches" },
  { name: "Basketball", category: "Sports" },
  { name: "Round sunglasses", category: "Sunglasses" },
  { name: "Leather shoulder bag", category: "Bags" },
  { name: "Digital watch", category: "Watches" },
  { name: "Football", category: "Sports" },
  { name: "Cat-eye sunglasses", category: "Sunglasses" },
  { name: "Messenger bag", category: "Bags" },
  { name: "Smartwatch", category: "Watches" },
  { name: "Yoga mat", category: "Sports" },
];
export default function App() {
  let filterarr = ["Bags", "Watches", "Sunglasses", "Sports"];
  const [data, setData] = useState(items);
  const [fildata, setfildata] = useState([]);
  const [flag, setFlag] = useState(false);

  function handlefilter(cat) {
    if (!fildata.includes(cat)) {
      setfildata([...fildata, cat]);
      setFlag(!flag);
    } else {
      setfildata(fildata.filter((e) => e !== cat));
      setFlag(!flag);
    }
  }
  useEffect(() => {
    if (fildata.length) {
      setData(
        items.filter((e) => e.category === fildata[fildata.indexOf(e.category)])
      );
    } else {
      setData(items);
    }
  }, [flag]);
  let s1 = { background: "red" };
  let s2 = { background: "blue" };
  return (
    <div className="App">
      <div style={{ margin: "1rem" }}>
        {filterarr.map((e, i) => (
          <button
            style={fildata.includes(e) ? s1 : s2}
            key={i}
            onClick={() => handlefilter(e)}
          >
            {e}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {data?.map((e, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid",
                padding: "1rem",
              }}
            >
              <h3>{e.name}</h3>
              <h3>{e.category}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Interview 2 | Frontend Developer | shridhar | MyGurukul-" 5ec974"

// quiick sort
function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quicksort(arr, left, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

let arr =[9, 7, 5, 11, 12, 2, 14, 3, 10, 6,6]

console.log(quicksort(arr, left = 0, right = arr.length - 1))


