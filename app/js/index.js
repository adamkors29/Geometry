let openChecker = {
    "height": false,
    "lineDevider": false,
    "angleDevider": false,
    "perpendicular": false
};

function footerY() {
    if ($("body").height() > $(window).height())
        $("footer").css("top", $("body").height() + "px");
    else
        $("footer").css("top", ($("body").height() - 75) + "px");
}

function openCheckerFunc(name, text) {
    $(`#${name}`).click(function () {
        if (!openChecker[name]) {
            $(`#${name} p`).text(text);
            $(`#${name} p`).css("margin-top", "20px");
            $(`#${name} i`).css("transform", "rotate(270deg)");
            $(`#${name} h3`).css("font-weight", "500");
            if ($(window).width() > 360)
                $(`#${name} h3`).css("font-size", "26px");
            else
                $(`#${name} h3`).css("font-size", "23px");
            openChecker[name] = true;
        } else {
            $(`#${name} p`).text("");
            $(`#${name} p`).css("margin-top", "");
            $(`#${name} i`).css("transform", "");
            $(`#${name} h3`).css("font-weight", "400");
            if ($(window).width() > 360)
                $(`#${name} h3`).css("font-size", "22px");
            else
                $(`#${name} h3`).css("font-size", "20px");
            openChecker[name] = false;
        }
        footerY();
    });
}

footerY();

openCheckerFunc("height", "הגדרה: גובה במשולש הוא אנך היורד מקודקוד המשולש לצלע שמולו.");
openCheckerFunc("lineDevider", "הגדרה: תיכון במשולש הוא קטע המחבר את קודקוד המשולש עם אמצע הצלע שמולו.");
openCheckerFunc("angleDevider", "הגדרה: חוצה זווית הוא ישר החוצה זווית מסויימת לשני חלקים שווים.");
openCheckerFunc("perpendicular", "הגדרה: אנך הוא ישר החותך ישר נתון בזווית ישרה.");
openCheckerFunc("lineMiddle", "הגדרה: אמצע קטע היא נקודה על קטע, אשר חוצה אותו לשני חלקים שווים.");
openCheckerFunc("shapeLineMiddle", "הגדרה: אמצע צלע היא נקודה על צלע, אשר חוצה אותו לשני חלקים שווים.");

if ($("main#elementDescribe>div").attr("data").split(",")[0] == "trapeze" || $("main#elementDescribe>div").attr("data").split(",")[0] == "rightAngledTrapeze" || $("main#elementDescribe>div").attr("data").split(",")[0] == "isoscelesTrapeze")
    $("main#elementDescribe>div").css("background", `url("../../img/${$("main#elementDescribe>div").attr("data").split(",")[0]}.png") no-repeat center center`);
else $("main#elementDescribe>div").css("background", `url("../img/${$("main#elementDescribe>div").attr("data").split(",")[0]}.png") no-repeat center center`);
$("main#elementDescribe>div").css("aspect-ratio", `${$("main#elementDescribe>div").attr("data").split(",")[1]} / ${$("main#elementDescribe>div").attr("data").split(",")[2]}`);

footerY();