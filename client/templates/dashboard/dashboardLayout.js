Template.dashboardLayout.helpers({
    currentEmail: function() {
        var _ref;
        return (_ref = Meteor.user()) != null ? _ref.emails[0].address : void 0;
    },
    narrow: function() {
        return Session.get("drawer-panel-narrow");
    }
});

Template.dashboardLayout.events({
    "core-responsive-change [data-drawer-panel]": function(e) {
        return Session.set("drawer-panel-narrow", e.originalEvent.detail.narrow);
    },
    "click [data-action=toggle-drawer]": function() {
        return $("[data-drawer-panel]")[0].togglePanel();
    },
    "click paper-item": function(e) {
        return $("[data-drawer-panel]")[0].closeDrawer();
    },
    "click [data-action=sign-out]": function() {
        return Meteor.logout(function() {
            return Router.go("/");
        });
    }
});
