import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  Error,
  Register,
  Login,
  Dashboard,
  ProtectedRoute,
  About,
  KKULogin,
  Contact
} from './pages';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';
function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/log-in" exact>
          <KKULogin />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <ProtectedRoute path="/dashboard" exact>
          <Dashboard />
        </ProtectedRoute>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
