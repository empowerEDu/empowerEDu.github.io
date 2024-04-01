
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();

document.getElementById("month-at-a-glance-title").innerHTML = `${month[d.getMonth()]} at a Glance`