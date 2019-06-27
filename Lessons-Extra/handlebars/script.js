Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll('script[type="text/x-handlebars-template"]');

Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});

//////////////////////DO NOT TOUCH///////////////////////////////

var foodsObject = [
    {
        country: "USA",
        name: "Hot Dog",
        ingredients: ["sausage", "bun", "ketchup", "relish", "mustard"]
    },
    {
        country: "Italy",
        name: "Lasagna",
        ingredients: ["ragout", "lasagna", "white sauce", "cheese"]
    },
    {
        country: "Russia",
        name: "Borscht",
        ingredients: ["red beets", "beef broth", "carrots"]
    }
]

var heading = document.querySelector(".heading")
var container = document.querySelector(".container")

heading.innerHTML = Handlebars.templates.greeting({ headline: "Foods from around the world"})

container.innerHTML = Handlebars.templates.foods({ foodsArray: foodsObject })
