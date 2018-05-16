$(function(){
    $(".change-devoured").on("click", function(event){

        var id = $(this).data('id');
        var newDevoured = $(this).data("newdevoured"); //check that devoured is right

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState

        }).then (
            function(){
                console.log("change devoured to", newDevoured);
                location.reload();
            }
        );

    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#user_burgerName").val().trim(),
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new burger!");
                location.reload();
            }
        );

    });

});