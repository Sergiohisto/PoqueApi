import Button from "./components/Button";
import "./sass/App.scss"
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";


const App = () => {
  return (
    <>

        {/*tarjetas*/}
      <div className="button-container">
        <Button icon={<TiArrowLeftOutline/>} />
        <Button icon={<TiArrowRightOutline/>} />
      </div>
    </>
  );
};

export default App;
