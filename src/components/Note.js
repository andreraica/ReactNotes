import React, { Component } from 'react';
import '../style/Notes.css';

class Note extends Component {
  
  constructor(){
    super();
    this.state = { notes : [] };
  }

  componentDidMount(){
    this.setState({ notes: this.props.generateNotesParam() });   
  }

  render() {
    return (
      <div>

        {this.state.notes.map(function(item){ 
            return (
            <div className="quote-container" key={item.description}> 
              <i className="pin"></i>
              <blockquote className={'note ' + item.color}>
              {item.description}
              <cite className="author">{item.actor}</cite>
              </blockquote>
            </div>
            )
        })};
        
      </div>
    );
  }
}

export default Note;
