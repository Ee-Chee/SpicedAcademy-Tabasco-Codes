(function() {
    // ---------------------- don't touch
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    // ---------------------- don't touch

    $("#go-button").on("click", function(e) {
        e.preventDefault(); //form default sends a request to server when button is clicked, we dont want that happen

        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var userToSearch = $('input[name="user-to-search"]').val();

        // base url just defines what website we're
        // making the request to
        var baseUrl = "https://api.github.com"; //also called root-endpoint

        // endpoint means, what specific data do I want
        // from Github?
        var endpoint = "/users/" + userToSearch + "/repos"; //Github uses /users/:username/repos, :username is a variable to replace query parameter
        var fullUrl = baseUrl + endpoint;

        $.ajax({
            url: fullUrl,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password) //standard way of authorization
            },
            success: function(payload) {
                console.log(payload);
                var results = document.querySelector(".results");
                results.innerHTML = Handlebars.templates.test({
                    data: payload
                });

                $(".details").on("click", function(event) {
                    console.log($(event.currentTarget));
                    console.log($(event.target));
                    console.log(event.target);
                    console.log($(".details").index(this)); //index of currect clicked element
                    var index = $(".details").index(this);
                    var repo = $(".details")
                        .eq(index)
                        .html();
                    var fullUrl2 =
                        baseUrl +
                        "/repos/" +
                        userToSearch +
                        "/" +
                        repo +
                        "/commits";

                    $.ajax({
                        url: fullUrl2,
                        headers: {
                            Authorization:
                                "Basic " + btoa(username + ":" + password) //standard way of authorization
                        },
                        success: function(payload2) {
                            console.log(payload2);
                            console.log(fullUrl2);
                            var commits = document.getElementsByClassName(
                                "commits"
                            );
                            commits[
                                index
                            ].innerHTML = Handlebars.templates.test2({
                                data2: payload2
                            });
                        }
                    });
                });
            }
        });
    });
})();
