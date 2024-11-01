function categorizeLanguage() {
    const language = document.getElementById("languageInput").value.toLowerCase();
    let result;

    // Define language categories
    const machineLanguages = ["binary", "machine code"];
    const assemblyLanguages = ["assembly", "asm"];
    const compiledLanguages = ["c", "c++", "rust", "go"];
    const interpretedLanguages = ["python", "javascript", "ruby", "php"];
    const highLevelLanguages = ["java", "c#", "swift", "kotlin"];

    // Determine the category
    if (machineLanguages.includes(language)) {
        result = "Machine Language";
    } else if (assemblyLanguages.includes(language)) {
        result = "Assembly Language";
    } else if (compiledLanguages.includes(language)) {
        result = "Compiled Language";
    } else if (interpretedLanguages.includes(language)) {
        result = "Interpreted Language";
    } else if (highLevelLanguages.includes(language)) {
        result = "High-Level Language";
    } else {
        result = "Unknown or Other Language Type";
    }

    // Display the result
    document.getElementById("result").innerText = `${language.charAt(0).toUpperCase() + language.slice(1)} is categorized as: ${result}`;
}
