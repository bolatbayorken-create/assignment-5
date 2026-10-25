
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const answer = document.getElementById(button.getAttribute("aria-controls"));
        answer.hidden = !answer.hidden;
        button.setAttribute("aria-expanded", String(!answer.hidden));
    });
});

const addForm = document.getElementById("pantry-add-form");
const productInput = document.getElementById("pantry-new-product");
const productList = document.getElementById("pantry-product-list");
const productCount = document.getElementById("pantry-item-count");
const emptyListMessage = document.getElementById("pantry-empty-list");
const addFeedback = document.getElementById("pantry-add-feedback");

function updateProductCount() {
    const count = productList.children.length;
    productCount.textContent = count;
    emptyListMessage.hidden = count > 0;
}

addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = productInput.value.trim();

    if (!name) {
        addFeedback.textContent = "Please enter a product name.";
        productInput.focus();
        return;
    }

    const item = document.createElement("li");
    const productName = document.createElement("span");
    const removeButton = document.createElement("button");

    productName.textContent = name;
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove " + name);

    removeButton.addEventListener("click", function () {
        item.remove();
        updateProductCount();
        addFeedback.textContent = "Removed " + name + ".";
    });

    item.append(productName, removeButton);
    productList.append(item);
    productInput.value = "";
    addFeedback.textContent = "Added " + name + ".";
    updateProductCount();
    productInput.focus();
});

updateProductCount();
