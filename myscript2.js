function check() {
    var x = document.getElementById('myTextBox').value;
    var y = document.getElementById('myPassWord').value;
    if (x.length == 0 || y.length == 0) {
        alert("Password or Username is needed!");
        return;
    }

    window.open('mayorq.html');
    document.getElementById('myTextBox').value = "";
    document.getElementById('myPassWord').value = "";

}








