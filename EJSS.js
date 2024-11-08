// Function to get an element by ID and attach an info function to it
export function getId(id) {
    const element = document.getElementById(id);
    
    // Attach info function to the element
    if (element) {
        element.info = function() {
            console.log(`ID: ${id}, Tag: ${element.tagName}, Classes: ${element.className}, Content: ${element.innerHTML}`);
        };
    } else {
        console.warn(`No element found with ID: ${id}`);
    }

    return element;
}

// Function to iterate over an array and execute a callback for each item
export function forEach(array, callback) {
    array.forEach(callback);
}

// Function to get all elements matching a selector
export function getAll(selector) {
    return document.querySelectorAll(selector);
}

// Function to compare two values and return true if they are equal
export function IF(A, B) {
    return A === B; // Simplified return statement
}

// Function to add an event listener to an element based on a selector and tag type
export function on(selector, event, tag, callback) {
    let element;

    // Get element based on tag type
    if (tag === 'id') {
        element = getId(selector); // Correctly access the DOM element by ID
    } else if (tag === 'class') {
        element = document.querySelector('.' + selector); // Get element by class
    } else {
        element = document.querySelector(selector); // Fallback to generic selector
    }

    if (element) {
        element.addEventListener(event, callback); // Add event listener to the DOM element
    } else {
        console.warn(`Element not found for selector: ${selector}`);
    }
}

document.getElementById('11')