import React from "react";
import ArchivedButton from "./ArchivedButton";
import DeleteButton from "./DeleteButton";
import NotArchivedButton from "./NotArchiveButton";
import { showFormattedDate } from "../utils/data";

function NotesItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onNotArchive,
}) {
  return (
    <div className="card-item">
      <h1 className="note-title">{title}</h1>
      <p className="note-date">{showFormattedDate(createdAt)}</p>
      <p className="note-body">{body}</p>
      <div className="button-action-wrapper">
      <DeleteButton id={id} onDelete={onDelete} />
      {!archived ? (
        <ArchivedButton id={id} onArchive={onArchive} />
      ) : (
        <NotArchivedButton id={id} onNotArchive={onNotArchive} />
      )}
      </div>
    </div>
  );
}

export default NotesItem;
