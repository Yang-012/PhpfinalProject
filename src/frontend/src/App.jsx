import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [service1Data, setService1Data] = useState(null);
  const [service2Data, setService2Data] = useState(null);
  useEffect(() => {
    // Fetch data from service1
    fetch(`${import.meta.env.VITE_SERVICE1_API_URL}/test`)
      .then(response => response.json())
      .then(data => setService1Data(data))
      .catch(error => console.error('Error fetching service1:', error));
  
    // Fetch data from service2
    fetch(`${import.meta.env.VITE_SERVICE2_API_URL}/test`)
      .then(response => response.json())
      .then(data => setService2Data(data))
      .catch(error => console.error('Error fetching service2:', error));
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <h1>React with Service1 and Service2</h1>
        <div>
          <h2>Service 1 Data:</h2>
          <pre>{JSON.stringify(service1Data, null, 2)}</pre>
        </div>
        <div>
          <h2>Service 2 Data:</h2>
          <pre>{JSON.stringify(service2Data, null, 2)}</pre>
        </div>
      </div>
      <h1>Vite ++ React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
