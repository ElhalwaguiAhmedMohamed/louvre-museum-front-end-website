$(document).ready(function() {

    $('.imgActive').click(function(e) {
        $.ajax({
            url: "./feedback.json",
            method: "GET",
            dataType: 'json',
             success: function(result){
                 let data = result.students[parseInt(e.target.id)];
                 let rating = parseInt(data.stars);
                 $('#name').text(data.name);
                 $('#feed').text(data.feedback);
                 $('.stars').html('');
                 for(let i=0;i<rating;i++){
                     $('.stars').append(`<i class="fa-solid fa-star"></i>`)
                 }
                 console.log(rating.toString())
                 if(data.stars.toString().includes('.')){
                    $('.stars').append(`<i class="fa-solid fa-star-half"></i>`)
                 }
             },
             error:function() {
                 console.log("Error");
             }
        });
    });
});
