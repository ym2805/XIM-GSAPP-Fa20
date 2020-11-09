const fs = require("fs");

module.exports = {
  /**
   * 
   * @param {String} path file path in dir 
   * @param {Boolean} subpath return subpath boolean
   * @param {Boolean} sort return sorted list
   */
  getFilePaths(path, subpath, sort){
    var files = fs.readdirSync(`./src/${path}`);
    let basePath = subpath === true ? `/${path}/`: ''

    files = files.filter((d)=> d.indexOf('.md') !== -1).map((d)=>{
      if(d === 'README.md'){
        // return `/${path}/`
        return basePath
      }else{
        return basePath + d
        // return `/${path}/` + d;
      }
    })

    if(sort){
      files.sort((a,b) => a - b);
    }
    return files
  }
}