Template.home.rendered = function() {
    document.title = "Wedo | get things done, together";
    return $("<meta>", {
        name: "description",
        content: "Get things done, together"
    }).appendTo("head");
};

Template.home.events = {
    'click paper-button': function() {
        //return window.location = 'https://usercycle.com';
        Router.go("/sign-up");
    }
};
