let c = 7;
document.getElementById('add-course').addEventListener('click', () => {
    c++;
    const coursesContainer = document.querySelector('.container');
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('score');

    // Generate a unique ID for the new course elements
    const courseCount = document.querySelectorAll('.score').length + 1;
    const gradeId = `grade${courseCount}`;
    const creditsId = `credits${courseCount}`;

    courseDiv.innerHTML = `
        <button class="course">Course</button>
        <select class="grade" id="${gradeId}">
            <option>Grade</option>
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
            <option>N</option>
        </select>
        <select class="credits" id="${creditsId}">
            <option>Credits</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
    `;
    // Append the new courseDiv to the coursesContainer
    coursesContainer.insertBefore(courseDiv, coursesContainer.querySelector('.buttons'));
});



function solve() {
    var courses = c;
    var totalCredits = 0;
    var sum = 0;
    
    for (var i = 1; i <= courses; i++) {
        var gradeElement = document.getElementById("grade" + i);
        var creditsElement = document.getElementById("credits" + i);
        
        var grade = gradeElement.value;
        var credits = parseInt(creditsElement.value, 10);
        
        if (isNaN(credits)) {
            credits = 0;
        }

        var gradePoints = 0;
        switch (grade) {
            case "S":
                gradePoints = 10;
                break;
            case "A":
                gradePoints = 9;
                break;
            case "B":
                gradePoints = 8;
                break;
            case "C":
                gradePoints = 7;
                break;
            case "D":
                gradePoints = 6;
                break;
            case "E":
                gradePoints = 5;
                break;
            case "F":
                gradePoints = 0;
                break;
            default:
                gradePoints = 0;
        }
        
        sum += credits * gradePoints;
        totalCredits += credits;
    }
    
    var gpa = totalCredits > 0 ? (sum / totalCredits) : 0;
    gpa = gpa.toFixed(2); // Round GPA to two decimal places
    
    // Update the content of the element with class 'buttons'
    var buttonsElement = document.querySelector('.buttons');
    buttonsElement.textContent = "";
    
    // Create a new h1 element and append the GPA as its text content
    var h1 = document.createElement("h1");
    h1.textContent = gpa; // Set the text content of the h1 element
    h1.style.color = "white";
    buttonsElement.appendChild(h1); // Append the h1 to the buttons element
}
