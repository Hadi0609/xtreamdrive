function delete_infobro(a) {
    var b = "t" + a;
    $.ajax({
        url: "/ajax.php?ajax=delete",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            "200" == a.code ? (alert("file deleted !"), document.getElementById(b).style.display = "none") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function get_info(a) {
    var b = a;
    document.getElementById("masukkanId").value = b, $.ajax({
        url: "/ajax.php?ajax=info",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            document.getElementById("masukkanNama").value = a.nama, document.getElementById("masukkanSubtitle").value = a.subtitle, 
            document.getElementById("masukkanFileid").value = a.fileid;
        }
    }), $("#modalForm").modal("show");
}

function get_jump_info() {
    var a = document.getElementById("gofile").value;
    document.getElementById("masukkanId").value = a;
    $.ajax({
        url: "/ajax.php?ajax=info",
        type: "GET",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            if ("200" == a.code) {
                document.getElementById("masukkanNama").value = a.nama;
                document.getElementById("masukkanSubtitle").value = a.subtitle;
                document.getElementById("masukkanFileid").value = a.fileid;
                $("#modalForm").modal("show");
            } else swal("Code : " + a.code, "Message : " + a.nama, "error");
        }
    });
}

function get_info_adm(a) {
    var b = a;
    document.getElementById("masukkanId").value = b, $.ajax({
        url: "/ajax.php?ajax=info",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            document.getElementById("masukkanNama").value = a.nama, document.getElementById("masukkanSubtitle").value = a.subtitle,
            document.getElementById("masukkanFileid").value = a.fileid;
        }
    }), $("#modalFormmgr").modal("show");
}

function get_jump_info_adm() {
    var a = document.getElementById("gofilemgr").value;
    document.getElementById("masukkanId").value = a;
    $.ajax({
        url: "/ajax.php?ajax=info-adm",
        type: "GET",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            if ("200" == a.code) {
                document.getElementById("masukkanNama").value = a.nama;
                document.getElementById("masukkanSubtitle").value = a.subtitle;
                document.getElementById("masukkanFileid").value = a.fileid;
                $("#modalFormmgr").modal("show");
            } else swal("Code : " + a.code, "Message : " + a.nama, "error");
        }
    });
}

