function moveGamepadToBottom(options) {
    let maxH = 0;
    document.querySelectorAll('.bottom').forEach(el => {
        const rect = el.getBoundingClientRect();
        maxH = Math.max(rect.bottom, maxH)
    });
    const gamePadPaddingBottom = options?.paddingBottom ?? -20;
    const diffH = window.innerHeight - maxH - gamePadPaddingBottom;
    document.querySelectorAll('.bottom').forEach(el => {
        const rect = el.getBoundingClientRect();
        el.style.top = `${rect.top + diffH}px`;
    });
}

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

function resizeCanvas() {
    const canvas = document.getElementById('canvas');
    canvas.style.height = '100vh';
    canvas.style.width = `${(canvas.width / canvas.height) * 100}vh`;
    const canvasWidth = canvas.getBoundingClientRect().width;
    const left = (window.innerWidth / 2) - (canvasWidth / 2);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.imageRendering = 'pixelated';
    canvas.style.left = `${left}px`;
    canvas.style.transformOrigin = 'top left';
}

setInterval(() => resizeCanvas(), 3000);