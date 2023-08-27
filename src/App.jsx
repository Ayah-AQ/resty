import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";

function App() {
  const [loading, setLoading] = useState(false);
  const [requestParams, setRequestParams] = useState({
    method: "GET",
    url: "",
    body: "",
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState("");

  useEffect(() => {
    if (response) {
      setData(JSON.stringify(response.data, null, 2));
      setError(null);
    }
  }, [response]);

  async function handleApiCall(requestParams) {
    setData("");
    setError(null);
    setLoading(true);
  
    try {
      const requestOptions = {
        method: requestParams.method,
        url: requestParams.url,
        data: requestParams.body,
      };
  
      const apiResponse = await axios(requestOptions);
      setResponse(apiResponse);
    } catch (error) {
      setLoading(false);
  
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(
            `${error.response.status} ${error.response.statusText}: ${error.response.data}`
          );
        } else {
          setError('Network Error: Please check your internet connection.');
        }
      } else {
        setError(error.message || 'An error occurred');
      }
    } finally {
      setLoading(false);
    }
  
    setRequestParams(requestParams);
  }
  
console.log(data)
  return (
    <React.Fragment>
      <Header />
      <div className="centered-container">
        Request Method: {requestParams.method} <br />
        URL: {requestParams.url}
      </div>

      <Form handleApiCall={handleApiCall} />
      <Results
        loading={loading}
        error={error}
        data={data}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;