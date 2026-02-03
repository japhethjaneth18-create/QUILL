function openJournal(category) {
  document.getElementById("journalTitle").textContent = category + " Journal";
  document.getElementById("journalArea").classList.remove("hidden");
}

function closeJournal() {
  document.getElementById("journalArea").classList.add("hidden");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

