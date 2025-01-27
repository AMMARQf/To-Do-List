
// theme button

const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
localStorage.setItem('theme', theme);

const themeBtnMain = document.getElementById('theme-btn-main');
const defaultTheme = localStorage.getItem('theme');

if (defaultTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtnMain.innerHTML = defaultTheme;
} else {
    document.body.classList.remove('dark-mode');
    themeBtnMain.innerHTML = defaultTheme;
}


themeBtnMain.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    themeBtnMain.innerHTML = localStorage.getItem('theme');
});

