function start(){
    $("#startHere").fadeOut();
    $("#part2").delay(750).fadeIn('slow');
    successRepeat(50);
}

function successRepeat(count){
    var phraseList =
        [
            "What is ",
            "Who is ",
            "How is ",
            "How to ",
            "Look for ",
            "Look at",
            "Feel ", "Make",
            "Aspire for",
            "Keeep "
        ];
    for (i = 0; i <= count; i++) {
        var x = Math.floor(Math.random() * 10);
        var ranString = phraseList[x] + " Success. <br>";
        $("#successRepeat").append(ranString);

    }


}








$(document).ready(function(){
    var links = [
        ""


    ];



});








