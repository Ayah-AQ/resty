import './Form.scss';
import { useState } from 'react';

function Form(props){
  const[input, setInput]=useState("")
  const[method, setMethod]= useState("get")
  const [textarea, setTextarea]=useState(false)
  const[textareaData, setTextareaData]= useState({})


  let handleData=(e)=>{
    setTextareaData(e.target.value)
    // console.log("data",textareaData)
  }
  let handleChange=(e)=>{
    setInput(e.target.value)
   
  }
  let handleMethodChange=(e)=>{
    e.preventDefault()
    setMethod(e.target.id)
    if(e.target.id === "post" || e.target.id == "put"){
      setTextarea(true)
    }else{
      setTextarea(false)
    }
  }
    let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method,
      url: input,
      data:textareaData
    };
    props.handleApiCall(formData);
  }
  return(
    <>
        <form >
          <label >
            <span>URL: </span>
            <input onChange={handleChange} name='url' type='text' />
            <button type="submit" onClick={handleSubmit}>GO!</button>
          </label>
          <label className="methods">
          <button onClick={handleMethodChange} id="get">GET</button>
            <button onClick={handleMethodChange} id="post">POST</button>
            <button onClick={handleMethodChange} id="put">PUT</button>
            <button onClick={handleMethodChange} id="delete">DELETE</button>
          </label>
        </form>
        {textarea && 
        <textarea onChange={handleData} id="textarea" cols="5" rows="5"></textarea>
      }
    </>
  )
}

export default Form