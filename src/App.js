import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {
    const data = [
        {
            id: 1,
            text: 'Nota de prueba, aplicación creada con React',
            date: '15/04/2022'
        }
    ]
    const [notes, setNotes]             = useState([]);
    const [searchText, setSearchText]   = useState('');
    const [darkMode, setDarkMode]       = useState(false);

    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem('notes-react-app'));
        if(savedNotes){
            setNotes(savedNotes);
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem('notes-react-app', JSON.stringify(notes));
    }, [notes]);

    function addNote(text){
        const date = new Date();
        const newNote = {
            id: (notes.length)+1,
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }
    function deleteNote(id){
        const newNotes = notes.filter((note)=>note.id !== id);
        setNotes(newNotes);
    }

    return(
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList 
                    notes={notes.filter((note)=>
                        note.text.toLowerCase().includes(searchText)
                    )} 
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
        
    );
}

export default App;
