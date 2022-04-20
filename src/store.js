import { initNotes, noteReducer } from "./reducers/noteReducer";
import { createStore, combineReducers } from "redux";
import { filterReducer } from "./reducers/filterReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAll } from "./services/notes";

export const store = createStore(
    combineReducers({
        notes: noteReducer,
        filter: filterReducer,
    }),
    composeWithDevTools()
);

getAll().then((notes) => {
    store.dispatch(initNotes(notes));
});
