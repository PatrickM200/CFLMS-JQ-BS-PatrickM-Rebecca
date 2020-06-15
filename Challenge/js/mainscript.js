
$(document).ready(function(){
    let video = JSON.parse(data);
    $("#wrapper").html("");
    for (let i=0; i < movie.length; i++) {
            $("#wrapper").append(`
    <div class="video">
        <figure>
            <iframe width="560" height="315" src="${video.video}" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
            <figcaption>${video.videoTitle}</figcaption>
        </figure> 
    </div>`);
    };
    };       
