import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { initNotes } from "./reducers/noteReducer";
import { getAll } from "./services/notes";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAll().then((notes) => {
            dispatch(initNotes(notes));
        });
    }, [dispatch]);
    const filterSelecteted = (value) => {
        console.log(value);
    };

    return (
        <div>
            <NewNote />
            <div>
                all
                <input
                    type="radio"
                    name="filter"
                    onChange={() => filterSelecteted("ALL")}
                />
                important
                <input
                    type="radio"
                    name="filter"
                    onChange={() => filterSelecteted("IMPORTANT")}
                />
                not important
                <input
                    type="radio"
                    name="filter"
                    onChange={() => filterSelecteted("NOT IMPORTANT")}
                />
            </div>
            <Notes />
        </div>
    );
};

export default App;
