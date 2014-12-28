Template.project.rendered = function() {
    document.title = "Project";
    return $("<meta>", {
        name: "description",
        content: "Project detail"
    }).appendTo("head");
};