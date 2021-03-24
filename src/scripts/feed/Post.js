import { getLoggedInUser } from "../data/DataManager.js"
export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <p> posted by: ${postObject.user.name}</p>
        <img class="post__image" src="${postObject.imageURL}" />
        <p> userId: ${postObject.userId}</p>
        <p> description: ${postObject.description}</p>
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