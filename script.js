document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    let currentRating = 0;

    function setRating(value) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
        ratingValue.textContent = value;
        currentRating = value;
    }

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.getAttribute('data-value'));
            setRating(value);
        });

        star.addEventListener('mouseout', () => {
            setRating(currentRating);
        });

        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            setRating(value);
        });
    });
});
