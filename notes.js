// Get references to HTML elements
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

// Function to add a new note
function addNote() {
    const noteText = noteInput.value;
    
    if (noteText.trim() === "") {
        alert("Please enter a note.");
        return;
    }

    // Create a new list item (note)
    const listItem = document.createElement("li");
    listItem.textContent = noteText;

    // Add a delete button to the note
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        notesList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    // Add the new note to the list
    notesList.appendChild(listItem);

    // Clear the input field
    noteInput.value = "";
}

// Add event listener to the "Add Note" button
document.querySelector("button").addEventListener("click", addNote);

// Allow adding a note by pressing Enter in the input field
noteInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addNote();
    }
});
