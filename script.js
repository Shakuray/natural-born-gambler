
const button = document.getElementById('play');
const video = document.getElementById('video');

video.addEventListener('ended', function() {
    button.style.display = '';
});

button.addEventListener('click', function() {
    const videos = ["./media/head.mp4", "./media/tails.mp4"];
    const random = Math.floor(Math.random() * 2);
    video.src = videos[random];
    video.play();
    button.style.display = 'none';
});