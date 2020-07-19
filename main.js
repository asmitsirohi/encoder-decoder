$(document).ready(function(){

    // Code to Encode

    $('#encode').keyup(function(){
        let encodevalue = $('#encode').val();
        $.post('main.php',{
            encodevalue : encodevalue
        },function(response){
            $("#encoded").val(response);
            
        });
    });

    $('#copy').click(function(){
        let copyValue = $('#encoded');
        if(copyValue.val() == "") {
            $('#failModal').modal('toggle') 
        } else {
            copyValue.select();
            document.execCommand("copy");
            $('#copyModal').modal('toggle'); 
        }
    });

    //Code to Decode

    $("#decode").on('keyup change',function(){
        let decodevalue = $("#decode").val();
        $.post('main.php',{
            decodevalue : decodevalue
        },function(response){
            $("#decoded").val(response);
            
        });
        
    });

    $('#copy2').click(function(){
        let copyValue = $('#decoded');
        if(copyValue.val() == "") {
            $('#decodefailModal').modal('toggle') 
        } else {
            copyValue.select();
            document.execCommand("copy");
            $('#decodecopyModal').modal('toggle'); 
        }
    });

});