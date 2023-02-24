const fs = require("fs").promises;

const parse = async (file) => {
    const data = require(file);
    const { context } = data;
    const { versionsDownloads } = context;

    const versions = Object.entries(versionsDownloads).map((entry) => {
        return { version: entry[0], downloads: entry[1] };
    });

    const descending = (a, b) => b.downloads - a.downloads;
    versions.sort(descending);
    const results = versions.slice(0, 6);
    const { package: name } = context;
    const stats = await fs.stat(file);
    const mtime = new Date(stats.mtime).toLocaleDateString();
    const title = `${name} versions - last 7 days (${mtime})`;
    console.log(title);
    console.log(results);

    // read html file
    let html = await fs.readFile("index.html", "utf8");
    html = html.replace(
        /const data = \[.*?\]/,
        `const data = ${JSON.stringify(results)}`
    );
    html = html.replace(/const title = ".*?"/, `const title = "${title}"`);
    // write html files
    await fs.writeFile("index.html", html);
    console.log("done");
};

parse("./example.json");
