import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CounterPage from "./pages/counter";
import TodosPage from "./pages/todos";
import AddTodoPage from "./pages/todos/Add";
import ShowPokemonPage from "./pages/pokemon/Show";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/counter" component={CounterPage}/>
                <Route exact path="/todos" component={TodosPage}/>
                <Route exact path="/todos/add" component={AddTodoPage}/>
                <Route exact path="/pokemon/show" component={ShowPokemonPage}/>


                {/*<Route exact path="/publicaciones/:userId" component={Publicaciones} />*/}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
