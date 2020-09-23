$(document).ready(function(){

    // Code to Encode

    $('#encodeKey').keyup(function(){
        let encodevalue = $('#encode').val();
        let encodekey = $('#encodeKey').val();
        $.post('main.php',{
            encodevalue : encodevalue,
            encodekey : encodekey
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

    $("#decodeKey").on('keyup change',function(){
        let decodevalue = $("#decode").val();
        let decodeKey = $("#decodeKey").val();
        $.post('main.php',{
            decodevalue : decodevalue,
            decodeKey : decodeKey
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