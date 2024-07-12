const inputBox = document.getElementById('input-box'); // Get the input box element
const listContainer = document.getElementById('list-container'); // Get the list container element

// Function to add a new task
function addTask() {
    if (inputBox.value === '') { // Check if input box is empty
        alert('You must write something!'); // Alert if no task is entered
    } else {
        let li = document.createElement('li'); // Create a new list item
        li.innerHTML = inputBox.value; // Set the text of the list item
        listContainer.appendChild(li); // Add the list item to the list container
        let span = document.createElement('span'); // Create a span element for the delete button
        span.innerHTML = '\u00d7'; // Unicode character for '×'
        li.appendChild(span); // Append the delete button to the list item
    }
    inputBox.value = ''; // Clear the input box
    saveData(); // Save the current list to local storage
}

// Event listener for clicks on the list container
listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') { // If a list item is clicked
        e.target.classList.toggle('checked'); // Toggle the 'checked' class
        saveData(); // Save the current list to local storage
    } else if (e.target.tagName === 'SPAN') { // If the delete button is clicked
        e.target.parentElement.remove(); // Remove the parent list item
        saveData(); // Save the current list to local storage
    }
}, false);

// Function to save the current list to local storage
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML); // Save the list container's HTML to local storage
}

// Function to show tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data'); // Load the saved list from local storage
}
showTask(); // Display the saved tasks when the page loads
