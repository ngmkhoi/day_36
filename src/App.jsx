import AppRoutes from "./components/AppRoutes/index.jsx";
import {BrowserRouter} from "react-router";


function App() {
  return (
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
  )
}

export default App
