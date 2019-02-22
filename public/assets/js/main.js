"use strict";

// Capture the form inputs
$("#submit").on("click", function (event) {
    event.preventDefault();

    $.get("/api/message", (data) => {
        $("#message").empty();
        let worlds = data.worlds;
        worlds.forEach(world => {
            $("#message").append(`<p>Hello ${world.name}</p>`);
        });
        
    });
});