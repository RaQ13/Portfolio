import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {NotFound} from "./components/NotFound";

function App() {
  return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
  );
}

export default App;
