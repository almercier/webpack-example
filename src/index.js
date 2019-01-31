import {MyComponent} from "./MyComponent";

let appleButton = document.getElementById('appleButton'),
    apple100Button = document.getElementById('apple100Button'),
    scopeTestButton = document.getElementById('scopeTestButton'),
    bananaButton = document.getElementById('bananaButton');

appleButton.onclick = function() {
    console.log('apple');
};

bananaButton.onclick = function() {
    console.log('banana');
};

apple100Button.onclick = function() {
    for (let i = 0; i < 100; i++) {
        console.log('apple');
    }
};

scopeTestButton.onclick = function() {
    let comp = new MyComponent();
    comp.tf['keyTyped'].call(comp.tf, 'keyTyped');
};

