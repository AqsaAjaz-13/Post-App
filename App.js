document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let contact = document.getElementById("contact").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("errorMsg");


  if (firstName === "" || lastName === "" || email === "" || subject === "" || contact === "" || password === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";

    window.location.href = "post.html";
  }
});


var cardBg;

function editPost() { var card = event.target.parentNode.parentNode; var title = card.childNodes[3].childNodes[1].innerHTML; var description = card.childNodes[3].childNodes[3].innerHTML; document.getElementById("title").value = title; document.getElementById("description").value = description; card.remove() }
function post() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var posts = document.getElementById("posts");
  console.log(title, description);
  var now = new Date();
  var dateTime = now.toLocaleDateString();
  if (title.trim() && description.trim()) {
    posts.innerHTML += `<div class="card m-2">
              <div class="card-header">@Aqsa</div>
              <div style="background-image: url(${cardBg});"  class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
              </div>
     

<div class="ms-auto m-2">
                  <button onclick="editPost()" class="btn btn-success">Edit</button>
                  <button onclick="deletePost()" class="btn btn-danger">Delete</button>
               <div>
            
            </div>`;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Empty Post...",
      text: "Enter title & description",
    });
  }
}
function selectImg(src) {
  cardBg = src;
  console.log(cardBg);
  var bgImg = document.getElementsByClassName("bgImg");
  for (var i = 0; i < bgImg.length; i++) {
    bgImg[i].className = "bgImg";
  }
  event.target.classList.add("selectedImg");
}