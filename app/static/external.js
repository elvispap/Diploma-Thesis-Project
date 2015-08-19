$(document).ready(function () {

    $(".citation_clicked").click(function () {
        $(this).parent().next(".cited_publications_div").slideToggle();
    });

});