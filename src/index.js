let appleButton = document.getElementById('appleButton'),
    apple100Button = document.getElementById('apple100Button'),
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