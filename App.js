document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var contact = document.getElementById("contact").value.trim();
  var password = document.getElementById("password").value.trim();
  var errorMsg = document.getElementById("errorMsg");


  if (firstName === "" || lastName === "" || email === "" || subject === "" || contact === "" || password === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";

    window.location.href = "post.html";
  }
});
var cardBg = "";

if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        var firstName = document.getElementById("firstName").value.trim();
        var lastName = document.getElementById("lastName").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();

        if (firstName === "" || lastName === "" || email === "" || password === "") {
            document.getElementById("errorMsg").style.display = "block";
        } else {
            window.location.href = "post.html";
        }
    });
}

function selectImg(src) {
    cardBg = src;
    var bgImg = document.getElementsByClassName("bgImg");
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].classList.remove("selectedImg");
    }
    event.target.classList.add("selectedImg");
}


var textColor = "black"; 

function selectColor(color, element) {
    textColor = color;

    var boxes = document.getElementsByClassName("color-box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("selectedColor");
    }

    
    element.classList.add("selectedColor");
}

function post() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    
    if (title.trim() && description.trim()) {
        var posts = document.getElementById("posts");
        
        var bgStyle = cardBg ? "background-image: url('" + cardBg + "');" : "background-color: #fff;";
        var colorStyle = "color: " + textColor + ";";

        posts.innerHTML += '<div class="card m-2">' +
            '<div class="card-header">@Aqsa</div>' +
            '<div style="' + bgStyle + ' background-size: cover; ' + colorStyle + '" class="card-body">' +
                '<h5 class="card-title">' + title + '</h5>' +
                '<p class="card-text">' + description + '</p>' +
            '</div>' +
            '<div class="ms-auto m-2">' +
                '<button onclick="editPost()" class="btn btn-success">Edit</button>' +
                '<button onclick="deletePost()" class="btn btn-danger">Delete</button>' +
            '</div>' +
        '</div>';

  
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    } else {
        Swal.fire("Error", "Please fill out the post!", "error");
    }
}








// 3. Delete Post (Using SweetAlert & parentNode)
function deletePost() {
    var btn = event.target;
    var card = btn.parentNode.parentNode; // button -> div (ms-auto) -> div (card)

    Swal.fire({
        title: "Delete this post?",
        text: "Are you sure you want to delete?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(function(result) {
        if (result.isConfirmed) {
            card.remove();
            Swal.fire("Deleted!", "Post has been removed.", "success");
        }
    });
}

// 4. Edit Post (Using SweetAlert & parentNode)
function editPost() {
    var btn = event.target;
    var card = btn.parentNode.parentNode;
    
    // Accessing title and description using ChildNodes (Old Method)
    var body = card.childNodes[1]; // Access the card-body div
    var title = body.childNodes[0].innerHTML;
    var desc = body.childNodes[1].innerHTML;

    document.getElementById("title").value = title;
    document.getElementById("description").value = desc;

    card.remove();

    Swal.fire({
        title: "Edit Mode",
        text: "The post data is moved to the form above.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false
    });
}


