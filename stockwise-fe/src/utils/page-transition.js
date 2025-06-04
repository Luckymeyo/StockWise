export function applyPageTransition() {
  const app = document.getElementById('app');
  if (!app) return;
  app.classList.remove('page-fade');
  // Trigger reflow to restart animation
  void app.offsetWidth;
  app.classList.add('page-fade');
}
