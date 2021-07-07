let list = document.querySelectorAll('.list');
for (let index = 0; index < list.length; index++) {
    list[index].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[index].className = 'list active';
    };   
}

let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}