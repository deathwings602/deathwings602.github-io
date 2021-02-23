let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mozilla.jpg') {
        myImage.setAttribute('src', 'images/mountains.jpg');
    } else {
        myImage.setAttribute('src', 'images/mozilla.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    while (!myName||myName === null){
        myName = prompt('请输入你的名字。');
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla 酷毙了， ' + myName;
    
}
myButton.onclick = setUserName;

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    //alert('what happend?');
    let storedName=localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了， ' + storedName;
}
