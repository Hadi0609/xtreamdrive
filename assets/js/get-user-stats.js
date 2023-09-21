$(document).ready(function () {
    load_stats();
    function load_stats() {
        $.ajax({
            url: "/ajax.php?ajax=get-user-stats",
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                document.getElementById("usershare").innerHTML = data.share;
                document.getElementById("userdownload").innerHTML = data.download;
                document.getElementById("sizeuser").innerHTML = data.size;
                document.getElementById("userbroken").innerHTML = data.broken;
                document.getElementById("usertrash").innerHTML = data.trashed;
                document.getElementById("shared_space").innerHTML = data.storage;
            }
        })
    }
});
