const $newPostBtn = document.querySelector('#newPostBtn');
const $newPostForm = document.querySelector('#newPostForm');

const revealForm = () => {
    $newPostBtn.classList.add('d-none');
    $newPostForm.classList.remove('d-none');
    return;
}

const submitPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPostTitle').value.trim();
    const content = document.querySelector('#newPostContent').value.trim();

    if(title && content) {
        const response = await fetch(`/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to post. Try again.')
        }

    } else {
        alert('Please enter a post title and text.');
    }
    return;
}

$newPostBtn.addEventListener('click', revealForm);
$newPostForm.addEventListener('submit', submitPost);