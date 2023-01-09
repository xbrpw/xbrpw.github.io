// should be wrap in head
function goback() {
    alert('back');
    document.getElementById("demo").innerHTML = "Hello World";
}

$(document).on("click", ".zaback", function () {
    window.history.back()
});