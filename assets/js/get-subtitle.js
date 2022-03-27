$(document).ready(function(){
            load_data();
                function load_data(page){
                    $.ajax({
                        url:"/ajax.php?ajax=get-subtitle",
                        method:"POST",
                        data:{page:page},
                        success:function(data){
                        $('#data-subtitle').html(data);
                        }
                    })
                }
                $(document).on('click', '.halaman', function(){
                var page = $(this).attr("id");
                load_data(page);
                });
                $(document).on('click', '.halamans', function(){
                var page = document.getElementById('gosub').value;
                load_data(page);
                });
            });