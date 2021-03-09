export const Post = (postObject) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <p> userId: ${postObject.userId}</p>
        <p> description: ${postObject.description}</p>
        <p> timestamp: ${postObject.timestamp}</p>
      </section>
    `
  }