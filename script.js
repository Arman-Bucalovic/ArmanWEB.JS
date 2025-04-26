document.addEventListener("DOMContentLoaded", function () {
    
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "☰";
    toggleButton.classList.add("menu-toggle");

    document.querySelector("nav").prepend(toggleButton);

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆️";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const ime = form.querySelector("[name='ime']");
            const email = form.querySelector("[name='email']");
            const poruka = form.querySelector("[name='poruka']");

            if (ime.value.trim() === "" || email.value.trim() === "" || poruka.value.trim() === "") {
                alert("Molimo popunite sva polja!");
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email.value)) {
                alert("Unesite ispravan email!");
                return;
            }

            alert("Poruka uspešno poslata!");
            form.reset();
        });
    }

    
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙";
    themeToggle.classList.add("theme-toggle");
    document.querySelector("nav").appendChild(themeToggle);

    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerText = "☀️";
    }


    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerText = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerText = "🌙";
        }
    });


    const toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = button.nextElementSibling;  
            const isVisible = details.style.display === 'block';

            details.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Prikaži detalje' : 'Sakrij detalje';
        });
    });

});
