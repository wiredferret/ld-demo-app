import QRCode from "./components/qrCode";
import ldlogo from "./ld-light.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Login from "./components/login";

function App() {
  const { qrcode, upperimage, logoversion } = useFlags();

  return (
    <div className="App h-screen bg-ldls grid xl:grid-cols-4 grid-rows-3 bg-cover bg-no-repeat">
    <div className="body grid row-start-3 xl:col-start-1 xl:row-start-2 bg-black-4 place-items-center shadow-xl">
    {qrcode ? <QRCode /> : <Login />}
    </div>
    {upperimage ? 
    <div className="body grid row-start-2 xl:row-start-1 xl:col-start-3 place-items-center">
      {logoversion ? (
        <img src={toggle} className="mx-auto h-56 lg:h-80" alt="logo" />
      ) : (
        <div className="">
          <img src={ldlogo} className="App-pulse mx-auto h-56 lg:h-80" alt="logo" />
        </div>
      )}
    </div>
    : <div />}
    <header className="App-header grid row-start-1 xl:row-start-2 xl:col-start-2 xl:col-span-3">
      <Header />
    </header>
  </div>
  );
}

export default App;
