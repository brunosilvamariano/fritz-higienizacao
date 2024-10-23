document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os links de navegação dentro da navbar
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Adiciona o evento de clique em cada link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Verifica se o menu está aberto e fecha
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});