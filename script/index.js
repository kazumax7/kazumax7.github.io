async function share(title, text, url){
    if(navigator.share){
        navigator.share({
            title: title,
            text: text,
            url: url
        });
    }
}

function shareOnTwitter(text = "", url = "", hashtags = "", via = "", related = "", in_reply_to = ""){
    let data = [
        `text=${text}`,
        `url=${url}`,
        `hashtags=${hashtags}`,
        `via=${via}`,
        `related=${related}`,
        `in_reply_to=${in_reply_to}`,
    ].join("&");
    window.open(`https://twitter.com/intent/tweet?${data}`);
}

function shareUrlOnFacebook(url){
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
}

function shareUrlOnLINE(url){
    window.open(`https://social-plugins.line.me/lineit/share?url=${url}`);
}

function shareOnLINE(text){
    window.open(`http://line.me/R/msg/text/?${text}`);
}