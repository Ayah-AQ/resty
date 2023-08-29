function History({ history, handleApiCall }) {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <button onClick={() => handleApiCall(entry)}>
              {entry.method} {entry.url}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;