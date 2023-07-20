document.getElementById("current-year").classList.add("active");
document.getElementById("current-year-agenda").style.display = "block";

function handleEventsPerYear(year) {
    const years = document.getElementsByClassName("year");
    const contentItems = document.getElementsByClassName("content-item");

    for (let i = 0; i < years.length; i++) {
        years[i].classList.remove("active");
    }

    for (let i = 0; i < contentItems.length; i++) {
        contentItems[i].style.display = "none";
    }

    if (year === '2023') {
        document.getElementById('current-year').classList.add("active");
        document.getElementById('current-year-agenda').style.display = "block";
    } else {
        document.getElementById('next-year').classList.add("active");
        document.getElementById('next-year-agenda').style.display = "block";
    }
}