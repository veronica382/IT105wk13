document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn");

    button.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;

        document.getElementById("result").textContent = 
            `Hello, ${name}! You are ${age} years old.`;
    });
});