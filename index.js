class Level {
    constructor(name, year, status, difficulty, series) {
        this.name = name;
        this.year = year;
        this.status = status;
        this.difficulty = difficulty;
        this.series = series;
    }
}

const Status = {
    Unverified: { id: "status-unverified", label: "Unverified", color: "#EA9999" },
    Verified: { id: "status-verified", label: "Verified", color: "#6AA84F" },
    Unfinished: { id: "status-unfinished", label: "Unfinished", color: "#6D9EEB" }
};

const Difficulty = {
    Easy: { id: "difficulty-easy", label: "Easy", color: "#00A6FF" },
    Normal: { id: "difficulty-normal", label: "Normal", color: "#00DD00" },
    Hard: { id: "difficulty-hard", label: "Hard", color: "#FFC400" },
    Harder: { id: "difficulty-harder", label: "Harder", color: "#FF2200" },
    Insane: { id: "difficulty-insane", label: "Insane", color: "#FF46E6" },
    DemonEasy: { id: "difficulty-demon-easy", label: "Easy Demon", color: "#9941F7" },
    DemonMedium: { id: "difficulty-demon-medium", label: "Medium Demon", color: "#DD32C6" },
    DemonHard: { id: "difficulty-demon-hard", label: "Hard Demon", color: "#FF364D" },
    DemonInsane: { id: "difficulty-demon-insane", label: "Insane Demon", color: "#F11B16" },
    DemonExtreme: { id: "difficulty-demon-extreme", label: "Extreme Demon", color: "#9D0000" },
    Impossible: { id: "difficulty-impossible", label: "Impossible", color: "#160040" },
};

const Series = {
    Goofy: { id: "series-goofy", label: "Goofy Series", color: "#0000FF" },
    Misery: { id: "series-misery", label: "Misery Series", color: "#AF58E3" },
    Collab: { id: "series-collab", label: "Collab", color: "#ED6320" }
};

