window.onload=function () {
    let diaryul = document.querySelectorAll(".diary-ul > li");
    diaryul.forEach(function (elem,index) {
        elem.onmouseenter = function () {
            for(let i=0;i<diaryul.length;i++){
                diaryul[i].classList.remove("limax");
            }
                this.classList.add("limax");
            }
    });
    let diaryleftoneli = document.querySelectorAll(".diary-left-one > li");
    for(let i=0;i<diaryleftoneli.length;i++){
        diaryleftoneli[i].onclick = function(){
            for(let i=0;i<diaryleftoneli.length;i++){
                diaryleftoneli[i].style.borderBottom="none";
            }
            diaryleftoneli[i].style.borderBottom="2px solid #000000";
        }
    }
    let curret = 0;
    let next=0;
    let lrleft = document.querySelector(".lr-left");
    let lrright = document.querySelector(".lr-right");
    let ul = document.querySelectorAll(".ul1 > li");
    let point = document.querySelectorAll(".pointul> li");
    let w = ul[0].offsetWidth;
    let flag = true;
    lrright.onclick=function(){
        if(!flag){
            return;
        }
        flag = false;
        next++;
        if(next==ul.length){
            next=0;
        }
        ul[next].style.left=w+'px';
        point[curret].style.background="#ffffff";
        point[next].style.background = "#12b7de";
        animate(ul[curret],{left:-w});
        animate(ul[next],{left:0},function () {
            flag = true;
        });
        curret=next;

    };
    lrleft.onclick=function(){
        if(!flag){
            return;
        }
        flag = false;
        next--;
        if(next<0){
            next=ul.length-1;
        }
        ul[next].style.left=-w+'px';
        point[curret].style.background="#ffffff";
        point[next].style.background = "#12b7de";
        animate(ul[curret],{left:w});
        animate(ul[next],{left:0},function () {
            flag = true;
        });
        curret=next;
    };
    for(let i=0;i<point.length;i++){
        point[i].onclick = function () {
            next=i;
            if(next>curret){
                ul[next].style.left=w+'px';
                point[curret].style.background="#ffffff";
                point[next].style.background = "#12b7de";
                animate(ul[curret],{left:-w});
                animate(ul[next],{left:0});
                curret=next;
            }
            if(next<curret){
                ul[next].style.left=-w+'px';
                point[curret].style.background="#ffffff";
                point[next].style.background = "#12b7de";
                animate(ul[curret],{left:w});
                animate(ul[next],{left:0});
                curret=next;
            }
        };
    }
    let imgbox =document.getElementsByClassName("img-box");
    let t = setInterval(lrright.onclick,1200);
    imgbox[0].onmouseover = function () {
        clearInterval(t);
    };
    imgbox[0].onmouseleave = function () {
        t = setInterval(lrright.onclick,1200);
    };
    // lrright.onclick=function () {
    //     index++;
    //     if(index >= ul.length){
    //         index = 0;
    //     }
    //     for(let i=0;i<ul.length;i++){
    //         ul[i].style.zIndex= 0;
    //         point[i].style.background="#ffffff"
    //     }
    //     ul[index].style.zIndex = 3;
    //     point[index].style.background="#12b7de"
    // };
    // lrleft.onclick =function () {
    //     if(index <= 0){
    //         index =ul.length
    //     }
    //     index--;
    //     for(let i=0;i<ul.length;i++){
    //         ul[i].style.zIndex= 0;
    //         point[i].style.background="#ffffff"
    //     }
    //     ul[index].style.zIndex = 3;
    //     point[index].style.background="#12b7de"
    // };
    // for(let i=0;i<point.length;i++){
    //     point[i].onclick = function () {
    //         index=i;
    //         for(let i=0;i<ul.length;i++){
    //             ul[i].style.zIndex= 0;
    //             point[i].style.background = "#ffffff";
    //         }
    //         ul[i].style.zIndex = 3;
    //         this.style.background = "#12b7de";
    //     };
    // }
    //
    let viewh = window.innerHeight;
    let imgs =document.querySelectorAll('.lazyload');
    let positionarr=[];
    imgs.forEach(function (ele) {
        let parent = ele.offsetParent;
        positionarr.push(parent.offsetTop + ele.offsetTop);
    });
    window.onscroll=function () {
        let scrolltop = document.documentElement.scrollTop;
        for(let i=0;i<positionarr.length;i++){
            if(scrolltop+viewh>=positionarr[i]+50){
                if(!imgs.src){
                imgs[i].src=imgs[i].getAttribute('aa');
                }
            }

        }

    }
};