$(document).ready( function() {
    $("#btn").click( function() {
        var content = "<iframe src='../bookmarks.html' name='iframe_b' height='650px' width='100%' title='Iframe' style='border:none;' allowfullscreen ></iframe>";
        $("#fh").html( content );
    });
});

// <button id='btn'>Assessment App. Load iframe</button>
//<div style='width:100%;height:600px' id="fh">
//  xbrpw.github.io/collection/a/load-iframe-button/index.html</div>