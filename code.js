
var statsVisible = false;

function updateStats() {
    var text = $("#throw-away-textarea").val();
    var matches = text.match(/\w\b(?![\'\.\-]\w)/g);
    var numWords = matches ? matches.length : 0;
    $("#word-count").text(numWords.toString());
}

$("body").ready(function () {
    $("#throw-away-button").click(function () {
        $("#throw-away-textarea").val('');
        if (statsVisible) {
            updateStats();
        }
    });
    
    $("#show-stats-button").click(function() {
        statsVisible = true;
        updateStats();
        $("#throw-away-stats-bar").addClass("stats-visible");
    });
    
    $("#hide-stats-button").click(function() {
        statsVisible = false;
        $("#throw-away-stats-bar").removeClass("stats-visible");
    });
    
    $("#throw-away-textarea").on("input", function() {
        if (statsVisible) {
            updateStats();
        }
    });
});

