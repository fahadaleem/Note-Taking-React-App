import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Card from "./Components/Card";

export default function App() {
  let [view, setView] = useState(false);
  let [editNote, setEditNote] = useState('');
  let [notes, setNotes] = useState([]);

  let [edit,setEdit] = useState(false);
  let [error, setError] = useState(false);
  let [key, setKey] = useState(1);
  const handleChangeView = (e) => {
    setView(!view);
    let text = view ? "New Note" : "Cancel ";
    document.querySelector('.new-note-btn').textContent = text
    setEdit(false)
    setError(false);
  };


  const handleAddNotes = (e) => {
    e.preventDefault();
    const title = e.target.elements.note_title.value;
    const description = e.target.elements.note_description.value;

    if(title==='' || description==='')
    {
      setError(true);
      return false;
    }
    else{

    setKey(key + 1);
    const note = {
      id: key,
      title: title,
      description: description
    };
    handleChangeView();
     notes.push(note)
     setNotes(notes)
     setError(false);
     return true;
  }
  };

  const handleDeleteNote=(e)=>{
    // Get the index number;
     const id =parseInt(e.target.parentElement.id);

     const elementIndex = notes.findIndex(x=>x.id===id)
    // Delete the items
     notes.splice(elementIndex,1);
    //  // Set Notes
     setNotes(notes);
      e.target.parentElement.remove();
  }


  const handleEditNote = (e)=>{
    setEdit(true);
    // handleChangeView();
    setView(!view)
    let text = view ? "New Note" : "Cancel ";
    document.querySelector('.new-note-btn').textContent = text
    const id = e.target.parentElement.id;
    const title = e.target.parentElement.childNodes[0].textContent
    const description= e.target.parentElement.childNodes[1].textContent;

    editNote = {
      id:id,
      title:title,
      description:description
    }

    setEditNote(editNote);

  }

  const handleChangeTitle = (e)=>{
    editNote = {
      id:editNote.id,
      title:e.target.value,
      description:editNote.description
    }
    setEditNote(editNote);
  }


  const handleChangeDescription = (e)=>{
    editNote = {
      id:editNote.id,
      title:editNote.title,
      description:e.target.value,
    }

    setEditNote(editNote);
    
  }

  const handleUpdate =(e)=>{

    e.preventDefault();
    const noteId=parseInt(editNote.id);
     const elementIndex = notes.findIndex(x=>x.id===noteId)
      notes.splice(elementIndex,1,editNote);

    setNotes(notes)
    setView(!view)
    let text = view ? "New Note" : "Cancel ";
    document.querySelector('.new-note-btn').textContent = text
    setEdit(false);
  }

  return (
    <div className="App">
      <Header handler={handleChangeView} />
      {error&& <h1 id='error'>Error! Please fill all the fields</h1>}
      {view ? <Form handleAddNotes={edit?handleUpdate:handleAddNotes} editNote ={editNote} handleEditTitle={handleChangeTitle} handleEditDescription = {handleChangeDescription} edit={edit} /> : <Card notes={notes} handleDeleteNote = {handleDeleteNote} handleEditNote={handleEditNote}/>}
    </div>
  );
}
