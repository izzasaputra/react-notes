import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/data";
import SearchInput from "./Search";
import NoteInput from "./NoteInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      tempNotes: getInitialData(),
      notFound: false,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onNotArchiveHandler = this.onNotArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: notes });
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  }

  onNotArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  }

  onSearchHandler({ inputSearch }) {
    let displayedNotes;
    if (inputSearch !== "" && inputSearch !== undefined) {
      const result = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(inputSearch.toLowerCase())
      );
      if (result.length > 0) {
        displayedNotes = result;
        this.setState({ notFound: false });
      } else {
        displayedNotes = this.state.notes;
        this.setState({ notFound: true });
      }
    } else {
      displayedNotes = [
        ...this.state.notes,
        ...this.state.tempNotes.filter((tempNote) => {
          const indexInTempNotes = this.state.notes.findIndex(
            (note) =>
              note.id === tempNote.id && note.archived !== tempNote.archived
          );
          return indexInTempNotes === -1;
        }),
      ];
      this.setState({ notFound: false });
    }
    this.setState({ notes: displayedNotes });
  }

  onAddNoteHandler({ title, note }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body: note,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <h1 className="title-label">Aplikasi Notes</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
        <div className="search-wrapper">
          <SearchInput onSearch={this.onSearchHandler} />
          <p className="warning-text">
            {this.state.notFound ? "tidak ada" : " "}
          </p>
        </div>
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onNotArchive={this.onNotArchiveHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
