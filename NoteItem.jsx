import React from "react";

export default function NoteItem(props) {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{props.note.title}</h5>
          <p class="card-text">{props.note.desc}</p>
          <p class="card-text">{props.note.tag}</p>
        </div>
        <button
          onClick={() => {
            props.updatenote(props.note.id, props.note);
          }}
          type="button"
          class="btn btn-outline-success"
        >
          edit
        </button>
        <button
          onClick={() => {
            props.deletenote(props.note.id);
          }}
          type="button"
          class="btn btn-outline-success"
        >
          delete
        </button>
      </div>
    </>
  );
}
