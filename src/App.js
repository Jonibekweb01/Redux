import { useDispatch } from "react-redux";
import { MacView } from "./components/macView";
import { PhoneView } from "./components/phoneView";
import { buyMac, buyRandomMac } from "./redux/mac/macAction";
import { buyPhone, buyRandomPhone } from "./redux/phone/phoneAction";

function App() {
  const dispatch = useDispatch()
  const dispatchCLick = () => {
    if (dispatch(buyMac())) {
      dispatch(buyPhone())
    }
  }

  return (
    <>
      <MacView />
      <button style={{ marginTop: "20px" }} onClick={dispatchCLick}>BONUS + </button>
      <PhoneView />
    </>
  );
}

export default App;
