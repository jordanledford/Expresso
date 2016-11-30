import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery';

const wrapper = document.getElementsByClassName('likes-wrapper');
const likeEl = document.createElement('H6')
const likeContent = document.createTextNode('+ 1!')
likeEl.appendChild(likeContent)
const LikeCounter = function(evt){
  // Add .onclick to react FA El not here
  let Thumb = document.getElementsByClassName('fa')
  Thumb.onClick( function(){
    wrapper.appendChild(likeEl)
  })
}
module.exports LikeCounter
