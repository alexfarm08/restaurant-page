export function home() {
    const pageContent = document.getElementById("content");

    // CREATES TITLE SECTION FOR HOME PAGE
    const titleSection = document.createElement("section");
    titleSection.classList.add("title");
    pageContent.appendChild(titleSection);

    const title = document.createElement("h1");
    title.textContent = "Pizza Pizazz";
    titleSection.appendChild(title);

    //CREATES THE ABOUT SECTION
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("aboutSection");
    pageContent.appendChild(aboutSection);

    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "We'll Make You Fall In Love With Pizza Again!";
    aboutSection.appendChild(aboutHeader);

    const aboutContent = document.createElement("p");
    aboutContent.textContent = "Our story began over 25 years ago with a simple passion: bringing fresh, homemade food to our community. Founded in 1998 as a family-owned restaurant, we started small but dreamed big—serving meals made with heart and tradition that you could taste in every bite.";
    aboutSection.appendChild(aboutContent);

    // CREATES HOURS OF OP
    const tableSection = document.createElement("section");
    tableSection.classList.add("tableSection");
    pageContent.appendChild(tableSection);

    const tableTitle = document.createElement("h3");
    tableTitle.textContent = "Hours Of Operation"
    tableSection.appendChild(tableTitle);

    // METHOD TO CREATE TABLE
    const generateTable = () => {
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const hoursOpen = ["10Am - 10Pm", "10Am - 9Pm", "10Am - 9Pm", "10Am - 9Pm", "10Am - 10Pm", "10Am - 11Pm", "10Am - 11Pm"];
        for (let i = 0; i < 7; i++) {
            const row = document.createElement("tr");
            
            const dayCell = document.createElement("td");
            dayCell.textContent = daysOfTheWeek[i];
            row.appendChild(dayCell);

            const hoursCell = document.createElement("td");
            hoursCell.textContent = hoursOpen[i];
            row.appendChild(hoursCell);

            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        tableSection.appendChild(table);
        table.setAttribute("border", "2");
    }

    generateTable();

    // LOCATIONS
    const locationSection = document.createElement("section");
    locationSection.classList.add("locationSection");
    pageContent.appendChild(locationSection);

    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Locations:";
    locationSection.appendChild(locationTitle);

    const location1 = document.createElement("p");
    location1.textContent = "Federal Way";
    locationSection.appendChild(location1);

    const location2 = document.createElement("p");
    location2.textContent = "Lakewood";
    locationSection.appendChild(location2);

    const location3 = document.createElement("p");
    location3.textContent = "University Place";
    locationSection.appendChild(location3);
}
