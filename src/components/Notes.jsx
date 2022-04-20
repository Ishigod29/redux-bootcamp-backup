import React from "react";
import { toggleImportantOf } from "./../reducers/noteReducer";
import { useDispatch, useSelector } from "react-redux";

function Note({ note, toggleImportant }) {
    return (
        <li key={note.id}>
            {note.content}
            <strong onClick={() => toggleImportant(note.id)}>
                {note.important ? " is important" : " is not impotant"}
            </strong>
        </li>
    );
}

const Notes = () => {
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const toggleImportant = (id) => {
        dispatch(toggleImportantOf(id));
    };
    return (
        <>
            <ul>
                {notes.map((note, index) => (
                    <Note
                        note={note}
                        key={index}
                        toggleImportant={toggleImportant}
                    />
                ))}
            </ul>
        </>
    );
};

export default Notes;
