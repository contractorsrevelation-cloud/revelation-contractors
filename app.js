/* SIDEBAR CONTROL */
const sidebar = document.getElementById('sidebar');

function toggleMenu(){
sidebar.classList.toggle('active');
}

/* CLOSE WHEN CLICKING A LINK */
document.querySelectorAll('.sidebar a').forEach(link => {
link.addEventListener('click', () => {
sidebar.classList.remove('active');
});
});

/* CLOSE WHEN CLICKING OUTSIDE MENU */
document.addEventListener('click', function(e){
const menuBtn = document.querySelector('.menuBtn');

if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)){
sidebar.classList.remove('active');
}
});

/* CLOSE WITH ESC KEY */
document.addEventListener('keydown', function(e){
if(e.key === "Escape"){
sidebar.classList.remove('active');
}
});


/* ADMIN LOGIN */
function adminLogin(){

const email = document.getElementById('adminEmail').value;
const password = document.getElementById('adminPassword').value;

if(email === 'admin@gmail.com' && password === '12345'){
document.getElementById('adminArea').style.display = 'block';
alert('Admin Login Successful');
}else{
alert('Invalid Credentials');
}

}

/* UPLOAD IMAGE */
function uploadImage(){

const file = document.getElementById('imageUpload').files[0];
const caption = document.getElementById('imageCaption').value;

if(!file || caption === ''){
alert('Select image and caption');
return;
}

const reader = new FileReader();

reader.onload = function(e){

const item = document.createElement('div');
item.className = 'galleryItem';

item.innerHTML = `
<img src="${e.target.result}">
<div class="caption">${caption}</div>
`;

document.getElementById('gallery').appendChild(item);

localStorage.setItem('galleryData', document.getElementById('gallery').innerHTML);

};

reader.readAsDataURL(file);
}

/* LOAD GALLERY */
if(localStorage.getItem('galleryData')){
document.getElementById('gallery').innerHTML =
localStorage.getItem('galleryData');
}

/* COMMENTS */
function postComment(){

const name = document.getElementById('commentName').value;
const text = document.getElementById('commentText').value;

if(name === '' || text === ''){
alert('Fill all fields');
return;
}

const comments = document.getElementById('comments');

comments.innerHTML += `
<div style="
background:#f8fafc;
padding:20px;
border-radius:18px;
margin-top:15px;
">
<h4 style="color:#ea580c;">${name}</h4>
<p>${text}</p>
</div>
`;

localStorage.setItem('commentsData', comments.innerHTML);
}

if(localStorage.getItem('commentsData')){
document.getElementById('comments').innerHTML =
localStorage.getItem('commentsData');
}

/* ANNOUNCEMENT */
function updateAnnouncement(){

const text = document.getElementById('newAnnouncement').value;

if(text === ''){
alert('Write announcement');
return;
}

document.getElementById('announcementText').innerHTML = text;

localStorage.setItem('announcementData', text);
}

if(localStorage.getItem('announcementData')){
document.getElementById('announcementText').innerHTML =
localStorage.getItem('announcementData');
}