var list = [
    new Level("Kowloon", 2025, Status.Unfinished, Difficulty.Impossible),
    new Level("Gooferhouse unnerfed", 2024, Status.Unverified, Difficulty.Impossible, Series.Goofy),
    new Level("silent Gay clubstep", 2017, Status.Unverified, Difficulty.Impossible, Series.Goofy),
    new Level("99999", 2024, Status.Unverified, Difficulty.Impossible),
    new Level("HEART FROM YOUR HATE", 2025, Status.Unverified, Difficulty.DemonExtreme),
    new Level("maze", 2025, Status.Unverified, Difficulty.DemonExtreme),
    new Level("Gooferus", 2025, Status.Unverified, Difficulty.DemonExtreme, Series.Goofy),
    new Level("Goofy Grief", 2025, Status.Unfinished, Difficulty.DemonExtreme, Series.Goofy),
    new Level("Goofy Grief Layout", 2025, Status.Verified, Difficulty.DemonInsane, Series.Goofy),
    new Level("iCircles", 2026, Status.Verified, Difficulty.DemonInsane, Series.Collab),
    new Level("Bald Machine", 2025, Status.Verified, Difficulty.DemonInsane, Series.Misery),
    new Level("Deranged on Track", 2026, Status.Verified, Difficulty.DemonInsane, Series.Misery),
    new Level("heart from your hate (Old)", 2023, Status.Unfinished, Difficulty.DemonInsane),
    new Level("relatable full ver", 2024, Status.Verified, Difficulty.DemonInsane, Series.Collab),
    new Level("Goofy Grief Original", 2025, Status.Verified, Difficulty.DemonInsane, Series.Goofy),
    new Level("iCircles original", 2026, Status.Unverified, Difficulty.DemonInsane, Series.Collab),
    new Level("Gooferhouse", 2023, Status.Verified, Difficulty.DemonHard, Series.Goofy),
    new Level("Goofnition", 2024, Status.Verified, Difficulty.DemonHard, Series.Goofy),
    new Level("Nice cool kid", 2025, Status.Verified, Difficulty.DemonHard),
    new Level("Bald Machine Original", 2024, Status.Verified, Difficulty.DemonMedium, Series.Misery),
    new Level("Sakupen Goofy", 2023, Status.Verified, Difficulty.DemonMedium, Series.Goofy),
    new Level("Goofstep Rebirth", 2023, Status.Verified, Difficulty.DemonMedium, Series.Goofy),
    new Level("F O R G E T", 2025, Status.Verified, Difficulty.DemonEasy),
    new Level("By the Lake", 2024, Status.Unfinished, Difficulty.DemonEasy),
    new Level("Rev3nger circles", 2023, Status.Unfinished, Difficulty.DemonMedium),
    new Level("2 0 0 0", 2025, Status.Unfinished, Difficulty.DemonMedium),
    new Level("sober processing", 2024, Status.Verified, Difficulty.DemonMedium, Series.Misery),
    new Level("no", 2024, Status.Verified, Difficulty.DemonMedium),
    new Level("Goofstep", 2024, Status.Verified, Difficulty.DemonEasy, Series.Goofy),
    new Level("Nederlands circles", 2024, Status.Verified, Difficulty.DemonEasy),
    new Level("Insanityness", 2024, Status.Verified, Difficulty.DemonEasy),
    new Level("Crack Dimension", 2024, Status.Unfinished, Difficulty.DemonEasy, Series.Collab),
    new Level("CodenameBALDI Boss 2", 2023, Status.Verified, Difficulty.DemonEasy),
    new Level("Hell Land", 2020, Status.Verified, Difficulty.DemonEasy),
    new Level("CodenameBALDI top1", 2023, Status.Verified, Difficulty.DemonEasy),
    new Level("Leos piss u off lvl1", 2024, Status.Unfinished, Difficulty.Insane),
    new Level("Unnutted", 2023, Status.Unfinished, Difficulty.Insane),
    new Level("HERSENSDOOD", 2024, Status.Verified, Difficulty.Insane),
    new Level("Crispy Gauntlet", 2025, Status.Verified, Difficulty.Harder),
    new Level("Plural Path", 2022, Status.Unfinished, Difficulty.Harder),
    new Level("Journey of Light", 2024, Status.Verified, Difficulty.Hard),
    new Level("Trutifruut", 2018, Status.Verified, Difficulty.Hard),
    new Level("All of All", 2018, Status.Verified, Difficulty.Hard),
    new Level("dubbel", 2024, Status.Verified, Difficulty.Normal),
    new Level("WAVE", 2024, Status.Verified, Difficulty.Normal)
];

