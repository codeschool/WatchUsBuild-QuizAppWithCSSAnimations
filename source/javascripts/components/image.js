// *************************************
//
//   Image
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';

// -------------------------------------
//   Base
// -------------------------------------

export default class Image extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );

    this.state = {
      loaded: false
    }
  }

  // ----- On Image Load ----- //

  _onImageLoad() {
    if ( this.props.onImageLoad ) {
      this.props.onImageLoad();
    }

    this.setState( { loaded: true } );
  }

  // ----- Component Did Mount ----- //

  componentDidMount() {
    var img    = React.findDOMNode( this.refs.img );
    img.onload = this._onImageLoad.bind( this );
  }

  // ----- Render ----- //

  render() {
    if ( this.props.className ) {
      var classNames = this.state.loaded ? `${ this.props.className } is-loaded` : this.props.className;
    }

    return(
      <img
        ref='img'
        src={ this.props.src }
        alt={ this.props.alt }
        width={ this.props.width }
        height={ this.props.height }
        className={ classNames } />
    );
  }

}
