$(function() {
  $( '.answer-link' ).on( 'click', function( event ) {
    event.preventDefault();

    $( '.answer-link' ).removeClass( 'is-selected' );
    $( this ).addClass( 'is-selected' );
    $('.btn[disabled]').attr('disabled', false);
  });
});
