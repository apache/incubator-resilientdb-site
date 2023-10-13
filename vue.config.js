module.exports = {
	publicPath:
		process.env.NODE_ENV === "production" ? "/nexres.github.io/" : "/",
	devServer: {
		proxy: {
			'/api': {
			target: 'http://localhost:18000',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
			}
		}
		}
};
