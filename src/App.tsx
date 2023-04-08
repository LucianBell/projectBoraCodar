import Header from "./Components/Header";
import ImageLogin from "./Components/ImageLogin";
import Login from "./Components/Login";
import Styles from "./app.module.scss";

export default function App() {
  return (
    <>
      <div className={Styles.divLogo}>
        <Header />
        <Login />
      </div>
      <ImageLogin />
    </>
  );
}
