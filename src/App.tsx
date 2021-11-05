import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CounterPage from "./pages/counter";
import TodosPage from "./pages/todos";
import AddTodoPage from "./pages/todos/Add";
import ShowPokemonPage from "./pages/pokemon/Show";
import Navigation from "./components/navigation";
import ListPokemonPage from "./pages/pokemon/List";

import 'rsuite/dist/rsuite.min.css';
import CartPokemonPage from "./pages/pokemon/Cart";


function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={ListPokemonPage}/>
                <Route exact path="/pokemon/show/:name" component={ShowPokemonPage}/>
                <Route exact path="/pokemon/list" component={ListPokemonPage}/>
                <Route exact path="/pokemon/cart" component={CartPokemonPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
