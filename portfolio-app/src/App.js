import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {NotFound} from "./components/NotFound";
import {Register} from "./components/Register";

function App() {
  return (
        <BrowserRouter>
            <>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
  );
}

export default App;
