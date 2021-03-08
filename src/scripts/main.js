import { getUsers, getPosts } from "./data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./Nav/NavBar.js"
import { footer } from "./footer.js"
/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

//Get a reference to the location on the DOM where the app will display
// let postElement = document.querySelector(".postList");
// let navElement = document.querySelector("nav");
// let entryElement = document.querySelector(".entryForm")

const showPostList = () => {
    const postElement = document.querySelector(".postList");
      getPosts().then((allPosts) => {
          postElement.innerHTML = PostList(allPosts);
      })
      postElement.innerHTML="Hello Cohort-47"
  }

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
    showPostList();
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showFooter = () => {
    const footerElement = document.querySelector("footer")
    footerElement.innerHTML = footer();
}

// Are you defining the function here or invoking it?
startGiffyGram();
showNavBar();
showPostList();
showFooter();
