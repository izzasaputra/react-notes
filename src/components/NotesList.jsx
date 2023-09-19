import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive, onNotArchive }) {
  return (
    <div>
      <h1>List Note</h1>
      <div className="note-list-wrapper">
        {notes.some((note) => !note.archived) ? (
          notes.map((note) => {
            if (!note.archived) {
              return (
                <NotesItem
                  key={note.id}
                  onDelete={onDelete}
                  {...note}
                  onArchive={onArchive}
                  onNotArchive={onNotArchive}
                />
              );
            }
            return null;
          })
        ) : (
          <p className="not-found">Tidak ada catatan.</p>
        )}
      </div>
      <h1>Archived Note</h1>
      <div className="note-list-wrapper">
        {notes.some((note) => note.archived) ? (
          notes.map((note) => {
            if (note.archived) {
              return (
                <NotesItem
                  key={note.id}
                  onDelete={onDelete}
                  {...note}
                  onArchive={onArchive}
                  onNotArchive={onNotArchive}
                />
              );
            }
            return null;
          })
        ) : (
          <p className="not-found">Tidak ada catatan.</p>
        )}
      </div>
    </div>
  );
}

export default NotesList;
