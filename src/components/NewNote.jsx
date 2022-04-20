import React from "react";
import { createNote } from "./../reducers/noteReducer";
import { useDispatch } from "react-redux";
import { createNewNote } from "../services/notes";

const NewNote = () => {
    const dispatch = useDispatch();

    const addNote = async (e) => {
        e.preventDefault();

        const { target } = e;
        const content = target.note.value;
        target.note.value = "";
        const newNote = await createNewNote(content);
        dispatch(createNote(newNote));
    };

    return (
        <>
            <form onSubmit={addNote}>
                <input name="note" type="text" />
                <button>add</button>
            </form>
        </>
    );
};

export default NewNote;
