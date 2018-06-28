const root = document.querySelector('#root')

async function render() {
    const appContent = await makeApp();
    while(root.firstChild) {
    root.removeChild(root.firstChild)
    }
    root.appendChild(appContent);
}

render();

window.onhashchange = render;