document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".logo-wrapper");
    if (backButton) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "index.html";
            setTimeout(() => {
                window.location.replace("index.html#work");
            }, 10000); // 10 secondes de délai
        });
    }
});