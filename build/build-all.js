var process = require('child_process');
var path = require('path');
var glob = require('glob');
var fs = require('fs');


var projectLists = [];

// 不要构建的项目
var ignoreList = [];

ignoreList = [];

glob.sync('./src/projects/*').forEach(function (entry) {
  if (fs.existsSync(entry + '/index.js')) {
    var projectName = path.basename(entry, path.extname(entry));
    if (ignoreList.indexOf(projectName) !== -1) {
      // 不构建模板
    } else {
      projectLists.push(projectName);
    }
  }
});

console.log('所有打包的项目为：');
console.log('____________________________________________________________________');
console.log(projectLists);
console.log('____________________________________________________________________');

// 分别异步打包
projectLists.forEach(function (projectName) {
  process.exec('node build/build.js ' + projectName, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    } else {
      console.log(stdout);
    }
  });
});
