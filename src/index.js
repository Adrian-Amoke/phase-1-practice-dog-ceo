console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    loadImages();
    loadBreeds();
});
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => addImage(image))
    })
}

