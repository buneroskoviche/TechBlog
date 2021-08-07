const $newCommentBtn = document.querySelector('#newCommentBtn');
const $newCommentForm = document.querySelector('#newCommentForm');

const revealForm = () => {
    $newCommentBtn.classList.add('d-none');
    $newCommentForm.classList.remove('d-none');
    return;
}

const submitComment = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#newCommentText').value.trim();

    const urlArr = window.location.pathname.split('/');
    const post_id = urlArr[urlArr.length - 1];

    if(text) {
        const response = await fetch(`/posts/${post_id}/comments`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace(`/posts/${post_id}`);
        } else {
            alert('Failed to comment. Try again.')
        }

    } else {
        alert('Please enter some comment text.');
    }
    return;
}

$newCommentBtn.addEventListener('click', revealForm);
$newCommentForm.addEventListener('submit', submitComment);