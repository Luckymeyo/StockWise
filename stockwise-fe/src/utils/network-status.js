window.addEventListener('offline', () => {
  const toast = document.createElement('div');
  toast.innerText = "⚠️ You're offline";
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#f87171';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '8px';
  toast.style.zIndex = '9999';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
});
