// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./Pages/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

// function App() {
//   return (
//     <Router>
//       <div>
//         <switch>
//           <Route exact path="/">
//             <Home />
//           </Route>

//           <Route path="Pages/About">
//             <About />
//           </Route>

//           <Route path="/Contact">
//             <Contact />
//           </Route>
//         </switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
