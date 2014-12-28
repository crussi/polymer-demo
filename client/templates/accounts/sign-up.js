/**
 * Created by chrisrussi on 12/27/14.
 */
Template.signUp.events({
    "submit [data-action=sign-up]": function(e) {
        var $form, email, password;
        $form = $(e.target);
        if ($form[0].valid) {
            email = $form.find("#email").val();
            password = $form.find("#password").val();
            return Accounts.createUser({
                email: email,
                password: password
            }, function(error) {
                if (error) {
                    return GlobalUI.toast(error.reason);
                } else {
                    return Router.go("home");
                }
            });
        }
    }
});
