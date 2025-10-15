// src/main.js
import BuildersPage from './pages/BuildersPage.js';

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');
  app.appendChild(await BuildersPage());
});