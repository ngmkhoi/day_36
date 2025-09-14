import AppRoutes from "./components/AppRoutes/index.jsx";
import {HashRouter} from "react-router";


function App() {
  return (
      <HashRouter>
          <AppRoutes />
      </HashRouter>
  )
}

export default App
