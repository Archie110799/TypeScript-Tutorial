import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Navigation from "../../components/common/Navigation";
import PrivateRouter from "../../components/layouts/PrivateRouter";
import store from "./store";

type Props = {};

function index({}: Props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <PrivateRouter />
        <LoadingSpinner />
      </BrowserRouter>
    </Provider>
  );
}

export default index;
