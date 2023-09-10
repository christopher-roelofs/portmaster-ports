
async function loadTable() {

    var jsonData = {};
    try {
        var response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster_metadata/main/metadata.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        jsonData = await response.json();
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }

    const tbody = document.getElementById('tbody');

    for (var key of Object.keys(jsonData)) {
        const row = document.createElement('tr');
        const rating = document.createElement('td');
        rating.textContent = jsonData[key].rating;
        const developer = document.createElement('td');
        developer.textContent = jsonData[key].developer;
        const genre = document.createElement('td');
        genre.textContent = jsonData[key].genre;
        const name = document.createElement('td');
        name.textContent = jsonData[key].name;
        
        row.appendChild(name);
        row.appendChild(genre);
        row.appendChild(developer);
        row.appendChild(rating);
        tbody.appendChild(row);
        
    };
    new DataTable('#example');
}

loadTable();
