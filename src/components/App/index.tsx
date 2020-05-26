import React from "react";
import "./styles.scss";
import Home from "../../routes/Home";
// import Aside from "../Aside";
import Header from "../Header";
import Monthly from "../../routes/Monthly";
import Yearly from "../../routes/Yearly";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <Aside />
//         <div className="main">
//           <Switch>
//             <Route path="/" exact={true} component={Home} />
//             <Route path="/monthly" component={Monthly} />
//             <Route path="/yearly" component={Yearly} />
//             <Redirect from="*" to="/" />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/monthly" component={Monthly} />
            <Route path="/yearly" component={Yearly} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
