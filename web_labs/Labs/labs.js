function toggleSection(classname) {
    const section = document.getElementsByClassName(classname)[0];
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function setDate() {
    const dateElement = document.getElementById("data_label");

    const today = new Date();
    const day = today.getDate().toLocaleString("ru-RU").padStart(2, "0");
    const month = (today.getMonth() + 1).toLocaleString("ru-RU").padStart(2, "0");
    const year = today.getFullYear().toLocaleString("ru-RU").replace(/\s/g, "");

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[today.getDay()];

    const hour = today.getHours().toString().padStart(2, "0");
    const minute = today.getMinutes().toString().padStart(2, "0");
    const second = today.getSeconds().toString().padStart(2, "0");

    dateElement.innerHTML = day + "." + month + "." + year + ", " + weekday + ", " + hour + "-" + minute + "-" + second;
}

function setCalendar() {
    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
// storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }
        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }
    renderCalendar();
    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });
}

function countWhitespaceNodesInDOM(node) {
    let count = 0;

    // проверяем, является ли узел текстовым и содержит ли он только пробельные символы
    if (node.nodeType === Node.TEXT_NODE && /^\s*$/.test(node.nodeValue)) {
        count++;
    }

    // если узел имеет дочерние элементы, рекурсивно вызываем эту же функцию для каждого дочернего элемента
    if (node.hasChildNodes()) {
        const childNodes = node.childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            count += countWhitespaceNodesInDOM(childNodes[i]);
        }
    }

    return count;
}

function task3(elementId) {
    const whitespaceCount = countWhitespaceNodesInDOM(document);
    const element = document.getElementById(elementId);
    element.innerText = `Amount of space nodes in DOM tree: ${whitespaceCount}`;
}

function task4(elementId) {
    document.getElementById(elementId).addEventListener('click', function () {
        if (!this.classList.contains('rotate')) {
            setTimeout(() => {
                this.classList.add('rotate');
                this.addEventListener('animationend', function () {
                    this.classList.remove('rotate');
                    this.classList.add('reverse-rotate');
                    this.addEventListener('animationend', function () {
                        this.classList.remove('reverse-rotate');
                    });
                });
            }, 50);
        }
    });
}

function task5(targetId) {
    const list = document.getElementById(targetId);
    const input = prompt("Enter item content:");
    if (input !== null) {
        const listItem = document.createElement("li");
        listItem.textContent = input;
        listItem.addEventListener("click", () => {
            const index = Array.from(list.children).indexOf(listItem);
            if (index !== -1 && index < list.children.length - 1) {
                const nextItem = list.children[index + 1];
                list.removeChild(nextItem);
            }
        });
        list.appendChild(listItem);
    }
}

function task6(tableId) {
    // reset table
    const table = document.getElementById(tableId);
    table.innerHTML = "";
    // generate 10x10 empty table
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("td");
            cell.addEventListener("dblclick", generateRandomNumber);
            row.appendChild(cell);
        }
        document.getElementById(tableId).appendChild(row);
    }
    // function to generate random number and put it in cell
    function generateRandomNumber() {
        this.innerHTML = Math.floor(Math.random() * 100) + 1;
    }
}

function task7() {
    let menuItems = document.querySelectorAll("#menu li");
    let itemsLeft = menuItems.length;
    const menu = document.getElementById("menu");
    const lastMessage = document.querySelector("#menu + p");
    if (lastMessage) {
        menu.parentNode.removeChild(lastMessage);
    }

    if (itemsLeft < 5) {
        const numToAdd = 5 - itemsLeft;
        for (let i = 0; i < numToAdd; i++) {
            const newItem = document.createElement("li");
            newItem.textContent = "Menu Item";
            menu.appendChild(newItem);
        }
    }
    const message = document.createElement("p");
    menuItems = document.querySelectorAll("#menu li");
    itemsLeft = menuItems.length;
    message.textContent = "There are no more items";
    message.style.display = "none";
    menu.parentNode.appendChild(message);

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            menuItem.classList.add("fade-out");
            setTimeout(() => {
                menu.removeChild(menuItem);
                itemsLeft--;
                if (menuItems.length === 0) {
                    message.style.display = "block";
                } else {
                    message.style.display = "none";
                }
            }, 1000); // 1000 ms matches the fade-out animation duration
        });
    });
}

function task8() {
    const image = document.getElementById("smooth-image");
    image.style.opacity = 1;
    let fadeTimeout;

    function fadeIn() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeIn, 30);
        }
    }

    function fadeOut() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity > 0.5) {
            opacity -= 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeOut, 30);
        }
    }

    image.addEventListener("mouseover", fadeOut);
    image.addEventListener("mouseout", fadeIn);
}

const form = document.querySelector('#registration-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

function validateEmail() {
    var email = document.getElementById("txtEmail").value;
    var emailPattern = /^\w{2,}@\w{2,}\.\w{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("lblEmailError").innerHTML = "Enter a valid email address.";
    } else {
        document.getElementById("lblEmailError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validatePhone() {
    var phone = document.getElementById("txtPhone").value;
    var phonePattern = /^\+[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("lblPhoneError").innerHTML = "Enter a valid phone number.";
    } else {
        document.getElementById("lblPhoneError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validateDate() {
    var date = document.getElementById("txtDate").value;
    var datePattern = /^\d{2}[.]\d{2}[.]\d{4}$/;
    if (!datePattern.test(date)) {
        document.getElementById("lblDateError").innerHTML = "Enter a valid date (dd.mm.yyyy).";
    } else {
        document.getElementById("lblDateError").innerHTML = "";
    }
    toggleSubmitButton();
}

function validatePassword() {
    var password = document.getElementById("txtPassword").value;
    var passwordConfirm = document.getElementById("txtPasswordConfirm").value;

    if (password !== passwordConfirm) {
        document.getElementById("lblPasswordError").innerHTML = "Passwords do not match.";
        document.getElementById("lblPasswordConfirmError").innerHTML = "Passwords do not match.";
    } else {
        document.getElementById("lblPasswordError").innerHTML = "";
        document.getElementById("lblPasswordConfirmError").innerHTML = "";
    }
    toggleSubmitButton();
}

function toggleSubmitButton() {
    var emailError = document.getElementById("lblEmailError").innerHTML;
    var phoneError = document.getElementById("lblPhoneError").innerHTML;
    var dateError = document.getElementById("lblDateError").innerHTML;
    var passwordError = document.getElementById("lblPasswordError").innerHTML;
    var passwordConfirmError = document.getElementById("lblPasswordConfirmError").innerHTML;
    var submitBtn = document.getElementById("submitBtn");
    if (emailError === "" && phoneError === "" && dateError === "" && passwordError === "" && passwordConfirmError === "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function finalValidation() {
    validateEmail();
    validatePhone();
    validateDate();
    validatePassword();

    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn.disabled) {
        return false;
    } else {
        return true;
    }
}