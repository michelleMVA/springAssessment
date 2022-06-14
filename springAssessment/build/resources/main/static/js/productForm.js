const productsControl = new ProductsController();

newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemTitleInput = document.querySelector('#newItemTitleInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemDate = document.querySelector('#newItemDate');

    // Get the values of the inputs - variable names to be same as MySQL columns
    const title = newItemTitleInput.value;
    const description = newItemDescription.value;
    const date = newItemDate.value;

    // Clear the form
    newItemTitleInput.value = '';
    newItemDescription.value = '';
    newItemDate.value = '';

    // Add the task to the task manager
    console.log("addEventListenerL", title ,description);
    productsControl.addItem(title, description, date);

});
