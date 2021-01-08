function showSearchListView(){
    $("#search-results-map").removeClass("d-block");
    $("#search-results-map").addClass("d-none");
    $("#search-map_view").removeClass("active");
    $("#search-results-list").addClass("d-block");
    $("#search-list_view").addClass("active");
}

function showSearchMapView(){
    $("#search-results-list").removeClass("d-block");
    $("#search-results-list").addClass("d-none");
    $("#search-list_view").removeClass("active");
    $("#search-results-map").addClass("d-block");
    $("#search-map_view").addClass("active");
} 

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru, 
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }