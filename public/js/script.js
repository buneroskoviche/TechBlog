const signUp = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signupUsername').value.trim();
    const email = document.querySelector('#signupEmail').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if(name && email && password) {
        const response = await fetch('/signup', {
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


document
    .querySelector('.signUp')
    .addEventListener('submit', signUp);