import AppRoutes from "./components/AppRoutes/index.jsx";
import {HashRouter} from "react-router";


function App() {
  return (
      <HashRouter basename="/day_36">
          <AppRoutes />
      </HashRouter>
  )
}

export default App
