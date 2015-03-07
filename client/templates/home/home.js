Template.home.rendered = function() {
    document.title = "Twodo | better together";
    return $("<meta>", {
        name: "description",
        content: "Get things done, together"
    }).appendTo("head");
};

Template.home.events = {
    'click paper-button': function() {
        Router.go("/sign-up");
    }
};
