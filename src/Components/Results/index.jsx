import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'; // Import the stylesheet for JSONPretty

function Results({loading, error,data}) {
  return (
    <div className="results">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <div>
              {data ? (
                <div className="json-pretty">
                  <JSONPretty id="json-pretty" data={data}></JSONPretty>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Results;
