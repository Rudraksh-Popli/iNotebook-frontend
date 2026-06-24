import React from 'react';

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">{note.title}</h5>
                        <div>
                            <i className="i fa-solid fa-pen-to-square mx-2"></i>
                            <i className="i fa-solid fa-trash-can mx-2"></i>
                        </div>
                    </div>
                    <p className="card-text mt-3">{note.description}</p>
                </div>
            </div>
        </div>
    )
};

export default NoteItem;