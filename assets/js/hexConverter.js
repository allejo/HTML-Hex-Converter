$(document).ready(function() {
    var numericField = $(".numeric");

    numericField.keydown(function (e)
    {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||     // Allow: backspace, delete, tab, escape, enter
            (e.keyCode === 65 && (e.metaKey || e.ctrlKey) === true) ||  // Keycode for Command/Ctrl + A
            (e.keyCode >= 35 && e.keyCode <= 39))                       // Allow: home, end, left, right
        {
            // let it happen, don't do anything
            return;
        }

        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    numericField.keyup(function()
    {
        // If the value is greater than 255, then it's not a valid hex value so set it to 255
        if ($(this).val() > 255)
        {
            $(this).val(255);
        }

        // Once we reach the max length, move to the next input box
        if (parseInt($(this).val().length, 10) === parseInt($(this).attr('maxlength'), 10))
        {
            $(this).next(':input').focus();
        }
    });

    numericField.on("click", function() {
        event.stopPropagation();

        // If our default value is set, clear out the field. If they clicked by accident, it'll set to 255 anyways
        if ($(this).val() === "255")
        {
            $(this).val("");
        }
    });

    // Whenever we unfocus from an input box
    numericField.on("blur", function () {
        var rgbValues = $("#rgbValues");

        // Convert from base 10 to base 16
        var rgbOne   = parseInt(rgbValues.find("input[name=rgb_1]").val(), 10).toString(16);
        var rgbTwo   = parseInt(rgbValues.find("input[name=rgb_2]").val(), 10).toString(16);
        var rgbThree = parseInt(rgbValues.find("input[name=rgb_3]").val(), 10).toString(16);

        // If there's only one digit, then add a 0 to the beginning of it
        rgbOne   = (rgbOne.length   === 1) ? "0" + rgbOne : rgbOne;
        rgbTwo   = (rgbTwo.length   === 1) ? "0" + rgbTwo : rgbTwo;
        rgbThree = (rgbThree.length === 1) ? "0" + rgbThree : rgbThree;

        // Build the hex code
        var hexColor = "#" + rgbOne + rgbTwo + rgbThree;

        // Set the values and examples
        $("#hexValue").html(hexColor);
        $("#colorSample").css("background-color", hexColor);
        $("body,html").css("background", hexColor);
    });

    // If we click anyway, check that all of the input fields have a value
    $(this).click(function() {
        $('.numeric').each(function() {
            var currentElement = $(this).val();

            if (!currentElement)
            {
                $(this).val(255);
            }
        });
    });
});