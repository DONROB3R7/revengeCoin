import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

// Parallax scrolling effect
window.addEventListener("scroll", function (event) {
  var depth, i, layer, layers, len, movement, topDistance, translate3d;
  topDistance = this.pageYOffset;
  layers = document.querySelectorAll("[data-type='parallax']");
  for (i = 0, len = layers.length; i < len; i++) {
    layer = layers[i];
    depth = layer.getAttribute("data-depth");
    movement = -(topDistance * depth);
    translate3d = "translate3d(0, " + movement + "px, 0)";
    layer.style["-webkit-transform"] = translate3d;
    layer.style["-moz-transform"] = translate3d;
    layer.style["-ms-transform"] = translate3d;
    layer.style["-o-transform"] = translate3d;
    layer.style.transform = translate3d;
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
