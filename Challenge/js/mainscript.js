
$(document).ready(function(){
    let video = JSON.parse(data);
    $("#wrapper").html("");
    for (let i=0; i < video.length; i++) {
            $("#wrapper").append(`
    <figure class="video col-lg-2 col-md-4 col-sm-6">
            <iframe src="${video[i].video}" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture" allowfullscreen></iframe>
            <figcaption>${video[i].videoTitle}</figcaption>
    </figure> `);
    };
    });  
