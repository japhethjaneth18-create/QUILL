function openJournal(category) {
  document.getElementById("journalTitle").textContent = category + " Journal";
  document.getElementById("journalArea").classList.remove("hidden");
}

function closeJournal() {
  document.getElementById("journalArea").classList.add("hidden");
}