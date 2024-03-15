import React, { useRef } from "react";
import Calender from "./Calender";
import { useState } from "react";
import NoteItem from "./NoteItem";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [note, setnote] = useState({
    title: "",
    desc: "",
    tag: "",
    id: "",
    date: "",
  });
  const [enote, setEnote] = useState({
    Etitle: "",
    Edesc: "",
    Etag: "",
    id: "",
    date: "",
  });
  const deletenote = (id) => {
    const newNote = allnote.filter((currnote) => {
      return currnote.id != id;
    });
    setAllnote(newNote);
  };
  const [allnote, setAllnote] = useState([]);
  const [currdate, setCurrDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    note.id = id;
    note.date = currdate;
    // console.log(note);
    setAllnote((allnote) => [...allnote, note]);
    // console.log(allnote);
    setnote({ title: "", desc: "", tag: "" });
  };
  const changeVal = (e) => {
    setnote({ ...note, [e.target.id]: e.target.value });
  };
  const handleESubmit = (e) => {
    //3
    e.preventDefault();
    closeref.current.click();
    let editedNote = JSON.parse(JSON.stringify(allnote));
    // console.log(editedNote);
    // console.log(enote);

    for (let index = 0; index < editedNote.length; index++) {
      let currnote = editedNote[index];

      if (currnote.id == enote.id) {
        currnote.title = enote.Etitle;
        currnote.desc = enote.Edesc;
        currnote.tag = enote.Etag;
      }
    }
    setAllnote(editedNote);
  };
  const changeEVal = (e) => {
    //2
    setEnote({ ...enote, [e.target.id]: e.target.value });
  };
  const editref = useRef();
  const closeref = useRef();

  const updatenote = (id, note) => {
    //1
    setEnote({
      Etitle: note.title,
      Edesc: note.desc,
      Etag: note.tag,
      id: note.id,
    });
    editref.current.click();
  };
  const getAllNotes = (date, noteset) => {
    console.log(date, noteset);
  };

  return (
    <>
      <Calender
        setCurrDate={setCurrDate}
        allnote={allnote}
        getAllNotes={getAllNotes}
      />
      <div>
        {currdate}

        {/* {allnote.map((curnote) => {
         if(curnote.date==currdate)
         console.log(curnote);
        })} */}
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label for="title" className="form-label">
            title
          </label>
          <input
            onChange={(e) => {
              changeVal(e);
            }}
            value={note.title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            description
          </label>
          <input
            onChange={(e) => {
              changeVal(e);
            }}
            value={note.desc}
            type="text"
            className="form-control"
            id="desc"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            tag
          </label>
          <input
            onChange={(e) => {
              changeVal(e);
            }}
            value={note.tag}
            type="text"
            className="form-control"
            id="tag"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {allnote.map((currnote) => {
        return (
          <NoteItem
            note={currnote}
            deletenote={deletenote}
            key={note.id}
            updatenote={updatenote}
          />
        );
      })}

      <button
        ref={editref}
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                onSubmit={(e) => {
                  handleESubmit(e);
                }}
              >
                <div className="mb-3">
                  <label htmlFor="Etitle" className="form-label">
                    title
                  </label>
                  <input
                    onChange={(e) => {
                      changeEVal(e);
                    }}
                    value={enote.Etitle}
                    type="text"
                    className="form-control"
                    id="Etitle"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Edesc" className="form-label">
                    description
                  </label>
                  <input
                    onChange={(e) => {
                      changeEVal(e);
                    }}
                    value={enote.Edesc}
                    type="text"
                    className="form-control"
                    id="Edesc"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Etag" className="form-label">
                    tag
                  </label>
                  <input
                    onChange={(e) => {
                      changeEVal(e);
                    }}
                    value={enote.Etag}
                    type="text"
                    className="form-control"
                    id="Etag"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                ref={closeref}
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
