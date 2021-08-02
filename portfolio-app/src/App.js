import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import {Home} from "./components/Home";

function App() {
  return (
      <>
        <HashRouter>
            <>
                <Route exact path='/' component={Home} />
            </>
        </HashRouter>
      </>
  );
}

export default App;
