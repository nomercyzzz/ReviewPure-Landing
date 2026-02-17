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
