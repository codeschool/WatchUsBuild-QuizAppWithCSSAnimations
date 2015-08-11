// *************************************
//
//   Results
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import Share from './share';
import Image from './image';

// -------------------------------------
//   Base
// -------------------------------------

export default class Results extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      character   : null,
      imageLoaded : false
    }
  }

  // ----- Component Did Mount ----- //

  componentDidMount() {
    var character = this._calculateResults();

    this.setState( { character } );
  }

  // ----- On Image Load ----- //

  _onImageLoad() {
    this.setState( { imageLoaded: true } );
  }

  // ----- Calculate Answers ----- //

  _calculateAnswers() {
    var matches   = [],
        answers   = this.props.answers,
        answerKey = this.props.answerKey;

    answers.forEach( ( answer, index) => {
      var originAnswer = answer;

      answerKey.forEach( ( item, index ) => {

        item.answers.forEach( ( answer, index ) => {
          if( originAnswer == answer ) {
            matches.push( item.character );
          }
        });

      });
    });

    return matches;
  }

  // ----- Calculate Results ----- //

  _calculateResults() {
    var array      = this._calculateAnswers(),
        matches    = {},
        maxElement = array[0],
        maxCount   = 1,
        filename   = '';

    for( var i = 0; i < array.length; i++ ) {
      var element = array[ i ];

      if ( matches[ element ] == null ) {
        matches[ element ] = 1;
      } else {
        matches[ element ]++;
      }

      if ( matches[ element ] > maxCount ) {
        maxElement = element;
        maxCount = matches[ element ];
      }
      else if ( matches[ element ] ==  maxCount) {
        maxElement += '&' + element;
        maxCount = matches[ element ];
      }
    }

    if ( maxElement.indexOf( '&' ) !== -1 ) {
      maxElement = maxElement.split( '&' )[0];
    }

    return maxElement;
  }

  // ----- Get Description ----- //

  _getDescription( character ) {
    var description = '';

    this.props.descriptions.forEach( ( item, index ) => {
      if ( this.state.character == item.character ) {
        description = item.description;
      }
    });

    return description;
  }

  // ----- Display Results ----- //

  _displayResults() {
    var character          = this._calculateResults(),
        filename           = `images/${ character.toLowerCase() }.svg`,
        descriptionClasses = this.state.imageLoaded ? 'character-description is-loaded mbf' : 'character-description mbf';

    return(
      <div className='bucket group mbm mbl--m'>
        <div className='bucket-media'>
          <Image
            src={ filename }
            alt={ character }
            className='character db mbm'
            width='250'
            onImageLoad={ this._onImageLoad.bind( this ) } />
        </div>
        <div className='bucket-content'>
          <p
            className={ descriptionClasses }
            dangerouslySetInnerHTML={{ __html: this._getDescription() }}>
          </p>
        </div>
      </div>
    );
  }

  // ----- Render ----- //

  render() {
    var results = this._displayResults();

    return(
      <div className='results'>
        { results }
        <Share
          imageLoaded= { this.state.imageLoaded }
          text={ `I just got a sneak peek at @codeschool’s new course, Adventures in Web Animations, by taking this sweet quiz:` }
          url='http://www.example.com' />
      </div>
    );
  }

}
