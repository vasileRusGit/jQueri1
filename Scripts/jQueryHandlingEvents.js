
$(document).ready(function () {
    WireEvents();
});

function WireEvents() {
    // Click Events
    $('#SubmitButton').click(function () {
        var firstNameVal = $('#FirstNameTextBox').val();
        var lastNameVal = $('#LastNameTextBox').val();
        $('#DivOutput').text(firstNameVal + ' ' + lastNameVal);
    });

    // Handle Events
    $('.MyInput').change(function () {
        alert($(this).val());
        $(this).addClass('Highlight').css('background-color', 'red');
    });

//    // Using short-cut event functions
//    $('#MyDiv, tr').mouseenter(function(){
//        Toggle(this);
//        $(this).css('cursor','pointer');
//    }).mouseleave(function(){
//        Toggle(this);
//    }).mouseup(function(e){
//        alert($(e.target).attr('id'));
//        $(this).text('X: ' + e.pageX + 'Y: ' + e.pageY);
//    });
//
//    function Toggle(div){
//        $(div).toggleClass('Highlight');
//    }

    // on()
    $('#MyDiv').on('mouseenter mouseleave mouseup', function (e) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if (e.type == 'mouseup') {
            $(this).text('X: ' + e.pageX + 'Y: ' + e.pageY);
        }
    });

    // Using Hover()
    $('#MyTable tr').hover(
            function () {
                // mouse enter
                $(this).css('background-color', '#1595BF');
            },
            function () {
                // mouse leave
                $(this).css('background-color', '#fff');
            });

    // Using Hover() same result
//    $('#MyTable tr').hover(function(){
//        $(this).toggleClass('LightHighlight');
//    });

}
