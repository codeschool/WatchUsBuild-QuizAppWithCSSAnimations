// *************************************
//
//   Question
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';

// -------------------------------------
//   Base
// -------------------------------------

export default class Question extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      selected: false,
      selection: null
    };
  }

  // ----- Handle Selection ----- //

  _handleSelection( answer ) {
    event.preventDefault();

    this.setState( { selected: true, selection: answer } );
  }

  // ----- Handle Submit ----- //

  _handleSubmit() {
    event.preventDefault();

    this.props.submitHandler( this.state.selection );
    this.setState( { selected: false } );
  }

  // ----- Render Answers ----- //

  _renderAnswers() {
    var answers = this.props.answers.map( ( answer, index ) => {
      var answerClassNames = this.state.selected && this.state.selection === answer ? 'answer-link is-selected' : 'answer-link';

      return(
        <li key={ index } className='answer'>
          <a
            href='#'
            className={ answerClassNames }
            onClick={ this._handleSelection.bind( this, answer ) }>
            { answer }
          </a>
        </li>
      );
    });

    return answers;
  }

  // ----- Render ----- //

  render() {
    var answers = this._renderAnswers();

    return(
      <div className='question'>
        <h2>{ this.props.title }</h2>
        <ul className='has-answer'>
          { answers }
        </ul>
        <div className='tac tal--m'>
          <button
            className='btn'
            onClick={ this._handleSubmit.bind( this ) } disabled={ !this.state.selected }>
            Next Question
          </button>
        </div>
      </div>
    );
  }

}
