Vue.component("first-component", {
    template: "#template",
    data: function() {
        return {
            name: "Kitty"
        };
    },
    props: ["funky", "nickname"],
    methods: {
        click: function() {
            this.name = this.funky;
            this.$emit("change", this.funky);
        }
    }
});
