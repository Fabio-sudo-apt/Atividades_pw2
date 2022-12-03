const formButton = document.querySelector("#tweetar");

const newTwet = document.getElementById("new-tweet");

const listPosts = document.getElementById("posts-list");

const sideButton = document.querySelector(".sidebar__tweet");

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  const tweet = newTwet.value;
  createPost(tweet);
  newTwet.value = "";
});

function createPost(tweet) {
  const divMain = document.createElement("div");
  divMain.setAttribute("class", "post");
  const post = `
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@somanathg</span
                >
              </h3>
            </div>
            <div class="post__headerDescription" id="post__headerD">
              <p>${tweet}</p>
            </div>
          </div>
          <div class="post__footer">
            <span class="material-icons" onclick="editItem(this)"> 
                <i class="fa-solid fa-pen-to-square"></i>
            </span>
            <span class="material-icons"> 
                <i class="fa-solid fa-heart"></i>
            </span>
            <span class="material-icons" onclick="deleteItem(this)"> 
                <i class="fa-solid fa-trash" ></i>
             </span>
          </div>
        </div>
    `;
  divMain.innerHTML = post;
  listPosts.appendChild(divMain);
}

function editItem(e) {
  const input = document.createElement("input");
  const button = document.createElement("input");
  input.setAttribute("id", "IdInput");
  button.setAttribute("type", "button");
  button.setAttribute("value", "Editar");

  const post__headerDescription = document.getElementById("post__headerD");
  post__headerDescription.removeChild(post__headerDescription.children[0]);
  post__headerDescription.appendChild(input);
  post__headerDescription.appendChild(button);

  button.addEventListener("click", () => {
    let valueInput = document.getElementById("IdInput");
    const pg = document.createElement("p");
    pg.innerHTML = valueInput.value
    document.getElementById("post__headerD").removeChild(button)
    document.getElementById("post__headerD").removeChild(input)
    post__headerDescription.appendChild(pg);
  });
}

function deleteItem(e) {
  let post = e.parentNode.parentNode.parentNode;
  listPosts.removeChild(post);
}
