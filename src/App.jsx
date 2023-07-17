import Button from "./components/Button";
import "./sass/App.scss";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

const App = () => {
  return (
    <>
      {/*tarjetas*/}
      <div className="button-container">
        <Button
          icon={<TiArrowLeftOutline />}
          handleClick={() => {
            console.log("anterior");
          }}
        />
        <Button
          icon={<TiArrowRightOutline />}
          handleClick={() => {
            console.log("siguiente");
          }}
        />
      </div>
    </>
  );
};

export default App;
