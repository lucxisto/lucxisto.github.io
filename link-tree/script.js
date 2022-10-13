document.addEventListener("DOMContentLoaded", function(){
    const pageTheme = document.getElementsByClassName('theme');
    pageTheme.addEventListener('click', changeTheme);
})
function changeTheme(event){
    const pageBody = document.getElementsByTagName('body');
    const actualTheme = document.getElementsByClassName('theme');
    for(let i = 0; i < actualTheme.length; i++){
        if(actualTheme.innerHTML === "Association"){
            pageBody.className = 'association';
        }else if(actualTheme.innerHTML === "Classic"){
            pageBody.className = 'classic';
        }else if(actualTheme.innerHTML === "City"){
            pageBody.className = 'city';
        }
    }
}