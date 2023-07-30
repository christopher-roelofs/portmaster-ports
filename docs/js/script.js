// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// lets use jquery to process the json
function displayCardDetails(data) {



    // $('#title').html(a.title);
    // $('#desc').html(a.desc);
    // $('#instructions').html(a.instr);
    // $('#genres').html(a.genres.join(","));
    // $('#porter').html(a.porter);
    // $('#reqs').html(a.reqs.join(","));
    // $('#download_url').src(p.download_url);
    // $('$download_size').scr(p.download_size);
    // $('#date_added').html(p.date_added);
    // $('#date_updated').html(p.date_iupdated);
    // $('#md-block').src("https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/wiki/" + data.name.toLowerCase().replace("zip", "md"));

    const detailsContainer = document.getElementById('details-container');

    data.attr.title ? document.getElementById('title').textContent = data.attr.title : document.getElementsByClassName('title').hidden = true;


    document.getElementById("screenshot").src = (data.attr.media.screenshot ? "https://raw.githubusercontent.com/christianhaitian/PortMaster/main/images/" + data.attr.media.screenshot : "https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/no.image.png");
    imageElement.className = "screenshot"

    data.attr.desc ? document.getElementById('desc').textContent = data.attr.desc : document.getElementsByClassName('desc').hidden = true;
    data.attr.instr ? document.getElementById('instr').textContent = data.attr.instr : document.getElementsByClassName('instr').hidden = true;
    data.attr.porter ? document.getElementById('porter').textContent = data.attr.porter : document.getElementsByClassName('porter').hidden = true;

    const genreElement = document.getElementById('genres');
    genreElement.textContent = "Genres: " + data.attr.genres.join();

    data.attr.porter ? document.getElementById('porter').textContent = data.attr.porter : document.getElementsByClassName('porter').hidden = true;
    const runtimeElement = document.getElementById('runtime');
    runtimeElement.textContent = "Runtime: " + (data.attr.runtime ?? 'None');

    const requirementsElement = document.getElementById('reqs');
    requirementsElement.textContent = "Requirements: " + (data.attr.reqs.join(","));


    const fileElement = document.getElementById("a");
    fileElement.textContent = data.name;
    fileElement.setAttribute("href", data.download_url);

    const markdownElement = document.getElementById("md-block");
    markdownElement.setAttribute("src", "https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/wiki/" + data.name.toLowerCase().replace("zip", "md"));




    detailsContainer.appendChild(titleElement);
    detailsContainer.appendChild(imageElement);
    detailsContainer.appendChild(contentElement);
    detailsContainer.appendChild(instructionElement);
    detailsContainer.appendChild(runtimeElement);
    detailsContainer.appendChild(genreElement);
    detailsContainer.appendChild(requirementsElement);
    detailsContainer.appendChild(porterElement);
    detailsContainer.appendChild(fileElement);
    detailsContainer.appendChild(markdownElement);

}


// Fetch JSON data from the URL and display card details
async function fetchDataAndDisplayDetails() {
    try {
        const title = getUrlParameter('title');
        const response = await fetch('https://raw.githubusercontent.com/christopher-roelofs/portmaster-ports/main/ports.json'); // Replace 'YOUR_JSON_URL_HERE' with the actual URL of your JSON data.
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        var jsonData = await response.json();
        jsonData = jsonData.ports;
        var card = null;

        for (var key of Object.keys(jsonData)) {
            if (jsonData[key].attr.title === title) {
                card = jsonData[key];
            }
        };


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