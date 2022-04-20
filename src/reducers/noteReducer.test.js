import { noteReducer } from "./noteReducer";

describe("noteReducer", () => {
    test("returns new state after action with toggle important", () => {
        const state = [
            {
                id: 1,
                content: "hola",
                important: false,
            },
            {
                id: 2,
                content: "adios",
                important: false,
            },
        ];

        const action = {
            type: "@note/toggle_important",
            payload: {
                id: 2,
            },
        };

        const newState = noteReducer(state, action);

        expect(newState).toHaveLength(2);
        expect(newState).toContainEqual(state[0]);
        expect(newState).toContainEqual({
            id: 2,
            content: "adios",
            important: true,
        });
    });
});
