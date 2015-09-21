// var rootURL='C:/Users/WLS/Desktop/BootStrap/custom development/';

module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
	//实时监测
	watch: {
		less:{//less样式文件检测
			files: ['dev/less/*.less'],
			tasks: ['less:development'],
			options: {
				spawn: false,														//很重要
				debounceDelay: 250,
			},
		}
	},

	//less编译
	less: {
		development: {
			files: [
				{
					src: "",
					dest: ""
				}
			],
		},
	},

	cssmin: {
  		development: {
		    files: [
				{
					src: "",
					dest: ""
				}
			],
	  	},
	  	options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
	  	},
	},
	
  });
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	//自定义事件
	grunt.event.on('watch', function(action, filepath, target) {
		if(target === 'less'){
			var cssPath = filepath.replace(/less/g, 'css');
			var filename = cssPath.substring(cssPath.lastIndexOf("\\")+1, cssPath.lastIndexOf("."));
			cssPath = cssPath.replace(filename, "style");
			var stylePath = filepath.replace(filename, "style");
			grunt.config.set('less.development.files', [{
				src: stylePath,
				dest: cssPath
			}]);
			// var minCssPath = cssPath.replace('.css', '.min.css');
			// grunt.config.set('cssmin.development.files', [{
			// 	src: cssPath,
			// 	dest: minCssPath
			// }]);
		}
	});
	
	
	
	
	
	//配置默认任务(只输入grunt)
	grunt.registerTask('default', ['watch']);
}












//grunt.log.writeln("End...................................");