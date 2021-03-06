this.PublicController = RouteController.extend({
    layoutTemplate: "publicLayout",
    loadingTemplate: "loading"
});

Router.route("/about", {
    controller: "PublicController"
});

Router.route("/pricing", {
    controller: "PublicController"
});

Router.route("/sign-in", {
    name: "accounts.signIn",
    template: "signIn",
    controller: "PublicController"
});

Router.route("/sign-up", {
    name: "accounts.signUp",
    template: "signUp",
    controller: "PublicController"
});

Router.route("/sign-out", {
    action: function() {
        return Meteor.logout(function() {
            return Router.go("/");
        });
    }
});

this.DashboardController = RouteController.extend({
    layoutTemplate: "dashboardLayout",
    loadingTemplate: "loading",
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            return this.render("loading");
        } else if (Meteor.user()) {
            return this.next();
        } else {
            return this.redirect("/");
        }
    }
});

Router.route("/", {
    name: "home",
    action: function() {
        if (Meteor.user()) {
            this.layout("dashboardLayout");
            return this.render("onboarding");
        } else {
            this.layout("publicLayout");
            return this.render("home");
        }
    }
});

Router.route("project/:_id", {
    name: "project",
    action: function() {
        if (Meteor.user()) {
            console.log(_id);
            this.layout("dashboardLayout");
            return this.render("project");
        } else {
            this.layout("publicLayout");
            return this.render("home");
        }
    }
});