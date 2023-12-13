import { useEffect, useState } from "react";

function App() {
const [data, setData] = useState([]);
const [shapes, setShapes] = useState([]);

useEffect(() => {
  async function getData() {
    const response = await fetch("http://localhost");
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  getData();
}, []);


useEffect(() => {
  fetch("api/figures")
    .then((response) => response.json())
    .then((data) => setShapes(data))
}, []);

return (
  <>
    <h1>SHEIPZ</h1>
    <div>
      {data.map((shape, index) => (
        <div key={index}>
          {shape.shape === 'Circle' && (
            <>
            <div
              style={{
                width: `${shape.radius}px`,
                height: `${shape.radius}px`,
                backgroundColor: shape.color,
                borderRadius: "50%",
                margin: "10px",
                border: "solid black 2px",
              }}
            ></div>

              <input type="radio" checked />Shape: {shape.shape}<br />
              <input type="radio" checked />Color: {shape.color}<br />
              <input type="radio" checked />Radius: {shape.radius}px<br />
              <input type="radio" checked />Area: {shape.area}px<br />
            </>
          )}

          {shape.shape === 'Rectangle' && (
            <>
              <div
                style={{
                  width: `${shape.width}px`,
                  height: `${shape.height}px`,
                  backgroundColor: shape.color,
                  margin: "10px",
                  border: "solid black 2px",
                }}
              ></div>

              <input type="radio" checked />Shape: {shape.shape}<br />
              <input type="radio" checked />Color: {shape.color}<br />
              <input type="radio" checked />Width: {shape.width}px<br />
              <input type="radio" checked />Height: {shape.height}px<br />
              <input type="radio" checked />Area: {shape.area}px<br />
              <br /><br />
            </>
          )}
        </div>
      ))}
    </div>
  </>
);

};

export default App;
