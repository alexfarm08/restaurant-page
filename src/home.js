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

    // METHOD TO CREATE TABLE
    const generateTable = () => {
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");
        for (let i = 0; i < 7; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 2; j++) {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(`cell in row ${i}, col ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        tableSection.appendChild(table);
        table.setAttribute("border", "2");
    }

    generateTable();

    // LOCATIONS
}
