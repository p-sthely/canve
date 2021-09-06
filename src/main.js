console.log('Message from src/main.js : hello!')

$(document).ready(function(){
    /*
    * change the jumbotron button colors when hovering
    */
    $('#jumbotronBtn').on('mouseover', function(){
        $(this).css({
            'background-color': '#F4F4F4',
            'color': '#333333'
        })
    })
    $('.btn').on('mouseout', function(){
        $(this).css({
            'background-color': '#253551',
            'color': '#F4F4F4'
        })
    })
});
