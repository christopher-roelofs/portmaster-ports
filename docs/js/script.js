// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function displayCardDetails(data) {

    data.attr.title ? document.getElementById('title').textContent = data.attr.title : document.getElementsByClassName('title').hidden = true;


    imageElement = document.getElementById("screenshot")
    imageElement.src = (data.attr.media.screenshot ? "https://raw.githubusercontent.com/christianhaitian/PortMaster/main/images/" + data.attr.media.screenshot : "https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/no.image.png");


    //data.attr.desc ? document.getEleme('desc').textContent = data.attr.desc : document.getElementsByClassName('desc').hidden = true;
    descriptionElement = document.getElementById('desc');
    descriptionElement.textContent = data.attr.desc;
    data.attr.instr ? document.getElementById('instr').textContent = data.attr.instr : document.getElementsByClassName('instr').hidden = true;
    data.attr.porter ? document.getElementById('porter').textContent = data.attr.porter : document.getElementsByClassName('porter').hidden = true;

    data.downloadcount ? document.getElementById('download_count').innerHTML = textContent = data.download_count : document.getElementsByClassName('porter').hidden = true;

    // ```````````````````````````````````````````````````````````````````````````````````````const genreElement``````````````````````````````````````````````````````````````````````````````````````` = document.getElementById('genres');
    // genreElement.textContent = data.attr.genres.join();
    
    var taggedGenres = "";
    data.attr.genres.forEach((genre) => {
        taggedGenres += '<span class="badge bg-primary">' + genre + '</span>';
    });
    
       taggedGenres ? document.getElementById("genres").innerHTML = taggedGenres : true;

    data.attr.porter ? document.getElementById('porter').textContent = data.attr.porter : document.getElementsByClassName('porter').hidden = true;

    const runtimeElement = document.getElementById('runtime');
    runtimeElement.textContent = data.attr.runtime ?? 'None';

    const requirementsElement = document.getElementById('reqs');
    requirementsElement.textContent = data.attr.reqs.join();


    const downloadElement = document.getElementById("download");
    downloadElement.setAttribute("onclick", "window.location.href='" + data.download_url + "';");

    const markdownElement = document.getElementById("markdown");
    markdownElement.setAttribute("src", "https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/wiki/" + data.name.toLowerCase().replace("zip", "md"));


}


// Fetch JSON data from the URL and display card details
async function fetchDataAndDisplayDetails() {
    try {
        const name = getUrlParameter('name');



        var response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/ports.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        var jsonData = await response.json();
        jsonData = jsonData.ports;
        var card = null;

        for (var key of Object.keys(jsonData)) {
            if (jsonData[key].name === name) {
                card = jsonData[key];
            }
        };

        try {
            var response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/counts.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            countsData = await response.json();
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }

        card["download_count"] = countsData[card.name]

        if (card) {
            displayCardDetails(card);
        } else {
            const detailsContainer = document.getElementById('details-container');
            const notFoundElement = document.createElement('p');
            notFoundElement.textContent = 'Card not found.';
            detailsContainer.appendChild(notFoundElement);
        }
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}