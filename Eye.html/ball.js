document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye => {
        const eyeBall = eye.querySelector('.eye-ball');

        // Get position of the eye relative to the viewport
        const eyeRect = eye.getBoundingClientRect();

        // Calculate the center of the eye
        const centerX = eyeRect.left + eyeRect.width / 2;
        const centerY = eyeRect.top + eyeRect.height / 2;

        // Calculate the angle between the center of the eye and the mouse position
        const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

        // Calculate the maximum distance the eye ball can move (half the width of the eye)
        const maxDistance = eyeRect.width / 2 - eyeBall.offsetWidth / 2;

        // Calculate the new position of the eye ball
        const ballX = Math.cos(angle) * maxDistance;
        const ballY = Math.sin(angle) * maxDistance;

        // Apply the new position
        eyeBall.style.transform = `translate(${ballX}px, ${ballY}px)`;
    });
});
