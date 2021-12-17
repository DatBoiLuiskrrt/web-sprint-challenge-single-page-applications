import React from "react";

export default function PizzaForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Select your pizza
        <select value={values.name} onChange={onChange} name="name"></select>
      </label>
    </form>
  );
}
