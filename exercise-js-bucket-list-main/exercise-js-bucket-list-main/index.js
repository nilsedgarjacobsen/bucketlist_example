document.body.onload = addElement;

function addElement() {
    // create a new div element
    const newP = document.createElement("p");
    newP.innerHTML = "Hello";
    const otherP = document.createElement("p");
    otherP.innerHTML = "<div>Goodbye</div>";

    const section = document.getElementById("list");

    const newNew = document.createElement("p");
    newNew.innerHTML = "Replaced";

    section.appendChild(newP);

    newP.insertAdjacentElement("afterend", otherP)

    for(let i = 0; i < 3; i++){
        const p = document.createElement("p");
        p.innerHTML = "P " + i;
        section.appendChild(p) 
    }

    console.log(section.children.length)

    section.replaceChild(newNew, section.firstChild);

    section.replaceChild(newNew, section.children[4]);

    section.removeChild(section.lastChild)
}