import React, { useEffect, useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/login/Login";
import Checkout from "./components/Checkout";
import { useStateValue } from "./components/context/StateProvider";
import { auth } from "./components/firebase/firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Thanks from "./components/Thanks";
import Error from "./components/Error";
import newContext from "./components/context/newContext";

const promise = loadStripe(
  "pk_test_51HWekRIsyk1Ymc7rBgRoPGYVRyUSsu94lGlmbMG8PldUEvgonqBkZqnNfsBvWKXmmx7nrAzYpNauADLHqULTBnKO00pWwvm3R3"
);

function App() {
  const [newBasket, setNewBasket] = useState();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <newContext.Provider value={{ newBasket, setNewBasket }}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Main />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Navbar />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Navbar />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/done">
              <Navbar />
              <Thanks />
            </Route>
            <Route path="/error">
              <Navbar />
              <Error />
            </Route>
          </Switch>
        </div>
      </newContext.Provider>
    </Router>
  );
}

export default App;
