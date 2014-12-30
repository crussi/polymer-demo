Template.home.rendered = function() {
    document.title = "USERcycle | growth analytics for every app";
    return $("<meta>", {
        name: "description",
        content: "Growth analytics and alerts for every app"
    }).appendTo("head");
};

Template.home.events = {
    'click paper-button': function() {
        //return window.location = 'https://usercycle.com';
        Router.go("/sign-up");
    }
};
