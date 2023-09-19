import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      note: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const value = event.target.value;
    this.setState({
      title: value.substring(0, this.state.maxTitleLength),
    });
  }
  onNoteChangeEventHandler(event) {
    this.setState(() => {
      return {
        note: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", note: "" });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <div>
          <p className="text-length">
            Sisa karakter : {this.state.maxTitleLength - this.state.title.length}
          </p>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            className="input-form"
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Note"
            value={this.state.note}
            onChange={this.onNoteChangeEventHandler}
            className="input-form"
          />
        </div>
        <button type="submit" className="button-add-note">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
