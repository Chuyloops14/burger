$(document).ready(function() {

    $(".devour-form").on("submit", function(event) {
        event.preventDefualt();

        var burger_id = $(this).children(".burger_id").val();
        console.log ( burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function(data) {
            location.reload();
        });
    });
});