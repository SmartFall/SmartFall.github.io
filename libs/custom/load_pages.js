// Function to load an external HTML file and inject it into a placeholder
function loadHTML(filePath, targetElementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(targetElementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Load the *.html files into the placeholder
loadHTML('/assets/pages/about-us.html', 'about-us-placeholder')
loadHTML('/assets/pages/news.html', 'news-placeholder');
loadHTML('/assets/pages/datasets.html', 'datasets-placeholder');
loadHTML('/assets/pages/people.html', 'people-placeholder');
loadHTML('/assets/pages/publications.html', 'publications-placeholder')
loadHTML('/assets/pages/demos.html', 'demos-placeholder')


