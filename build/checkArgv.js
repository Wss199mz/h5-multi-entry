var argv;
var glob = require('glob');
var path = require('path');
var projectLists = [];
glob.sync('./src/projects/*').forEach(function (entry) {
  projectLists.push(path.basename(entry, path.extname(entry)));
});
try {
  argv = JSON.parse(process.env.npm_config_argv).original;
} catch (ex) {
  argv = process.argv;
}
module.exports = function () {
  if (argv.length < 3) {
    console.log('--------------------------------------------------------------------------------');
    console.log('目前所有项目列表为：');
    console.log(projectLists);
    console.log('启动特定项目请使用命令"npm run start ' + projectLists[0] + '"');
    console.log('--------------------------------------------------------------------------------');
    return false;
  } else {
    var inputName = argv[2].toString();
    if (projectLists.indexOf(inputName) < 0) {
      console.log('--------------------------------------------------------------------------------');
      console.log('输入的项目名似乎有问题。。。检查下字母拼写！');
      console.log('目前所有项目列表为：');
      console.log(projectLists);
      console.log('启动特定项目请使用命令"npm run start ' + projectLists[0] + '"');
      console.log('--------------------------------------------------------------------------------');
	    return false;
    } else {
      process.env.NODE_PROJECT = inputName;
      console.log('正在启动项目：' + inputName);
      return true;
    }
  }
};
