import { notesRef } from '../config/firebase'

export const FETCH_NOTES = 'FETCH_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = newNote => async dispatch => {
    notesRef.push().set(newNote)
};

export const deleteNote = key => async disptach => {
    notesRef.child(key).remove()

}

export function fetchNotes() {
    return dispatch => {
        notesRef.on("value", snapshot => {
            let newState = []
            // Turn the received object into a corresponding array for ease of use
            if (snapshot.val().length === undefined) {
                for (let key in snapshot.val()) {
                    newState.push({ key: key, title: snapshot.val()[key].title, text: snapshot.val()[key].text, id: key })
                }
            }
            console.log(newState)
            dispatch({
                type: FETCH_NOTES,
                payload: newState
            })
        })
    }
}

export const editNote = (key, newNote) => async dispatch => {
    notesRef.child(key).set(newNote)
}