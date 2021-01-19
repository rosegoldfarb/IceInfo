
// class query
const allElementsWithClassSearch = $.find('.search') //array of matching clases
// id query
// const search = $('#search')
// element query
// const search = $('body')
const firstElementWithClassSearch = allElementsWithClassSearch[0]

// element.on(<event_type>, <handler>)
$(document).on('keypress', (e) => {
    if(e.which == 13) {
        onSearch()
    }
});

onSearch = () => {
    const query = $("#search-bar")[0].value
    alert(`You searched for ${query}`)
}

lakeResults = [
    {
        name: "Talon",
        ice_thickness: 6,
        thickness_units: "cm"
    },
    {
        name: "Nippisssing",
        ice_thickness: 5,
        thickness_units: "cm" 
    }
]