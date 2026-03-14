function view(id) {
  ["Home", "TheHumanRoute", "AboutUs", "Resources", "Contact"].forEach(view => {
    if(id === view) {
      document.getElementById(id).style.display = "inline"
    } else {
      document.getElementById(view).style.display = "none"
    }
  })
}
