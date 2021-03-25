import { getLoggedInUser, getLikes } from "../data/DataManager.js"

//this needs to be located above the Post declaration
//this could also be imported to this module
const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}

export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <p> posted by: ${postObject.user.name}</p>
        <img class="post__image" src="${postObject.imageURL}" />
        <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
        <p> userId: ${postObject.userId}</p>
        <p> description: ${postObject.description}</p>
        <button id="like__${postObject.id}">Like</button>
        ${postObject.user.id === getLoggedInUser().id
          ?` <button id="edit__${postObject.id}">Edit</button>
             <button id="delete__${postObject.id}">Delete</button> `
          :""
        }
        </section>
        `
      }
      // <p> timestamp: ${postObject.timestamp}</p>

      // ternary statement on line 12 is a way to write a conditional statement
      // what comes after the question mark is when the condition is true
      // the colon represents if the codition is false