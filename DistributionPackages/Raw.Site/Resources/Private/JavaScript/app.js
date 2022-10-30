iOS = false;
p = navigator.platform;
if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
    iOS = true;
}

const resizeDom = () => {
    // let winWidth = document.documentElement.clientWidth;
    // let winHeight = document.documentElement.clientHeight;
    //
    // window.addEventListener('scroll', () => {
    //     let scrollPos = document.scrollTop();
    //     if (scrollPos >= 300) {
    //
    //     }
    // });
}

const doOnDocumentLoaded = () => {
    resizeDom();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doOnDocumentLoaded);
} else {
    doOnDocumentLoaded();
}

if (!iOS) {
    window.addEventListener('resize', () => {
        resizeDom();
    });
}
