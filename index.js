
// statics

var fs = require("fs"),
    ejs = require("ejs"),
    clc = require("cli-color");

var ejs_dir = __dirname + "\\_ejs",
    html_dir = __dirname + "\\_html";

//ejsファイル取得
fs.readdirSync(ejs_dir).forEach(function(item){
    if (/\.ejs$/.test(item)){
        //ejsファイル変換処理
        var ejs_file = fs.readFileSync(ejs_dir + "\\" + item, "utf-8");
        var html = ejs.render(ejs_file, {filename: ejs_dir+"\\"+item});
        //html出力
        var html_path = html_dir + "\\" + item.replace(/\.ejs$/i, ".html");
        fs.writeFileSync(html_path, html, {encoding: "utf-8"});

        console.log(clc.blue.bold(ejs_dir+"\\"+item + " -> " + html_path));
    }
});

