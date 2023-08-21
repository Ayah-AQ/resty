// import React from 'react';
import { useState } from "react";
import "./Form.scss";

function Form(props) {
  const [input, setInput] = useState("");
  const [method, setMethod] = useState("get");
  const [textBox, setTextBox] = useState(false);
  const [textBoxText, setTextBoxText] = useState({});

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleData(e) {
    setTextBoxText(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault();
    setMethod(e.target.id);
    if (e.target.id === "post" || e.target.id === "put") {
      setTextBox(true);
    } else {
      setTextBox(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: input,
      data: textBoxText,
    };

    props.handleApiCall(formData);
  }
  
  return (
    <>
    
      <form>
        <label>
          <span>URL: </span>
          <input onChange={handleChange} name="url" type="text" />
          <button id="button" type="submit" onClick={handleSubmit}>
            GO!
          </button>
        </label>
        <label className="methods">
          <button onClick={handleClick} id="get">
            GET
          </button>
          <button onClick={handleClick} id="post">
            POST
          </button>
          <button onClick={handleClick} id="put">
            PUT
          </button>
          <button onClick={handleClick} id="delete">
            DELETE
          </button>
        </label>
      </form>
      {textBox && (
        <>
          <textarea
            name=""
            onChange={handleData}
            id="textarea"
            cols="10"
            rows="10"
            placeholder='type JSON format for example {"content":"hello"}'
          ></textarea>
        </>
      )}
    </>
  );
}

export default Form;