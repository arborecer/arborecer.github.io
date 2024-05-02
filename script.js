document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const elementosNav = document.querySelector('.elementosNav ul');
    const elementosNavLinks = document.querySelectorAll('.elementosNav ul li a');

    checkbox.addEventListener('change', function () {
        elementosNav.classList.toggle('mostrar', checkbox.checked);

        // Añade o quita la clase para bloquear el desplazamiento del cuerpo
        document.body.classList.toggle('lock-scroll', checkbox.checked);
    });

    elementosNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            checkbox.checked = false;
            elementosNav.classList.remove('mostrar');
            document.body.classList.remove('lock-scroll'); // Asegúrate de quitar la clase al hacer clic en un enlace
        });
    });
});