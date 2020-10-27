import React from "react";

const Form = (props) => {
  return (
    <div>
      <h1 className="heading-title">Add New Note</h1>
      <form onSubmit={props.handleAddNotes}>
        <div>
          <input
            type="text"
            id="note-title"
            placeholder="Enter Note Title"
            name="note_title"
            value={props.edit ? props.editNote.title : undefined}
            onChange={props.edit ? props.handleEditTitle : null}
            maxLength="150"
          />
        </div>
        <div>
          <textarea
            id="note-description"
            placeholder="Type Your Note Here"
            name="note_description"
            value={props.edit ? props.editNote.description : undefined}
            onChange={props.edit ? props.handleEditDescription : null}
          ></textarea>
        </div>

        <div>
          <button id="note-submit-btn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
