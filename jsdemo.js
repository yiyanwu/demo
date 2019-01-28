var fs = require('fs')

var dirName = process.argv[2] // �㴫�Ĳ����Ǵӵ� 2 ����ʼ��

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", "")
fs.writeFileSync("css/style.css", "")
fs.writeFileSync("./js/main.js", "")

process.exit(0)