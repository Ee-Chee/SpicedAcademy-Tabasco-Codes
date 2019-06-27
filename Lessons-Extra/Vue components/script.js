(function() {
    new Vue({
        el: "#main",
        data: {
            greetee: "World",
            className: "funky",
            cities: []
        },
        created: function() {
            console.log("created!");
        },
        mounted: function() {
            var app = this;
            axios.get("/cities").then(function(resp) {
                app.cities = resp.data;
            });
        },
        updated: function() {
            console.log("updated");
        },
        methods: {
            click: function(name) {
                this.addFunkyTown(name);
            },
            addFunkyTown: function(name) {
                this.cities.push({
                    name: name,
                    country: "United States of Funk"
                });
            },
            upload: function(e) {
                var fd = new FormData();
                fd.append("file", e.target.files[0]);
                axios.post("/upload", fd).then(function(res) {
                    this.images.unshift(res.data);
                });
            },
            nameChange: function(n) {
                console.log(55);
                this.greetee = n;
            }
        }
    });
})();
