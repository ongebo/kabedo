toggleReactions();
toggleCommentReactions();

var icon;
var oppositeIcon;
var test1;
var test2;

function toggleReactions() {
  var reactions = document.getElementsByClassName("reaction");

  for (var c = 0; c < reactions.length; c++) {
    var reaction = reactions[c];
    reaction.addEventListener("click", e => {
      e.target.classList.toggle("active");
      var icon = e.target.querySelector("i");
      if (icon.className == "far fa-thumbs-up") {
        icon.className = "fas fa-thumbs-up";
      } else {
        icon.className = "far fa-thumbs-up";
      }
    });
  }
}

function toggleCommentReactions() {
  var commentLikes = document.getElementsByClassName("comment-like");
  var commentDislikes = document.getElementsByClassName("comment-dislike");

  attachClickHandlers(commentLikes, true);
  attachClickHandlers(commentDislikes, false);
}

function attachClickHandlers(list, likeIcon) {
  for (var c = 0; c < list.length; c++) {
    var reaction = list[c];
    reaction.addEventListener("click", e => {
      var parent = e.target.parentElement;
      icon = e.target;
      oppositeIcon = getOppositeIcon(parent, likeIcon);
      if (likeIcon) {
        test1 = isLiked;
        test2 = isDisliked;
        setIconStatus(
          "fas fa-thumbs-up",
          "far fa-thumbs-up",
          "far fa-thumbs-down"
        );
      } else {
        test1 = isDisliked;
        test2 = isLiked;
        setIconStatus(
          "fas fa-thumbs-down",
          "far fa-thumbs-down",
          "far fa-thumbs-up"
        );
      }
    });
  }
}

function getOppositeIcon(parent, likeIcon = true) {
  if (likeIcon) {
    return parent.nextElementSibling.querySelector("i");
  } else {
    return parent.previousElementSibling.querySelector("i");
  }
}

function setIconStatus(class1, class2, class3) {
  if (!test1(icon) && !test2(oppositeIcon)) {
    icon.className = class1;
  } else if (test1(icon) && !test2(oppositeIcon)) {
    icon.className = class2;
  } else {
    icon.className = class1;
    oppositeIcon.className = class3;
  }
}

function isLiked(likeIcon) {
  if (likeIcon.className == "fas fa-thumbs-up") {
    return true;
  } else {
    return false;
  }
}

function isDisliked(dislikeIcon) {
  if (dislikeIcon.className == "fas fa-thumbs-down") {
    return true;
  } else {
    return false;
  }
}
