const fs = require('fs');
const marked = require('marked')
const cheerio = require('cheerio');
const files = fs.readdirSync('./article')
let jsonData = []
files.forEach(( file) => {
    const articles = fs.readdirSync(`./article/${file}`)
    articles.forEach(article=>{
        const data = fs.readFileSync(`./article/${file}/${article}`, 'utf8');
        const text = marked.parse(data)
        const $ = cheerio.load(text);
        jsonData.push({
            id:article,
            type:file,
            title:$('h1').text(),
            time:$('p.time').text()
        })
    })
})
let content = {
    data: {
        total: 100,
        list:jsonData
    },
    code: 0,
    message: "success"
}
fs.writeFile('./article.json', JSON.stringify(content), function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('文件创建成功');
});


