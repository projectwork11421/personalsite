var mform=document.getElementById('Form');
var mname=document.getElementById('name');
var mpass=document.getElementById('pass');
var mcode=document.getElementById('code');
var deny=document.getElementById('deny');
var thala=document.getElementById('heading');
var studies=document.getElementById('studies');
var projects=document.getElementById('projects');
var mpassword='savage';
var accessname='ganesh';
var accesscode='221ca025';
var padam=document.getElementById('backgroundimage');
var udambu=document.getElementById('udal');
var loadanimation=document.getElementById('load');
var ennaipatri=document.getElementById('aboutme');
function opensite(){
    
    if(mpass.type=='password'){
       mpass.type='text';
    }else{
        mpass.type='password';
    }
    if(mpass.value==mpassword&&mname.value==accessname){
        if(mcode.value==accesscode){
    mform.style.display='none';
    loadanimation.style.display='block';
    udambu.style.backdropFilter='blur(20px)';
    setTimeout(function(){
loadanimation.style.display='none';
udambu.style.backdropFilter='blur(0px)';
studies.style.display='block';
projects.style.display='block';
thala.style.opacity='1';
padam.style.display='block';
    },12100);        

}else if(mpass.value==''&&mname==''){
if(mcode==''){
mform.style.display='block';
}
}
    }else{
deny.innerText='ACCESS DENIED';
deny.style.color='red';
setTimeout(function(){
    mform.style.display='none';
},1500);
       
    }
    }function openaboutmediv(){
        thala.style.animation='thalaithiraka 0.7s linear';
        thala.style.transform='translateY(10%)';
        ennaipatri.style.display='block';
        
    }





var shareprofile=document.getElementById('share');
var aboutmyself=document.getElementById('aboutmyself');
var mypaddipugal=document.getElementById('mystudies');
var enpadaippugal=document.getElementById('enpadaipugal');
function openme(){
    shareprofile.style.display='block';
    aboutmyself.style.display='none';
    mypaddipugal.style.display='none';
     enpadaippugal.style.display='none';
}function openprofile(){
    shareprofile.style.display='none';
    aboutmyself.style.display='block';
    aboutmyself.style.animation='openaccount 2s linear';
    mypaddipugal.style.display='none';
    enpadaippugal.style.display='none';
}function mypadippu(){
aboutmyself.style.display='none';
shareprofile.style.display='none';
    mypaddipugal.style.display='block';
    enpadaippugal.style.display='none';
    
}function enpadaippu(){
enpadaippugal.style.display='block';
mypaddipugal.style.display='none';
aboutmyself.style.display='none';
shareprofile.style.display='none';

}

  