class LevelVideo {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

var levelVideos = [
    new LevelVideo("Gooferus", "https://www.youtube.com/embed/qO8YBnkp1E8"),
    new LevelVideo("Bald Machine", "https://www.youtube.com/embed/StPwNJ8mOwo"),
    new LevelVideo("Goofy Grief Layout", "https://www.youtube.com/embed/6oOPDU91JYQ"),
    new LevelVideo("Crispy Gauntlet", "https://www.youtube.com/embed/5fBx-zxgV3M")
];

// -----------------------------------------

class Victor {
    constructor(level, name) {
        this.level = level;
        this.name = name;
    }
}


var victors = [
    new Victor("Bald Machine", "Nicec00lkidd"),
    new Victor("Bald Machine", "zsarah"),
    new Victor("Goofy Grief Layout", "Nicec00lkidd"),
    new Victor("Goofy Grief Layout", "zsarah"),
    new Victor("Deranged on Track", "Nicec00lkidd"),
    new Victor("iCircles", "Nicec00lkidd"),
    new Victor("relatable full ver", "Nicec00lkidd"),
    new Victor("Goofy Grief Original", "Nicec00lkidd"),
    new Victor("Gooferhouse", "Nicec00lkidd"),
    new Victor("Gooferhouse", "charlotte"),
    new Victor("Goofnition", "Nicec00lkidd"),
    new Victor("Nice cool kid", "Nicec00lkidd"),
    new Victor("Bald Machine Original", "Nicec00lkidd"),
    new Victor("Sakupen Goofy", "Nicec00lkidd"),
    new Victor("Goofstep Rebirth", "Nicec00lkidd"),
    new Victor("F O R G E T", "Nicec00lkidd"),
    new Victor("sober processing", "Nicec00lkidd"),
    new Victor("no", "Nicec00lkidd"),
    new Victor("Goofstep", "Nicec00lkidd"),
    new Victor("Goofstep", "BlackR3v"),
    new Victor("Nederlands circles", "Nicec00lkidd"),
    new Victor("Insanityness", "Nicec00lkidd"),
    new Victor("Hell Land", "Nicec00lkidd"),
    new Victor("CodenameBALDI top1", "Nicec00lkidd"),
    new Victor("CodenameBALDI Boss 2", "Nicec00lkidd"),
    new Victor("Leos piss u off lvl1", "Nicec00lkidd"),
    new Victor("HERSENSDOOD", "Nicec00lkidd"),
    new Victor("Crispy Gauntlet", "Nicec00lkidd"),
    new Victor("Crispy Gauntlet", "jinxduhh"),
    new Victor("Crispy Gauntlet", "zsarah"),
    new Victor("Crispy Gauntlet", "BlackR3v"),
    new Victor("Crispy Gauntlet", "somisilly"),
    new Victor("Crispy Gauntlet", "Cuzsie"),
    new Victor("Journey of Light", "W9X10"),
    new Victor("Journey of Light", "Nicec00lkidd"),
    new Victor("Journey of Light", "BlackR3v"),
    new Victor("Trutifruut", "Nicec00lkidd"),
    new Victor("All of All", "Nicec00lkidd"),
    new Victor("dubbel", "b"),
    new Victor("dubbel", "Nicec00lkidd"),
    new Victor("WAVE", "b"),
    new Victor("WAVE", "Nicec00lkidd")
]

// -----------------------------------------

let listElement = document.getElementById("list");

function createListLevelElement(level, placement) {
    console.log(`Creating ${level.name}`);

    // Base
    const levelElement = document.createElement("div");
    levelElement.className = "level";
    listElement.appendChild(levelElement);
    levelElement.onclick = function() { showLevelInfo(level); };

    const levelPicture = document.createElement("div");
    levelPicture.className = "level-picture";
    levelPicture.style.backgroundImage = `url("screenshots/${level.name}.png")`;
    const levelInfo = document.createElement("div");
    levelInfo.className = "level-info";
    levelElement.appendChild(levelPicture);
    levelElement.appendChild(levelInfo);

    // Level info name
    const levelInfoName = document.createElement("div");
    levelInfoName.className = "level-info-name";
    levelInfoName.innerHTML = `<h2>#${placement} - ${level.name}</h2><h5>${level.year}</h5>`;
    levelInfo.appendChild(levelInfoName);

    // Level info group
    const levelInfoGroup = document.createElement("div");
    levelInfoGroup.className = "level-info-group";
    levelInfo.appendChild(levelInfoGroup);

    const status = createSectionElement(level.status.id, level.status.label, level.status.color);
    const difficulty = createSectionElement(level.difficulty.id, level.difficulty.label, level.difficulty.color);
    levelInfoGroup.appendChild(status);
    levelInfoGroup.appendChild(difficulty);

    if (level.series) {
        const series = createSectionElement(level.series.id, level.series.label, level.series.color);
        levelInfoGroup.appendChild(series);
    }
}

function createSectionElement(id, label, color) {
    const sectionElement = document.createElement("div");
    sectionElement.classList = "level-info-group-section " + id;
    sectionElement.innerText = label;
    sectionElement.style.color = color;
    return sectionElement;
}

const ListFilter = {
    Verified: "verified",
    Unverified: "unverified",
    Possible: "possible",
    Impossible: "impossible",
    Goofy: "goofy",
    Misery: "misery",
    Collab: "collab",
    NonDemon: "nondemon"
}

function isOnList(level, filter) {
    switch (filter) {
        case "verified":
            return level.status == Status.Verified;
        case "unverified":
            return level.status == Status.Unverified || level.status == Status.Unfinished;
        case "possible":
            return level.difficulty != Difficulty.Impossible;
        case "impossible":
            return level.difficulty == Difficulty.Impossible;
        case "goofy":
            return level.series == Series.Goofy;
        case "misery":
            return level.series == Series.Misery;
        case "collab":
            return level.series == Series.Collab;
        case "nondemon":
            return level.difficulty != Difficulty.DemonEasy && level.difficulty != Difficulty.DemonMedium && level.difficulty != Difficulty.DemonHard && level.difficulty != Difficulty.DemonInsane && level.difficulty != Difficulty.DemonExtreme && level.difficulty != Difficulty.Impossible;
        default:
            return true;
    }
}

function createList(fixedPlacement, filter) {
    let currentPlacement = 0;

    for (i = 0; i < list.length; i++) {
        pass = isOnList(list[i], filter);
        if (pass) {
            if (fixedPlacement)
                createListLevelElement(list[i], i + 1);
            else
            {
                createListLevelElement(list[i], currentPlacement + 1);
                currentPlacement++;
            }
        }
    }
}

// -----------------------------------------

let infoElement = document.getElementById("info");
let infoElementImage = document.getElementById("info-image");
let infoElementName = document.getElementById("info-name");
let infoElementGroup = document.getElementById("info-group");
let infoElementVictorSub = document.getElementById("info-victor-sub");
let infoElementVictors = document.getElementById("info-victor-table");

function showLevelInfo(level) {
    infoElement.style.visibility = "visible";
    infoElementName.innerText = level.name;

    // Image or video
    let videoUrl = "";
    for (i = 0; i < levelVideos.length; i++)
        if (levelVideos[i].name == level.name)
            videoUrl = levelVideos[i].url;
    if (videoUrl != "") {
        infoElementImage.style.backgroundImage = "";
        infoElementImage.innerHTML = `<iframe width="640" height="360" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>></iframe>`;
    }
    else {
        infoElementImage.style.backgroundImage = `url("screenshots/${level.name}.png")`;
        infoElementImage.innerHTML = "";
    }

    // Level groups
    infoElementGroup.innerHTML = "";
    const status = createSectionElement(level.status.id, level.status.label, level.status.color);
    const difficulty = createSectionElement(level.difficulty.id, level.difficulty.label, level.difficulty.color);
    infoElementGroup.appendChild(status);
    infoElementGroup.appendChild(difficulty);

    if (level.series) {
        const series = createSectionElement(level.series.id, level.series.label, level.series.color);
        infoElementGroup.appendChild(series);
    }

    // Victors
    infoElementVictors.innerHTML = "";
    infoElementVictors.style.visibility = "hidden";
    infoElementVictorSub.innerText = "No victors!";
    let victorTotal = 0;

    for (i = 0; i < victors.length; i++) {
        if (victors[i].level == level.name) {
            victorTotal++;
            infoElementVictors.style.visibility = "visible";
            infoElementVictors.innerHTML += `<tr><td>${victors[i].name}</td></tr>`;
            infoElementVictorSub.innerText = `This level has ${victorTotal} ${victorTotal == 1 ? "victor" : "victors"}`;
        }
    }
}

function closeLevelInfo() {
    infoElement.style.visibility = "hidden";
    infoElementVictors.style.visibility = "hidden";
}

// -----------------------------------------

createList(false);