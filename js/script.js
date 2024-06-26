const aboutMe = document.getElementById('aboutMe').innerHTML;
const aboutMeElement = document.getElementById("aboutMe");

const contactModal = document.getElementById("contactModal");
const fixedMessage = document.getElementById("fixedMessage");

const webLink = encodeURI(window.location.href);
const copyInput = document.querySelector(".copy_two");

copyInput.value = webLink;

const shareBook = document.getElementById('shareBook');

shareBook.addEventListener("click", () => {

    if(navigator.share){
        
        navigator.share({
            text: 'Graphic designers and web developers in port harcourt',
            url: webLink
        }).then(() => {
            console.log('Thank you for sharing our page');
        });

    }else{
        
        if(confirm('Your current browser does not support the share function, please confirm to copy link and share manually')){

          copyInput.value = webLink;
          copyInput.disabled = false;

          copyInput.select();
          document.execCommand("copy");
          window.getSelection().removeAllRanges();

          copyInput.disabled = true;
          alert("Link copied");

        }
    }
});

if(screen.width < 768){

  aboutMeElement.innerHTML = aboutMe.substring(0, 430) + '<span onclick="showMore()" class="ms-3 text-warning">Read More ..<span>';
}

function showMore(){
  
  aboutMeElement.innerHTML = aboutMe + '<span onclick="showLess()" class="ms-3 text-warning">Read Less ..<span>';
}

function showLess(){

  aboutMeElement.innerHTML = aboutMe.substring(0, 430) + '<span onclick="showMore()" class="ms-3 text-warning">Read More ..<span>';
}

$('.closeModal').on('click', function() {
  contactModal.classList.add("invisibleBox");
});

function showContact(id) {

  event.preventDefault();
  
  var oderMessage = `Hi, i'm intrested in your ${id.getAttribute("data-content")}, and would like some more details.`;
  
  fixedMessage.value = oderMessage;
  contactModal.classList.remove("invisibleBox");
}