let current = 0;

function doLogin() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const userVal = username.value.trim();
    const passVal = password.value.trim();

    username.classList.remove("input-error");
    password.classList.remove("input-error");

    let error = false;

    if (!userVal) {
        username.classList.add("input-error");
        error = true;
    }

    if (!passVal) {
        password.classList.add("input-error");
        error = true;
    }

    if (error) return;

    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    goTo(1);
}

function goTo(n) {

    if (current) {
        document.getElementById('page' + current).style.display = 'none';
    }

    current = n;

    document.getElementById('page' + current).style.display = 'flex';

    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.pagination-bar .page-btn');

    if (buttons[n]) {
        buttons[n].classList.add('active');
    }
}

function nextPage() {
    if (current < 4) goTo(current + 1);
}

function prevPage() {
    if (current > 1) goTo(current - 1);
}
