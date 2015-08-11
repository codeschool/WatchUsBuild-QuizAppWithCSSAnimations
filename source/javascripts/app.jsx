// *************************************
//
//   Application
//   -> Manifest
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

import React from 'react';
import App from './components/app';

// -------------------------------------
//   Characters
// -------------------------------------

var characters     = [ 'Unicorn', 'Rainbow', 'Cupcake', 'Donut' ];
var characterNames = [ 'Sparkles', 'Pierre', 'Sweetheart', 'Beau Knut' ];

// -------------------------------------
//   Questions
// -------------------------------------

var questions = [
  {
    title   : 'What do you value the most?',
    answers : [
      'Intelligence',
      'Friendship',
      'Power',
      'Candy',
    ]
  },
  {
    title   : 'If you could live anywhere, where would you choose?',
    answers : [
      'New York City',
      'Iceland',
      'Iowa',
      'A field of lollipops',
    ]
  },
  {
    title   : 'Your friends would say you’re…',
    answers : [
      'Sweet',
      'Sarcastic',
      'Supportive',
      'I don’t have any friends',
    ]
  },
  {
    title   : 'You have a day to yourself — how do you spend it?',
    answers : [
      'All by myself',
      'Outsmarting someone',
      'Hanging out with friends',
      'Eating candy',
    ]
  },
  {
    title   : 'What are you most afraid of?',
    answers : [
      'Socializing',
      'Being alone',
      'Not living up to my full potential',
      'Running out of candy',
    ]
  },
];

// -------------------------------------
//   Answer Key
// -------------------------------------

var answerKey = [
  {
    character : 'Unicorn',
    answers   : [
      'Candy',
      'A field of lollipops',
      'Supportive',
      'Eating candy',
      'Running out of candy'
    ]
  },
  {
    character : 'Rainbow',
    answers   : [
      'Power',
      'Iceland',
      'I don’t have any friends',
      'All by myself',
      'Socializing'
    ]
  },
  {
    character : 'Cupcake',
    answers   : [
      'Friendship',
      'Iowa',
      'Sweet',
      'Hanging out with friends',
      'Being alone'
    ]
  },
  {
    character : 'Donut',
    answers   : [
      'Intelligence',
      'New York City',
      'Sarcastic',
      'Outsmarting someone',
      'Not living up to my full potential'
    ]
  }
];

// -------------------------------------
//   Descriptions
// -------------------------------------

var descriptions = [
  {
    character   : 'Unicorn',
    description :
      `
      <strong>You are Sparkles the Unicorn!</strong> You’re sweet, optimistic,
      and see the best in everyone — even if they don’t think candy is a food
      group. Your positivity lights your path and keeps you going on the
      darkest days (i.e., when your candy runs out).  When you come down from
      your sugar high, be sure to play <a href='#'>Adventures in Web Animations</a>
      — coming soon!
      `
  },
  {
    character   : 'Rainbow',
    description :
      `
      <strong>You are Pierre the Rainbow!</strong> You’re sarcastic, smart, and
      always up for an adventure — but you’d prefer to float solo. You may have
      your head in the clouds, but your feet are firmly on Lemony Brick Road.
      See Pierre in action when you play <a href='#'>Adventures in Web Animations</a>
      — coming soon!
      `
  },
  {
    character   : 'Cupcake',
    description :
      `
      <strong>You are Sweetheart the Cupcake!</strong> You’re loyal, friendly,
      and love a big party — especially if it means meeting lots of new people.
      You’re up for anything, as long as you’re surrounded by 50 of your
      closest friends. Keep up with Sweetheart and share your skills when you
      play <a href='#'>Adventures in Web Animations</a> — coming soon!
      `
  },
  {
    character   : 'Donut',
    description :
      `
      <strong>You are Beau Knut the Donut!</strong> You’re sassy, determined,
      and sometimes a little too smart for your own sprinkles. You don’t have a
      problem outsmarting the Tangy Tart Trickster as he tries to halt your
      progress on the way to Frosting Fortress. Put your smarts to the test
      when you play <a href='#'>Adventures in Web Animations</a> — coming soon!
      `
  }
];

// -------------------------------------
//   Base
// -------------------------------------

React.render(
  <App
    descriptions={ descriptions }
    answerKey={ answerKey }
    questions={ questions }
    characters={ characters }
    characterNames={ characterNames } />,

  document.getElementById( 'app' )
);
