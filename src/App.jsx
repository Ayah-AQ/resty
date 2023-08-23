import React from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  
    function callApi(requestParams) {
      const newData = {
        results: [
          // {name: 'fake thing 1', url: 'http://fakethings.com/1'},
          // {name: 'fake thing 2', url: 'http://fakethings.com/2'},
          {method:requestParams.method},
          {url:requestParams.url},
          {response:requestParams.data},
        ],
      };
  
      setData(newData);
      setRequestParams(requestParams);
    }
  
    return (
      <>
        {/* {console.log(requestParams)} */}
        <Header />
        <div data-testid="req-method">Request Method: {requestParams.method}</div>
        <div data-testid="url">URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );
  }
export default App;