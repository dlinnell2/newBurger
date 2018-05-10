$(document).ready(function(){

    $('.devourButton').on('click', function(){
        var id=$(this).attr('id');

        var customerName = $('#customer' + id).val().trim();
        console.log('press')
        
       $.ajax({
            url: "/api/burger/eat/" + id,
            data: {
                customer: customerName
            },
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

});