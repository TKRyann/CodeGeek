// Elementos principais
const publishBtn = document.getElementById("publishBtn");
const postText = document.getElementById("postText");
const postsArea = document.getElementById("postsArea");
const toggleTheme = document.getElementById("toggleTheme");

// Publicar post
publishBtn.addEventListener("click", () => {
    const text = postText.value.trim();
    if (text === "") return;

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <div class="post-header">
            <img src="img/avatar.png" class="avatar">

            <div class="post-info">
                <span class="post-author">Usuário</span>
                <span class="post-time">Agora mesmo</span>
            </div>
        </div>

        <div class="post-content">${text}</div>

        <div class="post-actions">
            <button>🤍 Curtir</button>
            <button>💬 Comentar</button>
            <button>🔁 Compartilhar</button>
        </div>
    `;

    postsArea.prepend(post); // coloca no topo
    postText.value = "";
});

// Modo claro/escuro
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light");

    toggleTheme.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});
