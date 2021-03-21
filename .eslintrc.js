module.exports = {
	"root": true,
	"env": {
		"node": true
	},
	"parserOptions": {
		"parser": "babel-eslint",
		"sourceMap": "module"
	},
	"extends": [
		"plugin:vue/essential",
		"standard"
	],
	"rules": {
		"vue/component-name-in-template-casing": ["error", "kebab-case", {
			"registeredComponentsOnly": false,
			"ignores": []
		}],
		"vue/name-property-casing": ["error", "PascalCase"],
		"vue/prop-name-casing": ["error", "camelCase"],
		"vue/require-prop-types": "error",
		"vue/no-use-v-if-with-v-for": ["error", {
			"allowUsingIterationVar": false
		}],
		"vue/max-attributes-per-line": ["error", {
			"singleline": 4,
			"multiline": {
				"max": 4,
				"allowFirstLine": false
			}
		}],
		"vue/order-in-components": ["error", {
			"order": [
				"el",
				"name",
				"parent",
				"functional",
				["delimiters", "comments"],
				["components", "directives", "filters"],
				"extends",
				"mixins",
				"inheritAttrs",
				"model",
				["props", "propsData"],
				"data",
				"computed",
				"watch",
				"LIFECYCLE_HOOKS",
				"methods",
				["template", "render"],
				"renderError"
			]
		}],
		// allow paren-less arrow functions'
		"vue/require-v-for-key": "error",
		"arrow-parens": 0,
		// allow async-await
		"generator-star-spacing": 0,
		// allow debugger during development
		"no-debugger": 0,
		"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
		"semi": ['error', "always"],//语句强制分号结尾
		"quotes": [0, "single"],//引号类型
		"spaced-comment": 0,//注释风格要不要有空格
		"eqeqeq": [0, "always"],
		"no-tabs": "off",
		"no-mixed-spaces-and-tabs": [0]
	}
}
