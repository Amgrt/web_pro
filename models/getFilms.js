
const path = require("node:path");
const { writeFile } = require("node:fs/promises");
async function getMoviesList() {
  try {
    let response = await fetch(
      "https://m.maizuo.com/gateway?cityId=120100&pageNum=1&pageSize=70&type=1&k=7251228",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"17209289107592677545607169","bc":"120100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    );
    let res = await response.json();
    let films= res.data.films
    console.log(films);
    await writeFile(
      path.resolve(__dirname, "./films.js"),
      `export const films = ${JSON.stringify(films)};`
    );
  } catch (err) {
    console.log("出错了！", err);
  }
}
getMoviesList();



