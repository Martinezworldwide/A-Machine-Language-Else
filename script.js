const languages = [
    {
        name: "AL",
        description: "A proprietary language used for programming Allen-Bradley PLCs in industrial automation.",
        creator: "Allen-Bradley (Rockwell Automation)",
        type: "High-level (Automation)",
        companiesUsingIt: "Manufacturing, automation industries",
        idePrograms: "RSLogix, Studio 5000"
    },
    {
        name: "ActionScript",
        description: "Object-oriented language used primarily for developing websites and software on the Adobe Flash platform.",
        creator: "Gary Grossman (1998)",
        type: "High-level",
        companiesUsingIt: "Adobe, Flash-based game development",
        idePrograms: "Adobe Flash Builder, Animate"
    }
    // Add more languages here as needed
];

function categorizeLanguage() {
    const languageInput = document.getElementById("languageInput").value.toLowerCase();
    const language = languages.find(lang => lang.name.toLowerCase() === languageInput);

    if (language) {
        document.getElementById("result").innerHTML = `
            <strong>Name:</strong> ${language.name}<br>
            <strong>Description:</strong> ${language.description}<br>
            <strong>Creator:</strong> ${language.creator}<br>
            <strong>Type:</strong> ${language.type}<br>
            <strong>Companies Using It:</strong> ${language.companiesUsingIt}<br>
            <strong>IDE/Programs:</strong> ${language.idePrograms}
        `;
    } else {
        document.getElementById("result").innerText = "Language not found in the database.";
    }
}

