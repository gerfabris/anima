import { AppRoutes } from './components/AppRoutes/AppRoutes'
import './styles/App.css'

/* Para ver importación de imagen con vite */
/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a> */
/*     <div className="App">
      <div>


      </div>
      <h1>Vite + React</h1>
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
    </div> */

function App() {
  return (
    <AppRoutes/>
  )
}

export default App
