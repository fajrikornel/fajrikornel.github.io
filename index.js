states = {
    "overviewtext" : "closed",
    "education" : "closed",
    "organization" : "closed",
    "projects" : "closed",
    "skills" : "closed"
};

function appear(id,display) {
    if (states[id]=="closed") {
        document.getElementById(id).style.display = display;
        states[id] = "open";
    } else {
        document.getElementById(id).style.display = "none";
        states[id] = "closed";
    };
};

