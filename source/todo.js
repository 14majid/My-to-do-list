// let paraGraph= document.querySelector('div');
// let Elements= document.createElement('p');
// let text= document.createTextNode('\u00D7')

// Elements.appendChild(textNode);
// paraGraph.appendChild(Elements);

let fallouSow= $('.spina');
let textNode= $(document.createTextNode('\u00D7'));
fallouSow.append(textNode)
fallouSow.click(getRid)

function getRid(){
    this.parentElement.style.display= 'none';
}


let listItem= document.querySelector('ul');
listItem.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
}, false);




let adList= $('.myspan')
adList.on('click', newElement)
$(document).on('keydown', function(evt){
    if(evt.keyCode === 13){
        newElement();
    }
})

function newElement(evt){

    // var y= document.createElement('li');
    // var g= document.createTextNode('abdou')
    // var f= document.querySelector('ul');
    // var d= document.createElement('span');
    // var h= document.createTextNode('\u00D7')
    // d.appendChild(h)
    // d.classList.add('spina')
    // y.appendChild(d)
    // y.appendChild(g)
    // f.appendChild(y)

    // d.addEventListener('click', function(){

    //     this.parentElement.style.display= 'none'
    // })


    let newAb= document.createElement('li');
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue)
    newAb.appendChild(t);
    if(inputValue === ''){
        alert('You must write something')
    }else{
        document.querySelector('ul').appendChild(newAb);
    }
    document.getElementById("myInput").value = "";


    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.classList.add('spina');
    span.appendChild(txt);
    newAb.appendChild(span);
    
    span.addEventListener('click',function(){
        this.parentElement.style.display= 'none'
    })

}



// let j= document.querySelector("ul");
// let i= document.createElement('li');
// let djfn= document.createTextNode('abdjnhfjcfnbdh');

// i.appendChild(djfn);
// j.appendChild(i);