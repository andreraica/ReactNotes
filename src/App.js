import React, { Component } from 'react';
import './style/Notes.css';
import Note from './components/Note'
import { Link } from 'react-router-dom'

class App extends Component {
 
  constructor(){
    super();    
    this.state = {notes: [], newNote:''};

    //bind this do react
    this.setNote = this.setNote.bind(this);
    this.generateNotes = this.generateNotes.bind(this);
    this.addNote = this.addNote.bind(this);

    //inicializa lista
    this.state.notes.push({description:'Anotação 1', actor:'Autor A', color:'yellow'});
    this.state.notes.push({description:'Anotação 2', actor:'Autor B', color:'yellow'});
  }
  
  generateNotes(){
    return this.state.notes;
  }

  addNote(event){
    event.preventDefault();
    this.state.notes.push({description: this.state.newNote, actor:'', color:'yellow'});
    this.setState({notes : this.state.notes})
  }

  setNote(evento){
    this.setState({newNote:evento.target.value});
  }

  render() {
    return (
      <div>
        <p>
          <ul>
            <li><Link to='/'>Notas</Link></li>
            <li><Link to='/about'>Sobre</Link></li>
          </ul>
        </p>
        <p>
          <input type="text" id="note" onChange={this.setNote} /> 
          <input type="button" id="btnAdd" value="Add" onClick={this.addNote}/> 
        </p>
        <p>
          <input type="text" id="noteFilter" /> <a href="">Filtrar</a>
        </p>

        <Note generateNotesParam={this.generateNotes} />
      </div>
    );
  }
}

export default App;
