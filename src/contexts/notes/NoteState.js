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
        },
        {
            "_id": "6a3bc73a2771e8eaf2ed7f84",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note4",
            "description": "this is my fourth note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:02:02.126Z",
            "__v": 0
        },
        {
            "_id": "6a3bc7422771e8eaf2ed7f85",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note5",
            "description": "this is my fifth note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:02:10.368Z",
            "__v": 0
        },
        {
            "_id": "6a3bcc316b06096e35b4a873",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note6",
            "description": "this is my sixth note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:23:13.283Z",
            "__v": 0
        },
        {
            "_id": "6a3bcc396b06096e35b4a874",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note7",
            "description": "this is my seventh note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:23:21.746Z",
            "__v": 0
        },
        {
            "_id": "6a3bcc456b06096e35b4a875",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note8",
            "description": "this is my eighth note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:23:33.904Z",
            "__v": 0
        },
        {
            "_id": "6a3bcc4e6b06096e35b4a876",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": "My Note9",
            "description": "this is my ninth note yipeee",
            "tag": "Personal",
            "date": "2026-06-24T12:23:42.383Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesIntitial);
    // Add a Note
    const addNote = (title, description, tag) => {
        const note = {
            "_id": "6a3bcd4e6b06096e35b4a876",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2026-06-24T12:23:43.383Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    };
    // Delete a Note
    const deleteNote = () => {

    };
    // Edit a Note
    const editNote = () => {

    };
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;