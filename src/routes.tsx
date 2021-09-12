import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function Routes(){    
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    )
}
export default Routes;