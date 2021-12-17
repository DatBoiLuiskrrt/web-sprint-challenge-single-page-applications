import React from "react";
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
// import PizzaList from "./PizzaForm";

export default function Pizza(props) {
  const { pizza } = props;
  const history = useHistory();

  const { itemID } = useParams();
  const { url, path } = useRouteMatch();

  const pifa = pizza.find((e) => e.id === parseInt(itemID));

  return (
    <div>
      <p>{pizza.name}</p>
      <div>
        <Route path={`${path}/pizza`}>{/* <PizzaList/> */}</Route>
      </div>
    </div>
  );
}
