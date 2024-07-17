import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './Routes/AppRoutes'
import { Navigation } from './Routes/Navigation'
import './App.css'

function App() {

  return (
    <>
      <Router>
        {/* Barra de Navegação */}
        <Navigation/>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
