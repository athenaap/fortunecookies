


let i = 0;
let cnt = 0;
const imgElement = document.getElementById("mainPhoto")
var pics=["<img src='pics/08FORTUNE.600.jpg.webp'>","<img src='pics/08FORTUNE2.450.jpg.webp'>","<img src='pics/59c8c51c75806.jpg'>","<img src='pics/62a.jpg'>","<img src='pics/71DW-Qp7J6L._SL1500_.jpg'>","<img src='pics/90.jpeg'>","<img src='pics/240_F_4846648_9MSO6zD99BKBDbgL7VFBfo6jHquOOlTO.jpg'>","<img src='pics/983485247-Fortune_Cookies_trouble_cease_fortune_smiles.jpg'>","<img src='pics/b31400e9e5f5d098c757f6c7e2f2de1b.jpg'>","<img src='pics/eac3cd4f635e1e1ac564692fc70ed89f--chinese-dinner-fortune-cookie.jpg'>","<img src='pics/EnbxAVVXcAEW7pG.jpg'>","<img src='pics/fortune-cookies-with-paper-message-never-trust-a-fortune-cookie-DAD4M7.jpg'>","<img src='pics/images-2.jpeg'>","<img src='pics/images.jpeg'>","<img src='pics/offensive-fortune-cookies_400x333.jpg'>","<img src='pics/thumb_720_450_fortune-cookie_shutterstock_1875059.jpg'>"]

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
