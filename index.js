// certificate pop up image
document.querySelectorAll('#certificate img').forEach(image => {
    image.onclick = () => {
        const popupImage = document.querySelector('#popup-img');
        popupImage.src = image.getAttribute('src');
        document.querySelector('.popup-image').style.display = 'block';
    }
});

document.querySelector('.close-popup').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}



