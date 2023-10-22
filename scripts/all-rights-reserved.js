function handleAllRightReservedYear() {
  let allRightsReservedElement = document.getElementById("all-rights-reserved");
  let allRightsReservedFooterElement = document.getElementById(
    "all-rights-reserved-footer"
  );
  let getCurrentYear = new Date().getFullYear();

  allRightsReservedElement.innerText = `All rights reserved @${getCurrentYear}`;
  allRightsReservedFooterElement.innerText = `All rights reserved @${getCurrentYear}`;
}

handleAllRightReservedYear();
