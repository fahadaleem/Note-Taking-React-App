import React from "react";


const NoteCard = (noteProp) => {
  return (
    <div id={noteProp.id} className="card-note">
      <h3 className='title'>{noteProp.title}</h3>
      <p className="description">{noteProp.description}</p>
      <button id="delete-note" onClick={noteProp.handleDelete}>Del</button>
      <button id="edit-note" onClick={noteProp.handleEdit}>Edit</button>
    </div>
  );
};


const Card = (props) => {

  console.log(props.notes.length)

  const headingTitle =
    props.notes.length===0 ? "There is No Notes" : "Your Notes";

  return (
    <div className="notes">
      <h1 className="heading-title">{headingTitle}</h1>
      <div className="notes-container">
        {props.notes.map(cur=>{
         return <NoteCard key={cur.id} id={cur.id} title = {cur.title} description = {cur.description} handleDelete={props.handleDeleteNote} handleEdit={props.handleEditNote}/>
        })}
      </div>
    </div>
  );
};

export default Card;
