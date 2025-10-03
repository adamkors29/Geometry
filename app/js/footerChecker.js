if ($("body").height() > $(window).height())
    $("footer").css("top", $("body").height() + "px");
else
    $("footer").css("top", ($("body").height() - 70) + "px");