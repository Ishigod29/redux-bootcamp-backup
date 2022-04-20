export const noteReducer = (state = [], action) => {
    if (action.type === "@notes/created") {
        return state.concat(action.payload);
    }

    if (action.type === "@notes/init") {
        return action.payload;
    }
    if (action.type === "@note/toggle_important") {
        const { id } = action.payload;
        return state.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    important: !note.important,
                };
            }
            return note;
        });
    }

    return state;
};

export const createNote = (note) => {
    return {
        type: "@notes/created",
        payload: note,
    };
};

export const toggleImportantOf = (id) => {
    return {
        type: "@note/toggle_important",
        payload: {
            id,
        },
    };
};

export const initNotes = (notes) => {
    return {
        type: "@notes/init",
        payload: notes,
    };
};
