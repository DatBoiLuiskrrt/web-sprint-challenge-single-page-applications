import react from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const routeToShop = () => {
    history.push("/items-list");
  };

  return (
    <div>
      <button onClick={routeToShop}>Buy Pizza NOW!</button>
    </div>
  );
}
