// Get references to the sun and moon containers
const sunContainer = document.getElementById('sun-container');
const moonContainer = document.getElementById('moon-container');
const body = document.body;  // Reference to the body element
const clouds = document.querySelectorAll('#cloud-container svg, #cloud-container1 svg, #cloud-container2 svg');

// Toggle between sun and moon on click
sunContainer.addEventListener('click', () => {
    // Move sun off-screen
    sunContainer.style.top = '100vh'; // Move the sun down off the screen

    // Move the moon up
    moonContainer.style.bottom = '500px'; // Bring the moon up to its original position

        // Change the background color of the body
        body.style.backgroundColor = '#0a0a1a'; // Dark color when the sun is clicked

        clouds.forEach(cloud => {
            cloud.querySelectorAll('circle').forEach(circle => {
                circle.setAttribute('fill', '#c9c9c9');  // Darker clouds color
            });
        });
});

moonContainer.addEventListener('click', () => {
    // Move moon off-screen
    moonContainer.style.bottom = '-250px'; // Move the moon down off the screen

    // Bring the sun back
    sunContainer.style.top = '200px'; // Bring the sun back to its original position

    body.style.backgroundColor = 'skyblue'; // Revert background color to the original one

    clouds.forEach(cloud => {
        cloud.querySelectorAll('circle').forEach(circle => {
            circle.setAttribute('fill', '#f2f2f2');  // Darker clouds color
        });
    });
});
