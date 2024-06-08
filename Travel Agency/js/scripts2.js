// scripts2.js
function openModal(element) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
    showNotification("Вы открыли изображение: " + element.alt);
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function showNotification(message) {
    var container = document.getElementById("notification-container");
    var notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(function() {
        container.removeChild(notification);
    }, 4000);
}


showNotification("Добро пожаловать в галерею!");
