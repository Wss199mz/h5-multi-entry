// module.exports = {
// 	plugins: {
// 		'autoprefixer': {
// 			overrideBrowserslist: [
// 				"Android 4.1",
// 				"iOS 7.1",
// 				"Chrome > 31",
// 				"ff > 31",
// 				"ie >= 8"
// 			],
// 			// exclude: "/node_modules/i"
// 		},
// 		'postcss-pxtorem': {
// 			rootValue: 37.5,
// 			selectorBlackList  : ['vant'],
// 			propList: ['vant'],
// 		},
// 		'postcss-px2rem-exclude': {
// 			remUnit: 75,
// 			exclude: RegExp(/node_modules/i), /* 或直接 /node_modules/i 不要“”表示是reg表达式*/
// 		}
// 	}
// }

module.exports = {
	"plugins": {
		"postcss-import": {},
		"postcss-url": {},
		"autoprefixer": {},
		'postcss-px2rem-exclude': {
			remUnit: 37.5,
			exclude: RegExp(/node_modules/i), /* 或直接 /node_modules/i 不要“”表示是reg表达式*/
		},
	}
}
