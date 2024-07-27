document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next-button');
    const animeImage = document.getElementById('anime-image');
    
    // whole lotta choices
    const categories = ['waifu', 'neko', 'trap', 'blowjob'];
    const nsfwTypes = ['sfw', 'nsfw']; 
    
    async function fetchRandomNSFWImage() {
        try {
            
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const randomType = nsfwTypes[Math.floor(Math.random() * nsfwTypes.length)];
            const apiUrl = `https://api.waifu.pics/${randomType}/${randomCategory}`;
            
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data && data.url) {
                animeImage.src = data.url;
                animeImage.style.opacity = 0;
                setTimeout(() => {
                    animeImage.style.opacity = 1;
                }, 50);
            } else {
                console.error('No image URL returned from API.');
            }
        } catch (error) {
            console.error('Error fetching NSFW image:', error);
        }
    }

    nextButton.addEventListener('click', fetchRandomNSFWImage);

    
    fetchRandomNSFWImage();
});
