import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
// import Info from './components/Info';
import Menu from './components/Menu';
import About from './components/About';
import Productos from './components/Productos';

const Info = React.lazy(() => import('./components/Info'));

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/info"
            render={() => (
              <Suspense fallback={<p>Cargando...</p>}>
                <Info />
              </Suspense>
            )}
          />
          <Redirect from="/sobremi" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/:productoId" component={Productos} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
        {/* <Route path="/" exact render={() => <h2>Fuera</h2>} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;