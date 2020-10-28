const fs = require('fs');
module.exports = {
  getFilePaths(path){
    var files = fs.readdirSync(`./docs/${path}`);
    files = files.filter((d)=> d.indexOf('.md') !== -1).map((d)=>{
      if(d === 'README.md'){
        return `/${path}/`
      }else{
        return `/${path}/` + d;
      }
    }).sort((a,b) => a - b);
    return files
  }
}