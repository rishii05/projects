document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'goldapi-1fnbkfslxx642ze-io'; // 
    const apiUrl = 'https://www.goldapi.io/api/XAU/USD'; 
    const goldRateDiv = document.getElementById('goldRate');

    function fetchGoldRate() {
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-access-token': apiKey,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check the structure of the data
            updateGoldRate(data);
        })
        .catch(error => {
            console.error('Error fetching gold rate:', error);
            goldRateDiv.textContent = 'Error fetching gold rate';
        });
    }

    function updateGoldRate(data) {
        const goldRate = data.price; // Adjust based on the API response structure
        goldRateDiv.textContent = `Current Gold Rate: $${goldRate.toFixed(2)} per ounce`;
    }

    // Fetch the gold rate immediately
    fetchGoldRate();

    // Refresh the gold rate every 30 minutes (1800000 milliseconds)
    setInterval(fetchGoldRate, 1800000);
});
