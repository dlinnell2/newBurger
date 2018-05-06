$(document).ready(function(){

    $('.devourButton').on('click', function(){
        var id=$(this).attr('id');
        
        $.ajax("/api/burger/eat/" + id, {
            type:"PUT"
        }).then(function(){
            location.reload();
        })
    
    })

    $('.addBurger').on('click', function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('/api/burger', {burger:newBurger}, function(data){
            if(data){
                location.reload();
            }
        })
    })

    $('.makeButton').on('click', function(){
        var id=$(this).attr('id');
        
        $.ajax("/api/burger/make/" + id, {
            type:"PUT"
        }).then(function(){
            location.reload();
        })
    
    })

});