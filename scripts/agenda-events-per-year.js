function setActive(elementId) {
  const elements = document.getElementsByClassName("year");
  for (const element of elements) {
    element.classList.remove("active");
  }
  document.getElementById(elementId).classList.add("active");
}

function setDisplay(elementId, displayValue) {
  const elements = document.getElementsByClassName("content-item");
  for (const element of elements) {
    element.style.display = "none";
  }
  document.getElementById(elementId).style.display = displayValue;
}

function handleEventsPerYear(year) {
  if (year === "2023") {
    setActive("current-year");
    setDisplay("current-year-agenda", "block");
  } else {
    setActive("next-year");
    setDisplay("next-year-agenda", "block");
  }
}

// Initial setup
setActive("current-year");
setDisplay("current-year-agenda", "block");
