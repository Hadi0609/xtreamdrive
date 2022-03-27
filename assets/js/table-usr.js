$(document).ready(function(){
            load_data();
                function load_data(page){
                    $.ajax({
                        url:"/ajax.php?ajax=get-table-user",
                        method:"POST",
                        data:{page:page},
                        success:function(data){
                        $('#data-user').html(data);
                        }
                    })
                }
                $(document).on('click', '.halaman', function(){
                var page = $(this).attr("id");
                load_data(page);
                });
                $(document).on('click', '.halamanw', function(){
                var page = document.getElementById('gopage').value;
                load_data(page);
                });
            });