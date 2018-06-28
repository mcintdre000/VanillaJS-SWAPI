async function makeApp() {
    console.log('hello');
    const div = document.createElement('div')
    div.innerHTML = `<h1>My App</h1>`
    const nav = document.createElement('nav')
    nav.innerHTML = `<a href='#home'>Home</a> | <a href=#characters>Characters</a>`
    div.appendChild(nav)
    if(location.hash === '#home') {
        const home = document.createElement('div')
        home.innerHTML = 'Welcome to Home'
        div.appendChild(home);
    } else if (location.hash === '#characters') {
        const characters = await characters();
        div.appendChild(characters);
    }
    return div
}