
$(document).ready(function () {
//id selector
//    alert($('#TestDiv').html());

//className selector
//    $('div.BlueDiv, div.RedDiv').css('border', '5px solid green');

//attribute selectors
//    var input = $('textarea[id="CommentsTextBox"]');
//    input.css('background-color', 'yellow');

//select all input elements
//     $(':input').each(function(){
//        var elem = $(this); //this is wrapped in a jQuery wrapper
//        alert(elem.val('Foo'));
//     });

//    alert($('div:contains("my div")').html());

//    $('#DataTable tr:odd').css('background-color', 'green');

//    $('div[title*="Title"]').html('Updated Div Value');



    //iteration through nodes Using .each
    var html = '';
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        html += "<br />" + index + " " + $(this).text(); // curent value the div hold + br + index +  actual text(thru iteration)
    });
    var output = $('#OutputDiv');
    output.html(html);

    // Modifying properties and attributes
    $('div.BlueDiv, div.RedDiv').each(function (index) {
        //raw DOM  this.title   ..... jQuery object $(this).attr(title...)
        this.title = "Some title";
        $(this).attr("title", "Some Title 2");
    });

    $('div.BlueDiv, div.RedDiv')
            .attr(
                    {
                        title: 'Some title 3',
                    }
            ).css({
                'font-size': '20px',
                'background-color': 'blue'
            }).text('Changed Colors');

    // addind and removing Nodes // we will have above=prepand and under=append the tableContainerDiv a span
    var tableDiv = $('#TableContainerDiv');
    tableDiv.append('<span style="background-color: green">Appended Child 1</span>');
    tableDiv.prepend('<span style="background-color: green">Prepended Child 1</span>');

    //wrap method
    $('span.Foo').wrap('<div class="RedDiv ParentWrapper" />');

    //remove Nodes
    $('div.ParentWrapper').remove();

    //removing css classes
    $('input[type="text"]').addClass('Highlight').css('background-color', 'red');
//    $('#LastNameTextBox').removeClass('Highlight').css('background-color', 'blue');

    function FocusBlur(tb){
        $(tb).toggleClass('Highlight').css('background-color', 'blue');
    }
});