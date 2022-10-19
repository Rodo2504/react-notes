import React, { useState } from "react";

function AddNote({ handleAddNote }){
    const [noteText, setNoteText] = useState('');

    function handleChange(e){
        setNoteText(e.target.value);
    }
    function handleClick(){
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }        
    }

    return(
        <div className="note new">
            <textarea cols="8" 
                rows="10" 
                placeholder="Escribe para añadir una nota"
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>Nueva Nota</small>
                <button className="save" onClick={handleClick}>
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default AddNote;