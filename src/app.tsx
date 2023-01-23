import './app.css'
import { Router, Route } from 'wouter';
import { Home } from './pages/Home';
import { About } from './pages/About';


export function App() {

  return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </Router>

  )
}
