import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesIntitial = [];
    const [notes, setNotes] = useState(notesIntitial);
    // Get All Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzYTVmMWMwYWUzYWQ1MTEwZDk4YzQ4In0sImlhdCI6MTc4MjIxMTMzMH0.yETzQOIbfvOMiFgR9rhtLZDcy_SIMCfrlkKpfgWaPb4"
            }
        });
        const json = await response.json();
        setNotes(json);
    };
    // Add a Note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzYTVmMWMwYWUzYWQ1MTEwZDk4YzQ4In0sImlhdCI6MTc4MjIxMTMzMH0.yETzQOIbfvOMiFgR9rhtLZDcy_SIMCfrlkKpfgWaPb4"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = {
            "_id": "6a3bcd0e6b06096e35b4a876",
            "user": "6a3a5f1c0ae3ad5110d98c48",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2026-06-25T12:23:43.383Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    };
    // Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzYTVmMWMwYWUzYWQ1MTEwZDk4YzQ4In0sImlhdCI6MTc4MjIxMTMzMH0.yETzQOIbfvOMiFgR9rhtLZDcy_SIMCfrlkKpfgWaPb4"
            }
        });
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzYTVmMWMwYWUzYWQ1MTEwZDk4YzQ4In0sImlhdCI6MTc4MjIxMTMzMH0.yETzQOIbfvOMiFgR9rhtLZDcy_SIMCfrlkKpfgWaPb4"
            },
            body: JSON.stringify({ title, description, tag })
        });
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    };
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;