function filterCourses(category) {
  let courses = document.querySelectorAll(".course-card");
  let buttons = document.querySelectorAll(".category-btn");

  // Update active button
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  courses.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
