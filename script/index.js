function share(){
    if (navigator.share) {
        navigator.share({
            title: document.querySelector('title').textContent,
            text: document.querySelector('meta[name="description"]').getAttribute('content'),
            url: location.href
        });
    }
    //サポートしていない場合の処理
    else {
        alert('このブラウザはシェア機能に対応していません。');
    }
}