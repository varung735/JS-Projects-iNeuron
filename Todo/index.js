const taskInput = document.querySelector(".input");
const button = document.querySelector(".addButton");
const containerDiv = document.querySelector(".container");

button.addEventListener('click', () => {
    const inputDiv = document.querySelector(".input_div");

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const editAnchorTag = document.createElement('a');
    const deleteAnchorTag = document.createElement('a');
    const editButton = document.createElement('button');
    const iconTag = document.createElement('i');

    editAnchorTag.innerText = "Confirm";
    editButton.classList.add("addButton");

    iconTag.classList.add("fas");
    iconTag.classList.add("fa-thumbs-up");

    editButton.appendChild(iconTag);

    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    div.classList.add("item");
    h2.classList.add("item_input");
    editAnchorTag.classList.add("editButton");
    deleteAnchorTag.classList.add("deleteButton");

    h2.innerText = taskInput.value;
    editAnchorTag.innerHTML = "EDIT";
    deleteAnchorTag.innerHTML = "DELETE";

    deleteAnchorTag.addEventListener('click', () => {
        div.remove(this);
    })

    editAnchorTag.addEventListener('click', () => {
        taskInput.value = h2.innerText;
        inputDiv.append(editButton);
        inputDiv.removeChild(button);

        editButton.addEventListener('click', () => {
            h2.innerText = taskInput.value;
            inputDiv.appendChild(button);
            inputDiv.removeChild(editButton);
            taskInput.value = null;
        })
    })

    div.appendChild(h2);
    div.appendChild(editAnchorTag);
    div.appendChild(deleteAnchorTag);
    containerDiv.appendChild(div);

    taskInput.value = null;
});