const games = [
    {
        "id": "1",
        "name": "Pacman 1981",
        "console": "Atari",
        "year": "1981",
        "path": "C:/yada/yada/yada",
        "developer": "Toru Iwatani / Namco",
        "emulator:": "Atari - 2600 (Stella)",
    },
    {
        "id": "2",
        "name": "VS Super Mario Bros (VS)",
        "console": "Nintendo Nes",
        "year": "1986",
        "path": "C:/yada/yada/yada",
        "developer": "Nintendo",
        "emulator:": "Nintendo - SNES / SFC (Snes9x 2010)",
    },
    {
        "id": "3",
        "name": "Tetris",
        "console": "Nintendo Nes",
        "year": "1984",
        "path": "C:/yada/yada/yada",
        "developer": "Alekséi Pázhitnov",
        "emulator:": "Nintendo - SNES / SFC (Snes9x 2010)",
    },
    {
        "id": "4",
        "name": "Sonic The Hedgehog",
        "console": "Sega Genesis",
        "year": "1991",
        "path": "C:/yada/yada/yada",
        "developer": "Naoto Ōshima / Yuji Naka / Hirokazu Yasuhara",
        "emulator:": "Sega - Mega Drive - Genesis (BlastEm)",
    },
    {
        "id": "5",
        "name": "Crash Bandicoot",
        "console": "PlayStation",
        "year": "1996",
        "path": "C:/yada/yada/yada",
        "developer": "Naughty dog / Vivendi Games",
        "emulator:": "Sony- PlayStation (Beetle PSX HW)",
    }
]

window.onload = (event) => {
    const table = document.querySelector(".gamelist-table-body");
    console.log(games);
    games.forEach((item) => {
        let value = '<tr class="gamelist-table-game-row"> ' +
            '<th scope="col">' + item.name + '</th>' +
            '<th scope="col">' + item.console + '</th>' +
            '<th scope="col">' + item["emulator:"] + '</th>' +
            '</tr>';
        table.innerHTML += value;
    })
};