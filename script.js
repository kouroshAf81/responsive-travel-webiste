const SelectElement = (s) => document.querySelector(s);

SelectElement('.open').addEventListener('click',() =>{
    SelectElement('.nav-list').classList.add('active');
});
SelectElement('.close').addEventListener('click',() =>{
    SelectElement('.nav-list').classList.remove('active');
});




