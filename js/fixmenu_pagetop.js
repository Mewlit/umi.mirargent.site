/*
 fix menu
 2017/01/26 crytus corporation.
*/
function fm_hasClass(e, c)
{
    var classes = e.className;
    if (!classes) return false;
    if (classes === c) return true;
    return classes.search("\\b" + c + "\\b") != -1;
}
function fm_addClass(e, c)
{
    if (fm_hasClass(e, c)) return;
    var classes = e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;
    e.className += c;
}
function fm_removeClass(e, c)
{
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    e.className = e.className.replace(pattern, "");
}
function fm_addEvent(elm,listener,fn){
	try{
		elm.addEventListener(listener,fn,false);
	}catch(e){
		elm.attachEvent("on"+listener,fn);
	}
}
fm_addEvent(window, 'load', function() {
   var offsettop;
   offsettop = 350;
   fm_addEvent(window, 'scroll', function() {
   if (offsettop < Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
       fm_addClass(document.body, 'is-fixed-pagetop');
   } if ((offsettop - 50) > Math.max(document.body.scrollTop,document.documentElement.scrollTop)) {
       fm_removeClass(document.body, 'is-fixed-pagetop');
   }
 });
});

var pageTopBtn = document.querySelector('.nav-fix-pos-pagetop a');
   if (pageTopBtn) {
       fm_addEvent(pageTopBtn, 'click', function(e) {
           // aタグ本来の挙動（パッと瞬時に移動する動き）をキャンセル
           if (e.preventDefault) {
               e.preventDefault();
           } else {
               e.returnValue = false; // 古いIE向け
           }

           // ページトップへ滑らかにスクロール
           window.scrollTo({
               top: 0,
               behavior: 'smooth'
           });
       });
   }
