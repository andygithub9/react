const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#1DA57A',
							'@link-color': '#1DA57A',
							'@success-color': '#1DA57A',
							'@warning-color': '#1DA57A',
							'@error-color': '#1DA57A',
							'@font-size-base': '14px',
							'@heading-color': '#eee',
							'@text-color': '#1DA57A',
							'@text-color-secondary': '#1DA57A',
							'@disabled-color': '#1DA57A',
							'@border-radius-base': '2px',
							'@border-color-base': '#1DA57A',
							'@box-shadow-base': `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)`
						},
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
