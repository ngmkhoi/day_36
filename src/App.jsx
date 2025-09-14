import AppRoutes from "./components/AppRoutes/index.jsx";
import { HashRouter } from 'react-router-dom';


function App() {
  return (
      <HashRouter>
          <AppRoutes />
      </HashRouter>
  )
}

export default App
