import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/server").then(
      respose => respose.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {
        (typeof backendData.users === 'undefined') ?
          (<p>Loading...</p>) :
          (backendData.users.map((users, i) => (
            <p key={i}>{users}</p>
          )))
      }

    </div>
  );
}
export default App;
