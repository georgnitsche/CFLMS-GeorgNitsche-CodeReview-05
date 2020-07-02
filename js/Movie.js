class Movie {
  name;
  description;
  image;
  likes = 0;

  constructor(name, description, image) {
    this.name = name;
     this.description = description;
    this.image = image;
  }

  getMovie() {
     return this;
  }

  getMovieHtml() {
  var that = this;
  var mainDiv = document.createElement("div");
 mainDiv.className = 'movie';

 var img = document.createElement("img");
 img.src = this.image;
 img.className = 'images';

 var rightContainer = document.createElement("div");
 rightContainer.className = "content";

 var name = document.createElement("div")
 name.className = 'name';
 name.innerHTML = this.name;

  var description = document.createElement("div");
  description.className = 'description';
  description.innerHTML = this.description;

  var likes = document.createElement("div");
  likes.className = 'likes';

  var likeButton = document.createElement("button");
  likeButton.onclick = function(){that.addLikes()};
  likeButton.innerHTML = "Like <img src='./img/thumbup.png'/>";
  likeButton.className = "likes-button";

  var likesNumber = document.createElement("span");
  likesNumber.id = this.name + 'likes';
  likesNumber.innerHTML = this.likes;
  likesNumber.className = "likes-number";

  likes.appendChild(likeButton);
  likes.appendChild(likesNumber);

  rightContainer.appendChild(name)
  rightContainer.appendChild(description)
  rightContainer.appendChild(likes);

  mainDiv.appendChild(img)
  mainDiv.appendChild(rightContainer);
        

        return  mainDiv
    }

    addLikes() {
        this.likes += 1;
        document.getElementById(this.name + 'likes').innerHTML = this.likes;
    }
};