function delete_info_jump() {
    var a = $("#masukkanId").val();
    var b = "t" + a;
    $.ajax({
        url: "/ajax.php?ajax=delete",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            "200" == a.code ? (swal("file deleted !"), document.getElementById(b).style.display = "none") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function cobaDapet_jump() {
    var a = document.getElementById("gouser").value;
    $.ajax({
        url: "/ajax.php?ajax=role",
        type: "GET",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            if ("200" == a.code) {
                document.getElementById("masukkanEm").value = a.email;
                document.getElementById("masukkanRole").value = a.role;
                document.getElementById("masukkanMess").value = a.message;
                $("#modalForm").modal("show");
            } else swal("Code : " + a.code, "Message : " + a.message, "error");
        }
    });
}

function delete_info(a) {
    var b = "t" + a;
    $.ajax({
        url: "/ajax.php?ajax=delete",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            "200" == a.code ? (swal("file deleted !"), document.getElementById(b).style.display = "none") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function delete_subtitle(a) {
    var b = a;
    var c = "t" + a;
    $.ajax({
        url: "/ajax.php?ajax=delete-subtitle",
        type: "POST",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            "200" == a.code ? (swal("subtitle deleted !"), document.getElementById(c).style.display = "none") : swal("Code : " + a.code, "Message : " + a.message, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function get_ace(a) {
    var b = a;
    document.getElementById(b).disabled = !0, document.getElementById(b).innerHTML = "Uploading..", 
    $.ajax({
        url: "/ajax.php?ajax=mirrorace",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            "200" == a.code ? swal("Success! Refresh", "result : " + a.file, "success") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function get_multi(a) {
    var b = a;
    document.getElementById(b).disabled = !0, document.getElementById(b).innerHTML = "Uploading..", 
    $.ajax({
        url: "/ajax.php?ajax=multiup",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            "200" == a.code ? swal("Success! Refresh", "result : " + a.file, "success") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function get_vid(a) {
    var b = a;
    document.getElementById(b).disabled = !0, document.getElementById(b).innerHTML = "Uploading..", 
    $.ajax({
        url: "/ajax.php?ajax=vidcloud",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            "200" == a.code ? swal("Success!", "Track ID : " + a.file, "success") : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function kirimProfilForm() {
    var a = $("#masukNama").val();
    if ("" == a.trim()) return alert("Enter name !"), $("#masukNama").focus(), !1;
    $.ajax({
        url: "/ajax.php?ajax=profile",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            "200" == a.code ? (swal("Success !"), location.reload()) : swal("Code : " + a.code, "Message : " + a.name, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}


function loginwithpassword() {
    document.getElementById("login_button").disabled = !0;
    document.getElementById("response_log").hidden=true;
    var email = $("#email").val();
    if ("" === email.trim()) return alert("Please enter email address"), document.getElementById("login_button").disabled=false, $("#email").focus(), !1;
    var password = $("#password").val();
    if ("" === password.trim()) return alert("Please enter password"), document.getElementById("login_button").disabled=false, $("#email").focus(), !1;
     document.getElementById("login_button").innerHTML = "Logging You In.....";
    $.ajax({
        type: "POST",
        url: "/ajax.py?ajax=login",
        dataType: "json",
        data: "email=" + email + "&password=" + password,
        success: function (response) {
            "200" === response.code ? (swal("Login Successful !"), document.getElementById("login_button").innerHTML = "Login Successful.....", window.location.href="/") : (document.getElementById("login_button").disabled = false, document.getElementById("login_button").innerHTML = "Login", document.getElementById("response_log").hidden=false, document.getElementById("response_log").innerHTML = response.msg, swal("Code : " + response.code, "Message : " + response.msg, "error"));
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
            document.getElementById("login_button").disabled = false;
            document.getElementById("login_button").innerHTML = "Login";
        }
    })

}


function update_profile_info() {
    var user_name = $("#user_name").val()
    if ("" === user_name.trim()) return alert("Enter name !"), $("#masukNama").focus(), !1;
    var new_password = $("#password").val()
    var re_password = $("#re_password").val()
    if (re_password !== new_password) return alert("Recheck Your Password !"), $("#masukNama").focus(), !1;
    var update_info = {
        name: user_name,
        pass: new_password,
        re_pass: re_password
    }
    $.ajax({
        type: "POST",
        url: "/ajax.py?ajax=profile",
        dataType: "json",
        data: update_info,
        success: function (response) {
            "200" === response.code ? (swal("Success !"), location.reload()) : swal("Code : " + response.code, "Message : " + response.msg, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    })
}


function kirimSettingForm() {
    var a = $("#domain").val(), b = $("#title").val(), c = $("#player").val(), d = $("#tag").val(), e = $("#description").val(), f = $("#copyright").val(), g = $("#webmaster").val(), h = $("#clientid").val(), i = $("#secret").val(), j = $("#redirect").val();
    w = $("#webset").val();
    z = $("#analytics").val();
    if ("" == a.trim()) return alert("Enter Domain !"), $("#domain").focus(), !1;
    $.ajax({
        url: "/ajax.php?ajax=setting",
        type: "POST",
        dataType: "json",
        data: "domain=" + a + "&title=" + b + "&player=" + c + "&tag=" + d + "&description=" + e + "&copyright=" + f + "&webmaster=" + g + "&clientid=" + h + "&secret=" + i + "&redirect=" + j + "&webset=" + w + "&analytics=" + z,
        success: function(a) {
            "200" == a.code ? (swal("Success !"), location.reload()) : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function kirimMirrorForm() {
    var a = $("#multiu").val(), c = $("#multik").val(), d = $("#vidu").val(), e = $("#vidk").val(), f = $("#aceu").val(), g = $("#acek").val(), h = $("#mir1").val(), i = $("#mir2").val(), j = $("#mir3").val(), k = $("#mir4").val(), l = $("#mir5").val();
    w = $("#multiset").val();
    z = $("#aceset").val();
    b = $("#vidset").val();
    $.ajax({
        url: "/ajax.php?ajax=mirror",
        type: "POST",
        dataType: "json",
        data: "mirroruser=" + a + "&mirrorpass=" + c + "&viduser=" + d + "&vidkey=" + e + "&aceuser=" + f + "&acekey=" + g + "&mir1=" + h + "&mir2=" + i + "&mir3=" + j + "&mir4=" + k + "&mir5=" + l + "&multiset=" + w + "&aceset=" + z + "&vidset=" + b,
        success: function(a) {
            "200" == a.code ? (swal("Success !"), location.reload()) : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function kirimAdsForm() {
    var a = $("#banner1").val(), b = $("#banner2").val(), c = $("#jw").val();
    $.ajax({
        url: "/ajax.php?ajax=ads",
        type: "POST",
        dataType: "json",
        data: "banner1=" + escape(a) + "&banner2=" + escape(b) + "&jw=" + escape(c),
        success: function(a) {
            "200" == a.code ? (swal("Success !"), location.reload()) : swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function cobaHapus(a) {
    var b = "a" + a;
    $.ajax({
        url: "/ajax.php?ajax=delete-user",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            swal(a.message), document.getElementById(b).style.display = "none";
        }
    });
}

function cobaDapet(a) {
    var b = a;
    $.ajax({
        url: "/ajax.php?ajax=role",
        type: "GET",
        dataType: "json",
        data: "id=" + b,
        success: function(a) {
            document.getElementById("masukkanEm").value = a.email, document.getElementById("masukkanRole").value = a.role, 
            document.getElementById("masukkanMess").value = a.message;
        }
    }), $("#modalForm").modal("show");
}

function kirimRoleForm() {
    var a = $("#masukkanEm").val(), c = $("#masukkanRole").val();
    b = $("#masukkanMess").val();
    if ("" == c.trim()) return alert("Enter Role !"), $("#masukkanRole").focus(), !1;
    $.ajax({
        url: "/ajax.php?ajax=role-post",
        type: "POST",
        dataType: "json",
        data: "id=" + a + "&role=" + c + "&bm=" + b,
        success: function(a) {
            "200" == a.code ? (swal("Success !"), location.reload()) : swal("Code : " + a.code, "Message : " + a.role, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function myDownload() {
    var a = document.getElementById("down-id").innerHTML;
    document.getElementById("down").innerHTML = '<i class="fas fa-spinner fa-pulse"></i>  Downloading....';
    document.getElementById("down").disabled = !0;
    var b = window.setTimeout(function() {
        document.getElementById("down").innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Still loading....';
    }, 6e3);
    $.ajax({
        url: "/ajax.php?ajax=download",
        type: "POST",
        dataType: "json",
        data: "id=" + a,
        success: function(a) {
            if ("200" === a.code) {
                window.clearTimeout(b);
                window.location.href = a.file;
            } else swal("Code : " + a.code, "Message : " + a.file, "error");
        },
        error: function(a, b, c) {
            alert("Status: " + b + "\n" + c);
        }
    });
}

function copy(a) {
    var b = document.createElement("input");
    document.body.appendChild(b);
    b.value = a.textContent;
    b.select();
    document.execCommand("copy", !1);
    b.remove();
    swal("Text Copied!");
}

function copy_link(a) {
    var b = document.createElement("textarea");
    b.innerHTML = a;
    document.body.appendChild(b);
    b.select();
    var c = document.execCommand("copy");
    document.body.removeChild(b);
    swal("link copied!");
}
