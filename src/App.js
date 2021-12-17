import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import data from "./data/data";
import Home from "./components/Home";
import axios from "axios";
import PizzaForm from "./components/PizzaForm";
import Pizza from "./components/Pizza";

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
};

export default function App() {
  const [pizza, setPizza] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
    };
    function fetchPizza() {
      return Promise.resolve({ success: true, data });
    }
    if (!newPizza.name || !newPizza.size) {
      setError("All fields are required");
    } else {
      const data = res.data;
      fetchPizza()
        .then((res) => {
          setPizza([data, ...pizza]);
          setFormValues(initialFormValues);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setError(""));
    }
  };
  return (
    <div>
      <h1>Pizza Form</h1>
      <h2>{error}</h2>
      <PizzaForm values={formValues} update={updateForm} submit={submitForm} />
      {pizza.map((e) => {
        <Pizza key={Date.now()} details={e} />;
      })}
    </div>
  );
}
