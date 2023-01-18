window.addEventListener('load',function(){
    var preview_img=document.querySelector('.preview_img');
    var mask=document.querySelector('.mask');
    var big=document.querySelector('.big');
    //鼠标经过显示和隐藏
    preview_img.addEventListener('mouseover',function(){
        mask.style.display='block';
        big.style.display='block';
    })
    preview_img.addEventListener('mouseout',function(){
    mask.style.display='none';
    big.style.display='none';
    })
    preview_img.addEventListener('mousemove',function(e){
        var x=e.pageX-this.offsetLeft;
        var y=e.pageY-this.offsetTop;
        // console.log(x,y);
        var maskX=mask.offsetWidth/2;
        var maskY=mask.offsetHeight/2;
        if(maskX<=0){
            maskX=0;
        }else if(maskX>=preview_img.offsetWidth-mask.offsetWidth){
            maskX=preview_img.offsetWidth-mask.offsetWidth;
        }
         if(maskY<=0){
        maskY=0;
        }else if(maskY>=preview_img.offsetHeight-mask.offsetHeight){
        maskY=preview_img.offsetHeight-mask.offsetHeight;
        }
        mask.style.left=maskX+'px';
        mask.style.top=maskY+'px';
    })
    
})