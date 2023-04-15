window.onload = function() {
  const bannerClose = document.querySelector('.banner-close');
  const banner = document.querySelector('.banner-close');

  bannerClose.addEventListener('click', function() {
    banner.style.display = 'none';
  });
}
