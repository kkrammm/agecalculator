function calculateAge() {
    const nameInput = document.getElementById("name").value;
    const birthdateInput = document.getElementById("birthdate").value;

    if (!nameInput || !birthdateInput) {
        alert("Please enter your name and birthdate!");
        return;
    }

    const birthdate = new Date(birthdateInput);
    const currentDate = new Date();

    if (birthdate >= currentDate) {
        alert("Invalid birthdate! Please enter a date in the past.");
        return;
    }

    const ageInMilliseconds = currentDate - birthdate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Subtracting 1 to exclude the day of the birthdate

    const dayOfWeek = getDayOfWeek(birthdate.getDay());

    const resultElement = document.getElementById("result");
    resultElement.innerText = `${nameInput}, you are ${years} years, ${months} months, and ${days} days old. 
    You were born on a ${dayOfWeek}.`;
    
    // Add interactivity with a fade-in animation
    resultElement.style.opacity = 1;
    resultElement.style.transform = "translateY(0)";
}

function getDayOfWeek(dayIndex) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[dayIndex];
}
