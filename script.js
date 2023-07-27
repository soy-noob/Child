var bg=document.getElementById('background');
var charBody=document.getElementById('body');
var charData=document.getElementById('data');
var index=parseInt(localStorage.getItem('charImgIndex'));;

var head1=document.getElementById('aiHead');
var head2=document.getElementById('aquaHead');
var head3=document.getElementById('rubyHead');
var head4=document.getElementById('kanaHead');
var head5=document.getElementById('memHead');
var head6=document.getElementById('akaneHead');

var shadow1=document.getElementById('sd1');
var shadow2=document.getElementById('sd2');
var shadow3=document.getElementById('sd3');
var shadow4=document.getElementById('sd4');
var shadow5=document.getElementById('sd5');
var shadow6=document.getElementById('sd6');

var redWord=document.getElementById('redWord');
var whiteWord=document.getElementById('whiteWord');
var enName=document.getElementById('enName');
var cvNameJP=document.getElementById('cvNameJP');
var cvNameEN=document.getElementById('cvNameEN');
var charDec=document.getElementById('charDecoration');

redWord.style.width='64px';

setTimeout(() => {
    charBody.style.opacity="1";
    charBody.style.bottom='0px';
    charData.style.opacity="1";
    charData.style.left='0px';
}, 500);


switch(index){
    case 0:
        charBody.src='img/爱立绘.png';
        redWord.innerHTML='ア';
        whiteWord.innerHTML='イ';
        enName.innerHTML='Ai';
        whiteWord.style.width='64px';
        cvNameJP.innerHTML='高橋李依';
        cvNameEN.innerHTML='Takahashi Rie';
        charDec.innerHTML="苺プロダクション所属アイドルグループ「B小町」のセンター。 </br> その天性の輝きで一世を風靡した。";
        head1.style.backgroundColor="#FF00A0";
        head2.style.backgroundColor="black";
        head3.style.backgroundColor="black";
        head4.style.backgroundColor="black";
        head5.style.backgroundColor="black";
        head6.style.backgroundColor="black";
        break;
    case 1:
        charBody.src='img/阿库亚立绘.png';
        redWord.innerHTML='ア';
        whiteWord.innerHTML='クア';
        enName.innerHTML='Aqua';
        whiteWord.style.width='128px';
        cvNameJP.innerHTML='大塚剛央';
        cvNameEN.innerHTML='Otsuka Takeo';
        charDec.innerHTML='陽東高校一般科の1年生。ルビーの双子の兄。</br>母親であるアイを殺した犯人を見つけ出すため、</br> 芸能界に足を踏み入れる。'
        head1.style.backgroundColor="black";
        head2.style.backgroundColor="#FF00A0";
        head3.style.backgroundColor="black";
        head4.style.backgroundColor="black";
        head5.style.backgroundColor="black";
        head6.style.backgroundColor="black";
        break;    
    case 2:
        charBody.src='img/露比立绘.png';
        redWord.innerHTML='ル';
        whiteWord.innerHTML='ビー';
        enName.innerHTML='Ruby';
        whiteWord.style.width='128px';
        cvNameJP.innerHTML='伊駒ゆりえ';
        cvNameEN.innerHTML='Igoma Yurie';
        charDec.innerHTML='陽東高校芸能科の1年生。アクアの双子の妹。</br>亡き母であるアイのようなアイドルになることを目指している。'
        head1.style.backgroundColor="black";
        head2.style.backgroundColor="black";
        head3.style.backgroundColor="#FF00A0";
        head4.style.backgroundColor="black";
        head5.style.backgroundColor="black";
        head6.style.backgroundColor="black";
        break;
    case 3:
        charBody.src='img/加奈立绘.png';
        redWord.innerHTML='有';
        whiteWord.innerHTML='馬かな';
        enName.innerHTML='Arima Kana';
        whiteWord.style.width='196px';
        cvNameJP.innerHTML='潘めぐみ';
        cvNameEN.innerHTML='Han Megumi';
        charDec.innerHTML='陽東高校芸能科の2年生。</br>幼い頃から子役として活動しており</br>当時は「十秒で泣ける天才子役」と評判だった。'
        head1.style.backgroundColor="black";
        head2.style.backgroundColor="black";
        head3.style.backgroundColor="black";
        head4.style.backgroundColor="#FF00A0";
        head5.style.backgroundColor="black";
        head6.style.backgroundColor="black";
        break;
    case 4:
        charBody.src='img/MEM立绘.png';
        redWord.innerHTML='M';
        whiteWord.innerHTML='EMちょ';
        enName.innerHTML='MEMcho';
        whiteWord.style.width='238px';
        cvNameJP.innerHTML='大久保瑠美';
        cvNameEN.innerHTML='Okubo Rumi';
        charDec.innerHTML='人気ユーチューバーの高校3年生。</br>YouTubeの登録者数は37万人、TikTokのフォロワー数638k。'
        head1.style.backgroundColor="black";
        head2.style.backgroundColor="black";
        head3.style.backgroundColor="black";
        head4.style.backgroundColor="black";
        head5.style.backgroundColor="#FF00A0";
        head6.style.backgroundColor="black";
        break;
    case 5:
        charBody.src='img/黑川立绘.png';
        redWord.innerHTML='黒';
        whiteWord.innerHTML='川あかね';
        enName.innerHTML='Kurokawa Akane';
        whiteWord.style.width='328px';
        cvNameJP.innerHTML='石見舞菜香';
        cvNameEN.innerHTML='Iwami Manaka';
        charDec.innerHTML='劇団「ララライ」に所属し女優として活動している高校2年生。</br>真面目で努力家な性格。'
        head1.style.backgroundColor="black";
        head2.style.backgroundColor="black";
        head3.style.backgroundColor="black";
        head4.style.backgroundColor="black";
        head5.style.backgroundColor="black";
        head6.style.backgroundColor="#FF00A0";
        break;
}

shadow1.style.backgroundColor=head1.style.backgroundColor;
shadow2.style.backgroundColor=head2.style.backgroundColor;
shadow3.style.backgroundColor=head3.style.backgroundColor;
shadow4.style.backgroundColor=head4.style.backgroundColor;
shadow5.style.backgroundColor=head5.style.backgroundColor;
shadow6.style.backgroundColor=head6.style.backgroundColor;

shadow1.onclick=function(){
    localStorage.setItem('charImgIndex',"0");
    location.reload();
}
shadow2.onclick=function(){
    localStorage.setItem('charImgIndex',"1");
    location.reload();
}
shadow3.onclick=function(){
    localStorage.setItem('charImgIndex',"2");
    location.reload();
}
shadow4.onclick=function(){
    localStorage.setItem('charImgIndex',"3");
    location.reload();
}
shadow5.onclick=function(){
    localStorage.setItem('charImgIndex',"4");
    location.reload();
}
shadow6.onclick=function(){
    localStorage.setItem('charImgIndex',"5");
    location.reload();
}