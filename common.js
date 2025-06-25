// common.js
// Helper to store/retrieve data between pages via localStorage
function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadData(key) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : null;
}
// Navigate to another page
function goTo(page) {
  window.location.href = page;
}
