// ждем загрузку страницы а затем анимация 
document.addEventListener("DOMContentLoaded", function () {
    // анимация при скролле (intersection observer api - это споособ отслеживать когда эл. появляется в видимой части страницы)
    const blocks = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.1 },
    );

    blocks.forEach(function (el) {
        // исключаем эл с классом faq item
        if (!el.classList.contains("faq-item")) {
            observer.observe(el);
        }
    });

    const button = document.querySelectorAll(".faq-toggle");
    const item = document.querySelectorAll(".faq-item");

    button.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            item[index].classList.toggle('open');
        })
    });

    // анимация с задержкой 
    item.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("active");
        }, 100 * index + 50);
    })
});


const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.querySelectorAll(".error-text").forEach((el) => {
            el.remove();
        });
        form.querySelectorAll(".border-red-500").forEach((el) => {
            el.classList.remove("border-red-500");
        });

        let isValid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const topic = document.getElementById("topic");
        const message = document.getElementById("message");
        const agree = document.getElementById("agree");

        // функция для отображения ошибки
        function showError(input, text) {
            input.classList.add("border-red-500");

            const error = document.createElement("p");
            error.className = "error-text text-red-400 text-sm mt-2";
            error.textContent = text;

            input.parentElement.appendChild(error);
        }

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const topicValue = topic.value;
        const messageValue = message.value.trim();

        if (nameValue.length < 3 ) {
            showError(name, "введите корректное имя (минимум 3 символа)");
            isValid = false;
        }

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            showError(email, "введите корректный email");
            isValid = false;
        }

        if (topicValue === "") {
            showError(topic, "выберите тему");
            isValid = false;
        }

        if (messageValue === "") {
            showError(message, "введите сообщение");
            isValid = false;
        }

        if (!agree.checked) {
            showError(agree, "подтвердите согласие");
            isValid = false;
        }

        if (isValid) {
            console.clear();
            console.log("Имя:", nameValue);
            console.log("Почтв:", emailValue);
            console.log("Тема:", topicValue);
            console.log("Сообщение:", messageValue);
            console.log("Время отправки:", new Date().toLocaleString());

            alert("форма отправлена. данные выведены в консоль");
            form.reset();
        }
    });
}