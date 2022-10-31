import React, { Component, useEffect, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Components
import { HomeTemplate } from "./templates/HomeTemplate";

//Store
import { USER_LOGGED } from "./store/modules/Auth"
import { LOCAL_CART } from "./store/modules/Course"
import { useDispatch } from "react-redux";

//Route
import routes from "./routes";


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const userLogged = JSON.parse(localStorage.getItem("user_logged"));
    const cartItem = JSON.parse(localStorage.getItem("cart_item"));

    !!userLogged && dispatch(USER_LOGGED(userLogged));
    !!cartItem.length && dispatch(LOCAL_CART(cartItem));
  }, [])

  return (
    <BrowserRouter>
      <Suspense>
        <Switch>
          {routes.map((route, index) => {
            if (route.guard) {
              return;
            }
            return <HomeTemplate key={index} {...route} />;
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
