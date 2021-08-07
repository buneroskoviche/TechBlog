const logout = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'POST',
    });

    if(response.ok) {
        alert('Successfully logged out.');
        document.location.replace('/');
    }
}


document
    .querySelector('#logoutBtn')
    .addEventListener('click', logout);