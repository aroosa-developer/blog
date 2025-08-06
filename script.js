function showSection(sectionId) {
  // Hide both sections
  document.getElementById('articles').style.display = 'none';
  document.getElementById('projects').style.display = 'none';

  // Show selected section
  document.getElementById(sectionId).style.display = 'block';
}