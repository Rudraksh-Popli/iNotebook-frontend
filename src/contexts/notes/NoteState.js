import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesIntitial = [
        {
            "_id": "6a3a70ce4e7599ca70c1fe94",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note3",
            "description": "this is my third note yipeee",
            "tag": "Personal",
            "date": "2026-06-23T11:41:02.968Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesIntitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;