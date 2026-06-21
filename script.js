const pages=[
{t:'❤️',c:'To Khushiii...\n\nThis page was made for one person only.\n\nA few minutes.\nA lifetime of feelings.'},
{t:'The Beginning',c:'Every time you come back into my life...'},
{t:'',c:'Everything starts feeling normal again.'},
{t:'',c:'I smile more.'},
{t:'',c:'I wait for your messages.'},
{t:'',c:'I become the version of myself that only exists around you.'},
{t:'The Truth',c:'I wasn\'t completely myself.'},
{t:'',c:'Not because I cared less.'},
{t:'',c:'I was scared.'},
{t:'The Biggest Misunderstanding',c:'You think I don\'t care.'},
{t:'',c:'The truth is... I care more than I know how to show.'},
{t:'',c:'My whole day depends on your mood.'},
{t:'The Plane',c:'Imagine boarding a plane while already knowing it will crash someday.'},
{t:'',c:'Would you truly enjoy the journey?'},
{t:'',c:'That is exactly how I felt.'},
{t:'What I Really Meant',c:'I wasn\'t asking you to leave.'},
{t:'',c:'I was asking you to stay.'},
{t:'One Last Thing',c:'I opened my heart because I trusted you.'},
{t:'',c:'Please never make me feel that I cannot share my feelings with you.'},
{t:'I\'m Sorry',c:'Hurting you was never my intention.'},
{t:'❤️',c:'I wasn\'t asking you to come back.\n\nI was asking you to stay.\n\n— Akshay'}
];
let i=0;
const title=document.getElementById('title');
const text=document.getElementById('text');
const btn=document.getElementById('nextBtn');
function render(){
title.innerText=pages[i].t;
text.innerText=pages[i].c;
btn.innerText=i===pages.length-1?'Replay ❤️':'Next ❤️';
}
btn.onclick=()=>{i=(i+1)%pages.length;render();}
render();
