document.getElementById("searchBtn").onclick = () => {
    const nameOrId = document.getElementById("pokemonInput").value.toLowerCase().trim();
    if (!nameOrId) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
        .then(res => res.json())
        .then(pokemon => {
            document.getElementById("pokemonName").textContent = pokemon.name;
            document.getElementById("pokemonNumber").textContent = `#${pokemon.id}`;
            document.getElementById("pokemonSprite").src = pokemon.sprites.front_default;
            document.getElementById("pokemonHeight").textContent = `${pokemon.height / 10} m`;
            document.getElementById("pokemonWeight").textContent = `${pokemon.weight / 10} kg`;
            document.getElementById("pokemonTypes").textContent = pokemon.types.map(t => t.type.name).join(", ");

            document.getElementById("pokemonCard").classList.remove("hidden");
            document.getElementById("error").classList.add("hidden");
        })
        .catch(() => {
            document.getElementById("pokemonCard").classList.add("hidden");
            document.getElementById("error").classList.remove("hidden");
        });
};
