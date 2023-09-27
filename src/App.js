import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import {LoginPage } from "./Routes.js"
import "./App.css";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="login"  element={<LoginPage/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
