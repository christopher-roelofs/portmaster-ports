var jsonData = null;
var countsData = null;
// Function to create a card element for each JSON object
function createCard(data) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    const titleElement = document.createElement('h3');
    titleElement.textContent = data.attr.title;

    titleElement.addEventListener('click', () => {
        handleCardClick(data.name);
    });
    var image = "https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/no.image.png";
    if (data.attr.media.screenshot !== null) {
      image =   "https://raw.githubusercontent.com/christianhaitian/PortMaster/main/images/" +  data.attr.media.screenshot;
    }
    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.className = "card-img"

    imageElement.addEventListener('click', () => {
        handleCardClick(data.name);
    });

    const contentElement = document.createElement('p');
    contentElement.textContent = "Description: " + data.attr.desc;

    const instructionElement = document.createElement('p');
    instructionElement.textContent = "Instructions: " + (data.instructions ?? '');


    const genreElement = document.createElement('p');
    genreElement.textContent = "Genres: " + data.attr.genres.join();

    const porterElement = document.createElement('p');
    porterElement.textContent = "Porter: " + data.attr.porter;

    const downloadCountElement = document.createElement('p');
    downloadCountElement.textContent = "Downloads: " + countsData[data.name];


    cardElement.appendChild(titleElement);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(contentElement);
    cardElement.appendChild(instructionElement);
    cardElement.appendChild(genreElement);
    cardElement.appendChild(porterElement);
    cardElement.appendChild(downloadCountElement);


    return cardElement;
}

// Function to iterate over the JSON data and display cards
function displayCards(data) {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; // Clear previous cards
    for (var key of Object.keys(data)) {
        const card = createCard(data[key]);
        cardsContainer.appendChild(card);
    };
}

// Function to filter the cards based on the search query
function filterCards() {
    const searchQuery = document.getElementById('search-bar').value.trim().toLowerCase();
    const readyToRun = document.getElementById('filter-toggle').checked;
    var filteredData = {}
    var queries = searchQuery.split(" ");
    for (var key of Object.keys(jsonData)) {
        queries.forEach(element => {
            if (jsonData[key].attr.title.toLowerCase().includes(element) || jsonData[key].attr.genres.join().toLowerCase().includes(element) || jsonData[key].attr.porter.toLowerCase().includes(element)) {

                if (readyToRun){
                    if (jsonData[key].attr.rtr){
                        filteredData[key] = jsonData[key];
                    }
                }
                else {
                    filteredData[key] = jsonData[key];
                }
                
                
            }
        });

    };
    displayCards(filteredData);
}

// Function to handle the card title click and redirect to the detail page
function handleCardClick(name) {
    window.location.href = `detail.html?name=${encodeURIComponent(name)}`;
}

// Function to clear the search bar and show all cards
function clearSearch() {
    document.getElementById('search-bar').value = ''; // Clear the search input
    filterCards(); // Show all cards again
}

// Fetch JSON data from the URL and then display the cards
async function fetchDataAndDisplayCards() {

    try {
        var response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/counts.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        countsData = await response.json();
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }

    try {
        var response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/ports.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        jsonData = await response.json();
        jsonData = jsonData.ports
        displayCards(jsonData);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

// Call the initial fetchDataAndDisplayCards function when the page is loaded
window.onload = function () {
    fetchDataAndDisplayCards();
    document.getElementById('search-bar').addEventListener('input', filterCards);
};