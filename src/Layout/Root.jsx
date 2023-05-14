import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main>{navigation.state === "loading" ? <Loading /> : <Outlet />}</main>
      <Footer />
    </>
  );
};

export default Root;
