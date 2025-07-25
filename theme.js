function applyTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
}

function toggleTheme() {
  const currentMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', currentMode);
  applyTheme(currentMode);
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});
function applyTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
}

function toggleTheme() {
  const currentMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', currentMode);
  applyTheme(currentMode);
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }
});
