import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Navigation from "../components/common/Navigation";
import LoginPage from "../components/layouts/LoginPage";
import PrivateRouter from "../components/layouts/PrivateRouter";
import store from "./store";

function Redux() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLogin && <Navigation setIsLogin={setIsLogin} />}
        {isLogin ? <PrivateRouter /> : <LoginPage setIsLogin={setIsLogin} />}
        <LoadingSpinner />
      </BrowserRouter>
    </Provider>
  );
}

export default Redux;
