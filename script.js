    // Toggle mobile menu visibility
       const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.contains('open');

      toggle.classList.toggle('open');
      toggle.classList.toggle('group-[.open]');

      if (!isOpen) {
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-96', 'opacity-100');
      } else {
        menu.classList.add('max-h-0', 'opacity-0');
        menu.classList.remove('max-h-96', 'opacity-100');
      }
    });

  const swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
