import React, { useContext } from 'react';
import noteContext from '../contexts/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, editNote } = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{note.title}</h5>
                        <div>
                            <button className="btn btn-primary me-2" onClick={() => { editNote(note._id) }}>
                                <i className="i fa-solid fa-pen-to-square"></i>
                            </button>
                            <button className="btn btn-danger ms-2" onClick={() => { deleteNote(note._id) }}>
                                <i className="i fa-solid fa-trash-can" onClick={() => { deleteNote(note._id) }}></i>
                            </button>
                        </div>
                    </div>
                    <p className="card-text mt-3">{note.description}</p>
                </div>
            </div>
        </div>
    )
};

export default NoteItem;