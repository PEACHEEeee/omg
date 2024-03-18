document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('cameraStream');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => {
                console.error("Something went wrong!", error);
            });
    }
});
