function modeSwitch() {
    const mode = document.getElementById("mode-switch")!;
    mode.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            this.classList.remove("fa-moon");
            this.classList.add("fa-sun");
        } else {
            this.classList.remove("fa-sun");
            this.classList.add("fa-moon");
        }
    });
}

export { modeSwitch }
