import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bulma/css/bulma.css";
<<<<<<< HEAD
import "bulma-iconpicker" 
// import "bulma/css/bulma.css.map";
// import "bulma/css/bulma.min.css";


=======
import "bulma-pageloader/dist/css/bulma-pageloader.min.css";
>>>>>>> 75959f08baeae223be0d40621ae817a9485a9cba

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
