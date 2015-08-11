// *************************************
//
//   Share
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';

// -------------------------------------
//   Base
// -------------------------------------

export default class Share extends React.Component {

  // ----- Constructor ----- //

  constructor( props ) {
    super( props );
  }

  // ----- Handle Share ----- //

  _handleShare( service ) {
    event.preventDefault();

    var popup = {
      height : 400,
      width  : 575,
      left   : 0,
      top    : 0
    };

    var url     = '';
    var options = `width=${ popup.width },height=${ popup.height },top=${ popup.top },left=${ popup.left }`;

    switch ( service ) {
      case 'twitter':
        url = `https://twitter.com/share?text=${ this.props.text }&url=${ this.props.url }`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${ this.props.url }`;
        break;
      case 'google':
        url = `https://plus.google.com/share?url=${ this.props.url }`;
        break;
    }

    window.open( url, service, options );
  }

  // ----- Render ----- //

  render() {
    var classNames = this.props.imageLoaded ? 'card card--b share is-loaded' : 'card card--b share';

    return(
      <div className={ classNames }>
        <p className='share-msg'>Share your character with the world!</p>
        <a className='btn btn--b share-link' onClick={ this._handleShare.bind( this, 'twitter' ) } href='#'>Twitter</a>
        <a className='btn btn--b share-link' onClick={ this._handleShare.bind( this, 'facebook' ) } href='#'>Facebook</a>
        <a className='btn btn--b share-link' onClick={ this._handleShare.bind( this, 'google' ) } href='#'>Google+</a>
      </div>
    );
  }

}
