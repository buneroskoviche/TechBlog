const signUp = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if(name && email && password) {
        const response = await fetch('api/users/signup', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            alert('Sign up successful! Try loggin in.')
            document.location.replace('/login');
        } else {
            alert('Failed to sign up. Try again.')
        }

    } else {
        alert('Please enter a username, email, and password.');
    }

    return;
}

const login = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if(email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            alert('Successfully logged in!')
            document.location.replace('/');
        }

    } else {
        alert('Please enter a email and password.');
    }

    return;
}

document
    .querySelector('.signUp')
    .addEventListener('submit', signUp);

document
    .querySelector('.logIn')
    .addEventListener('submit', login);