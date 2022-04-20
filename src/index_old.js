import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const actionIncremented = {
    type: "@counter/incremented",
};

const actionDecremented = {
    type: "@counter/decremented",
};

const actionReset = {
    type: "@counter/reset",
};

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "@counter/incremented":
            return state + 1;
        case "@counter/decremented":
            return state - 1;
        case "@counter/reset":
            return 0;
        default:
            return state;
    }
};

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <div className="App">
            <div>
                <h1>{store.getState()}</h1>
            </div>
            <button onClick={() => store.dispatch(actionIncremented)}>
                Incrementar
            </button>
            <button onClick={() => store.dispatch(actionReset)}>Reset</button>
            <button onClick={() => store.dispatch(actionDecremented)}>
                Decrementar
            </button>
        </div>
    );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () =>
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

renderApp();
store.subscribe(renderApp);
