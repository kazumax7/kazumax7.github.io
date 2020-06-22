function share(){
    if (navigator.share) {
        navigator.share({
            title: 'MDN',
            text: 'Learn web development on MDN!',
            url: 'https://developer.mozilla.org',
        });
    }
    //サポートしていない場合の処理
    else {
        alert('このブラウザはシェア機能に対応していません。');
    }
}