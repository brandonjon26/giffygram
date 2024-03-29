export const NavBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img id="home" src="./scripts/images/pb.png" alt="Giffygram icon" />
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="postSearch" placeholder="Search posts..." />
            </div>
            <div class="navigation__item navigation__myPosts">
                <button id="myPostsButton">My Posts</button>
            </div>
            <div class="navigation__item navigation__allPosts">
                <button id="allPostsButton">All Posts</button>
            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="./scripts/images/fountain-pen.svg" alt="Direct message" />
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}
