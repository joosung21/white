closePanel =  function() {
    $('.panel.extend').each(function(){       
        $(this).removeClass('extend');
    });
}
openPanel =  function() {    
    $(this).parent().addClass('extend');    
}

$( document ).ready(function() {

    $(".property .open-panel").click(function(){        
        var thisPanel = $(this).parent().parent().attr('id');
        $('#' + thisPanel).addClass('extend');
        
    });
});