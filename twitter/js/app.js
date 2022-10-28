const formButton = document.querySelector("#tweetar");

const newTwet = document.getElementById("new-tweet");

const listPosts = document.getElementById("posts-list");

const sideButton = document.querySelector(".sidebar__tweet");

formButton.addEventListener("click", (event) => {
    event.preventDefault();
    const tweet = newTwet.value;
    createPost(tweet);
    input.value = "";
})

function createPost(tweet){
    const divMain = document.createElement("div")
    divMain.setAttribute("class", "post")
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
            <div class="post__headerDescription">
              <p>${tweet}</p>
            </div>
          </div>
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
    `;
    divMain.innerHTML = post
    listPosts.appendChild(divMain);
}

