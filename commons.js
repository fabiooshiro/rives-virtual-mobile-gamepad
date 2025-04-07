function openSettings() {
    window.ReactNativeWebView.postMessage('openSettings');
}

(async () => {
    let canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    let loader = document.getElementById('canvas-load');
    loader.style.height = window.innerWidth + 'px';
    loader.style.width = window.innerWidth + 'px';
})();
