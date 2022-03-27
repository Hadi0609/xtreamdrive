$(document).ready(function(){
            load_data();
                function load_data(page,q){
                    $.ajax({
                        url:"ajax.php?ajax=get-file",
                        method:"POST",
                        data: {page: page, q: q},
                        success:function(data){
                        $('#data').html(data);
                        }
                    })
                }
                $(document).on('click', '.halaman', function(){
                var page = $(this).attr("id");
                var q = document.getElementById('queri').innerHTML;
                load_data(page,q);
                });
                $(document).on('click', '.halamanw', function(){
                var page = document.getElementById('gopage').value;
                load_data(page);
                });
                $(document).on('click', '.search', function(){
                var q = document.getElementById('search').value;
                var page = "";
                load_data(page,q);
                });

                $(document).on('click', '.kirimBtn', function(){
                var id = $('#masukkanId').val();
                var nama = $('#masukkanNama').val();
                var subtitle = $('#masukkanSubtitle').val();
                var fileid = $('#masukkanFileid').val();
                if(nama.trim() == '' ){
                alert('Enter name !');
                $('#masukkanNama').focus();
                return false;
                } else {
                    $("#modalForm").modal("hide")
                    $.ajax({
                            url : '/ajax.php?ajax=edit',
                            type : 'POST',
                            dataType : 'json',
                            data : 'id='+id+'&nama='+nama+'&subtitle='+subtitle+'&fileid='+fileid,
                            success: function (data) {
                                if(data.code == "200"){
                                 
                                 var page = document.getElementById('iniPage').innerHTML;
                                 load_data(page);
                                } else {
                                    swal ( "Code : "+data.code ,  "Message : "+data.file ,  "error" )
                                }
                                },
                                error: function (xhr, status, msg) {
                                alert('Status: ' + status + "\n" + msg);
                                }
                            })
                }
                });

            });