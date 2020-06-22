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
    let data = [];

    if(text.length > 0){
        data.push(`text=${text}`);
    }else if(url.length > 0){
        data.push(`url=${url}`);
    }else if(hashtags.length > 0){
        data.push(`hashtags=${hashtags}`);
    }else if(via.length > 0){
        data.push(`via=${via}`);
    }else if(related.length > 0){
        data.push(`related=${related}`);
    }else if(in_reply_to.length > 0){
        data.push(`in_reply_to=${in_reply_to}`);
    }

    data = data.join("&");

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