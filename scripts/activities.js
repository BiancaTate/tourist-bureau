"use strict"

window.onload = function (_event) {

    
    // Assign an onchange event handler to the Categories select/dropdown box
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities
    // Assign an onchange event handler to the Activities select/dropdown box
    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard
    // TODO: Populate Categories dropdown, using innerHTML

    populateCategories(categories,categorySelect)
    
   
}

function populateCategories(categories,selectElement) {
    console.log(categories)
    selectElement.innerHTML = `
    <option value="fake-category-1">Fake Category 1</option>
    <option value="fake-category-2">Fake Category 2</option>
    `

}

function populateActivities(event) {
    console.log(event)
    
}
function renderActivityCard(event) {
  
}

