function calculateCalories() {
    var breakfastCalories = parseInt(document.getElementById("breakfast").value);
    var lunchCalories = parseInt(document.getElementById("lunch").value);
    var dinnerCalories = parseInt(document.getElementById("dinner").value);

    var totalCalories = breakfastCalories + lunchCalories + dinnerCalories;

    document.getElementById("totalCalories").textContent = totalCalories;
}
function displayMeals() {
    const breakfast = document.getElementById("breakfastInput").value;
    const midMorningSnack = document.getElementById("midMorningSnackInput").value;
    const lunch = document.getElementById("lunchInput").value;
    const afternoonSnack = document.getElementById("afternoonSnackInput").value;
    const dinner = document.getElementById("dinnerInput").value;

    const output = `
        <h2>Your Diet Chart</h2>
        <p><strong>Breakfast:</strong> ${breakfast}</p>
        <p><strong>Mid-Morning Snack:</strong> ${midMorningSnack}</p>
        <p><strong>Lunch:</strong> ${lunch}</p>
        <p><strong>Afternoon Snack:</strong> ${afternoonSnack}</p>
        <p><strong>Dinner:</strong> ${dinner}</p>
    `;

    document.getElementById("output").innerHTML = output;
}