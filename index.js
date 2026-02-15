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
        observer.observe(el);
    });
});
