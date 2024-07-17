import React from 'react'

function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>
}

function App() {
  return(
    <div>
      <Saudacao nome="João"/>
      <Saudacao nome="Ana"/>
    </div>
  )
}

export default App;







// ---------------Routes---------------------
// import { BrowserRouter as Router } from 'react-router-dom'
// import { AppRoutes } from './Routes/AppRoutes'
// import { Navigation } from './Routes/Navigation'
// import './App.css'

// function App() {

//   return (
//     <>
//       <Router>
//         {/* Barra de Navegação */}
//         <Navigation/>
//         <AppRoutes/>
//       </Router>
//     </>
//   )
// }

// export default App
