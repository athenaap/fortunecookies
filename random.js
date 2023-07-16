


let i = 0;
let cnt = 0;
const imgElement = document.getElementById("mainPhoto")
var pics=["<img src='08FORTUNE.600.jpg.webp'>","<img src='08FORTUNE2.450.jpg.webp'>","<img src='59c8c51c75806.jpg'>","<img src='62a.jpg'>","<img src='71DW-Qp7J6L._SL1500_.jpg'>","<img src='90.jpeg'>","<img src='240_F_4846648_9MSO6zD99BKBDbgL7VFBfo6jHquOOlTO.jpg'>","<img src='983485247-Fortune_Cookies_trouble_cease_fortune_smiles.jpg'>","<img src='b31400e9e5f5d098c757f6c7e2f2de1b.jpg'>","<img src='eac3cd4f635e1e1ac564692fc70ed89f--chinese-dinner-fortune-cookie.jpg'>","<img src='EnbxAVVXcAEW7pG.jpg'>","<img src='fortune-cookies-with-paper-message-never-trust-a-fortune-cookie-DAD4M7.jpg'>","<img src='images-2.jpeg'>","<img src='images.jpeg'>","<img src='offensive-fortune-cookies_400x333.jpg'>","<img src='thumb_720_450_fortune-cookie_shutterstock_1875059.jpg'>","<img src='90.jpeg'>"]

function pic(){

      window.onload = change();
    
}

function change(){

    document.getElementById("picsHolder").innerHTML=pics[i];
    if(i==pics.length-1){
        i=0;
        cnt ++;
    }

    else
        i++;


    if(cnt==(pics.length-1)*2){
        i= Math.floor(Math.random()*(pics.length)); 
        document.getElementById("picsHolder").innerHTML=pics[i];
        i=0;
        cnt=0;
    }
    else{
        setTimeout(change, 10);
    }

  }
