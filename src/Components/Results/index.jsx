import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'; 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="error">An error occurred while rendering the JSON data.</div>;
    }
    return this.props.children;
  }
}

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
                <ErrorBoundary>
                <div className="json-pretty">
                  <JSONPretty id="json-pretty" data={data}></JSONPretty>
                </div></ErrorBoundary>
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Results;
