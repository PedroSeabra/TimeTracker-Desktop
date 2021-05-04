const { ipcRenderer } = require('electron');

let link = document.querySelector('#about');

link.addEventListener('click', function(){

    ipcRenderer.send('about-window');

});