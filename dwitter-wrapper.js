
import { h, app } from "hyperapp"


const state = {};


// u(t) is called 60 times per second.
// t: Elapsed time in seconds.
// S: Shorthand for Math.sin.
// C: Shorthand for Math.cos.
// T: Shorthand for Math.tan.
// R: Function that generates rgba-strings, usage ex.: R(255, 255, 255, 0.5)
// c: A 1920x1080 canvas.
// x: A 2D context for that canvas.



function u(t, S, C, T, R, c, x) {

}

const actions = {
  storeCanvas: (c) => (s, a) => {
    c.width = window.innerWidth - 1;
    c.height = window.innerHeight - 1;
    a.start();
    return {
      c,
      x: c.getContext('2d'),
      interval: setInterval(u, 17, ), ...s
    };
  },
  start: () => (s) => {

  },
};


const view = (s, a) => <div class="main">
  <canvas oncreate={c => a.storeCanvas(c)} />
</div>;


app(state, actions, view, document.body)
