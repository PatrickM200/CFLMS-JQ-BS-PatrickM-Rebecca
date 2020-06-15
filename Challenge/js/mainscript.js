
$(document).ready(function(){
    let video = JSON.parse(data);
    $("#wrapper").html("");
    for (let i=0; i < video.length; i++) {
            $("#wrapper").append(`
    <figure class="video col-lg-2 col-md-4 col-sm-6">
            <iframe class="if" src="${video.video}" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
            <figcaption>${video.videoTitle}</figcaption>
    </figure> `);
    };
    });       
