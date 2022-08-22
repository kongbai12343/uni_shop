export default {
	common: {
		url: 'http://192.168.31.144:3000/api',
		data: {},
		timeout: 5000,
		method: "GET",
		dataType: "json",
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		}
	},
	request(config) {
		uni.showLoading({
			title: '加载中~~~'
		});
		config.url = this.common.url + config.url;
		config.data = config.data || this.common.data;
		config.timeout = config.timeout || this.common.timeout;
		config.method = config.method || this.common.method;
		config.dataType = config.dataType || this.common.dataType;
		config.header = config.header || this.common.header;
		return new Promise((resolve, reject) => {
			uni.request({
				...config,
				success: result => {
					if (result.statusCode != 200) {
						reject(new Error('请求失败~~~'))
					} else {
						setTimeout(function() {
							uni.hideLoading();
						}, 500);
						let data = result.data.data;
						resolve(data);
					}
				}
			})

		});

	}
}
