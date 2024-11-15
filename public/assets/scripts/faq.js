function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const plusIcon = element.querySelector('.plus');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        plusIcon.textContent = "+";
    } else {
        answer.style.display = "block";
        plusIcon.textContent = "-";
    }
}