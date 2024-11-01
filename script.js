// Array of languages with their details
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
    },
    {
        name: "Ada",
        description: "High-level, statically typed language used in mission-critical systems like aviation and defense.",
        creator: "Jean Ichbiah (1980)",
        type: "High-level",
        companiesUsingIt: "Boeing, Lockheed Martin",
        idePrograms: "GNAT, AdaCore"
    },
    {
        name: "Agda",
        description: "A functional programming language and proof assistant for developing mathematical proofs.",
        creator: "Ulf Norell",
        type: "High-level (Proof assistant)",
        companiesUsingIt: "Academia, research",
        idePrograms: "Emacs, VS Code (with extensions)"
    },
    {
        name: "Android",
        description: "An open-source operating system primarily written in Java and Kotlin, used for mobile app development.",
        creator: "Google",
        type: "High-level (Mobile Development)",
        companiesUsingIt: "Google, Samsung, various app developers",
        idePrograms: "Android Studio, IntelliJ IDEA"
    },
    // Continue adding all other languages up to 30...
    {
        name: "EPiServer",
        description: "A digital experience platform offering CMS, e-commerce, and digital marketing services.",
        creator: "Elektropost Stockholm",
        type: "CMS",
        companiesUsingIt: "Volvo, Electrolux, Siemens",
        idePrograms: "Visual Studio, EPiServer CMS"
    }
];

// Updated categorizeLanguage function to display detailed information
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
