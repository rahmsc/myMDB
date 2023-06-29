import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} starts</p>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <StarRating
//       maxRating={5}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
//     />
//     <StarRating size={48} color="green" className="test" maxRating={6} />
//     <StarRating size={24} color="red" maxRating={10} defaultRating={3} />
//     <Test />
//   </React.StrictMode>
// );
