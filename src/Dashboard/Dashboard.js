import React from 'react';
// import React, { useState, useEffect, useReducer } from "react";
import uuidv1 from 'uuid/v1';
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      content: '',
    };
  }
  //////
  // const Dashboard = () => {
  //   let [notes, setNotes] = useState([]);
  //   let [title, setTitle] = useState('');
  //   let [content, setContent] = useState('')
  // };
  //////

  addNote = (title,content) => {
    let id = uuidv1();
    this.setState(prev => ({
      notes: [...prev.notes,{title, content,id}],
    }));
  };

  handleTitle = (event) => this.setState({ title: event.target.value });

  handleContent = (event) => this.setState({ content: event.target.value });

  handleSubmit = async (event) => {
    event.preventDefault();

    await this.addNote(this.state.title,this.state.content);
  };

  handleRemoveNote = (note) => {
    this.setState(previousState => ({
      notes: previousState.notes.filter(currentNotes => currentNotes.id !== note.id),
    }));
  };

/////////////////
  handleUpdateNote = (note) =>
      this.setState((previousState) => {
        const updateNotes = previousState.notes.map(currentNote =>
            note.id === currentNote.id ? note : currentNote
        );
        return { notes: updateNotes };

      });
  ///////////////
  render(){
    return (
        <div>
          <NoteCreateForm
              handleTitle={this.handleTitle}
              handleContent={this.handleContent}
              handleSubmit={this.handleSubmit}
          />
          <NoteList
              notes={this.state.notes}
              handleRemoveNote={this.handleRemoveNote}
              handleUpdateNote={this.handleUpdateNote}
          />
        </div>
    );
  }
}

