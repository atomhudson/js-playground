const apiURL = "https://api.github.com/users/";
const main = document.querySelector("#main");

const getUser = async (username) => {
    try {
        const response = await fetch(apiURL + username);
        if (!response.ok) throw new Error("User not found");

        const data = await response.json();
        console.log(data);

        const card = `
            <div class="card">
                <div>
                    <img class="avatar" src="${data.avatar_url}" alt="${data.name || "User"}">
                </div>
                <div class="user-info">
                    <h2>${data.name || "No Name Available"}</h2>
                    <p>${data.bio || "No Bio Available"}</p>
                    <ul class="info">
                        <li>${data.followers} <strong>Followers</strong></li>
                        <li>${data.following} <strong>Following</strong></li>
                        <li>${data.public_repos} <strong>Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
        `;

        main.innerHTML = card;
        getRepos(username);
    } catch (error) {
        console.error("Error fetching user:", error);
        main.innerHTML = `<h2 style="color: red;">User not found</h2>`;
    }
};

const getRepos = async (username) => {
    try {
        const reposContainer = document.querySelector("#repos");
        const response = await fetch(apiURL + username + "/repos");
        if (!response.ok) throw new Error("Repositories not found");

        const data = await response.json();
        console.log(data);

        reposContainer.innerHTML = ""; // Clear previous repos

        data.forEach((repo) => {
            const repoLink = document.createElement("a");
            repoLink.classList.add("repo");
            repoLink.href = repo.html_url;
            repoLink.target = "_blank";
            repoLink.innerText = repo.name;
            reposContainer.appendChild(repoLink);
        });
    } catch (error) {
        console.error("Error fetching repos:", error);
        document.querySelector("#repos").innerHTML = `<p style="color: red;">No Repositories Found</p>`;
    }
};

// Initial call (change username if needed)
// getUser("atomhudson");
const formSubmit = () => {

    const searchBox = document.querySelector("#search");
    if(searchBox.value != ""){
        getUser(searchBox.value);
    }
    return false;
}

getUser("atomhudson");