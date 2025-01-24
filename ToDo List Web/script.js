const itemInput = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

// Add To-Do on Enter Key Press
itemInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && itemInput.value.trim() !== "") {
        addToDo(itemInput.value.trim());
        itemInput.value = "";
    }
});

// Function to Add To-Do Item
const addToDo = (text) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task");

    listItem.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn">✖</button>
    `;

    // Toggle Task Completion
    listItem.addEventListener("click", () => listItem.classList.toggle("done"));

    // Delete Task
    listItem.querySelector(".delete-btn").addEventListener("click", () => listItem.remove());

    toDoBox.appendChild(listItem);
};
