var express = require('express');
var router = express.Router();

// router.all('*', function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	res.header('Access-Control-Allow-Methods', '*');
// 	res.header('Content-Type', 'application/json;charset=utf-8');
// 	next();
// });


router.get('/api/index_list/1/data/2', (req, res, next) => {
	res.json({
		"code": 0,
		"data": [{
			type: "commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/commodity1.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/commodity2.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/commodity3.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/commodity4.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				}
			]
		}]
	})
})

router.get('/api/index_list/2/data/2', (req, res, next) => {
	res.json({
		"code": 0,
		"data": [{
			type: "commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/commodity1.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/commodity2.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/commodity3.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/commodity4.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				}
			]
		}]
	})
})

router.get('/api/index_list/2/data/3', (req, res, next) => {
	res.json({
		"code": 0,
		"data": [{
			type: "commodityList",
			data: [{
					id: 1,
					imgUrl: "../../static/img/commodity1.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 2,
					imgUrl: "../../static/img/commodity2.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 3,
					imgUrl: "../../static/img/commodity3.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				},
				{
					id: 4,
					imgUrl: "../../static/img/commodity4.jpg",
					title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
					newPrice: "299",
					oldPrice: "659",
					discount: "5.2"
				}
			]
		}]
	})
})


router.get('/api/index_list/3/data/1', (req, res, next) => {
	res.send({
		"code": '0',
		"data": [{
				type: "bannerList",
				data: [{
					imgUrl: '../../static/img/swiper1.jpg'
				}]
			},
			{
				type: "iconList",
				data: [{
						imgUrl: '../../static/img/icons1.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons2.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons3.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons4.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons5.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons6.png',
						title: '服饰内衣'
					},
					{
						imgUrl: '../../static/img/icons7.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons8.png',
						title: '运动户外'
					},
				]
			},
			{
				type: "hotList",
				data: [{
						id: '1',
						imgUrl: '../../static/img/hot1.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					},
					{
						id: '2',
						imgUrl: '../../static/img/hot2.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					},
					{
						id: '3',
						imgUrl: '../../static/img/hot3.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					}
				]
			},
			{
				type: 'shopList',
				data: [{
						bigImg: '../../static/img/shop.jpg',
						data: {
							data: [{
									id: '1',
									imgUrl: '../../static/img/shop1.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '2',
									imgUrl: '../../static/img/shop2.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '3',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '4',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '5',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '6',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								}
							]
						}
					},
					{
						bigImg: '../../static/img/shop.jpg',
						data: {
							data: [{
									id: '1',
									imgUrl: '../../static/img/shop1.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '2',
									imgUrl: '../../static/img/shop2.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '3',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '4',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '5',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '6',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								}
							]
						}
					}
				]
			},
			{
				type: "commodityList",
				data: [{
						id: 1,
						imgUrl: "../../static/img/commodity1.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 2,
						imgUrl: "../../static/img/commodity2.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/commodity3.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 4,
						imgUrl: "../../static/img/commodity4.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					}
				]
			}
		]
	});
});
router.get('/api/index_list/2/data/1', (req, res, next) => {
	res.send({
		"code": '0',
		"data": [{
				type: "bannerList",
				data: [{
					imgUrl: '../../static/img/swiper1.jpg'
				}]
			},
			{
				type: "iconList",
				data: [{
						imgUrl: '../../static/img/icons1.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons2.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons3.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons4.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons5.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons6.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons7.png',
						title: '运动户外'
					},
					{
						imgUrl: '../../static/img/icons8.png',
						title: '运动户外'
					},
				]
			},
			{
				type: "hotList",
				data: [{
						id: '1',
						imgUrl: '../../static/img/hot1.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					},
					{
						id: '2',
						imgUrl: '../../static/img/hot2.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					},
					{
						id: '3',
						imgUrl: '../../static/img/hot3.jpg',
						title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
						oldPrice: 500,
						newPrice: 1299,
						discount: 5.2
					}
				]
			},
			{
				type: 'shopList',
				data: [{
						bigImg: '../../static/img/shop.jpg',
						data: {
							data: [{
									id: '1',
									imgUrl: '../../static/img/shop1.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '2',
									imgUrl: '../../static/img/shop2.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '3',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '4',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '5',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '6',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								}
							]
						}
					},
					{
						bigImg: '../../static/img/shop.jpg',
						data: {
							data: [{
									id: '1',
									imgUrl: '../../static/img/shop1.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '2',
									imgUrl: '../../static/img/shop2.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '3',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '4',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '5',
									imgUrl: '../../static/img/shop3.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								},
								{
									id: '6',
									imgUrl: '../../static/img/shop4.jpg',
									title: '减肥的附件是快乐的发生了打开房间数量的了什么的历史',
									oldPrice: 500,
									newPrice: 1299,
									discount: 5.2
								}
							]
						}
					}
				]
			},
			{
				type: "commodityList",
				data: [{
						id: 1,
						imgUrl: "../../static/img/commodity1.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 2,
						imgUrl: "../../static/img/commodity2.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 3,
						imgUrl: "../../static/img/commodity3.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					},
					{
						id: 4,
						imgUrl: "../../static/img/commodity4.jpg",
						title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
						newPrice: "299",
						oldPrice: "659",
						discount: "5.2"
					}
				]
			}
		]
	});
});

router.get("/api/index_list/data", (req, res, next) => {
	res.send({
		"code": 0,
		"data": {
			topBar: [{
					id: 1,
					name: '推荐'
				},
				{
					id: 2,
					name: '运动户外'
				},
				{
					id: 3,
					name: '服饰内衣'
				},
				{
					id: 4,
					name: '鞋靴箱包'
				},
				{
					id: 5,
					name: '美妆个护'
				},
				{
					id: 6,
					name: '家居数码'
				},
				{
					id: 7,
					name: '食品母婴'
				}
			],
			data: [{
					type: "swiperList",
					data: [{
							imgUrl: '../../static/img/swiper1.jpg'
						},
						{
							imgUrl: '../../static/img/swiper2.jpg'
						},
						{
							imgUrl: '../../static/img/swiper3.jpg'
						}
					]
				},
				{
					type: "recommendList",
					data: [{
							bigUrl: "../../static/img/Children.jpg",
							data: [{
									imgUrl: "../../static/img/Children1.jpg"
								},
								{
									imgUrl: "../../static/img/Children2.jpg"
								},
								{
									imgUrl: "../../static/img/Children3.jpg"
								}
							]
						},
						{
							bigUrl: "../../static/img/Furnishing.jpg",
							data: [{
									imgUrl: "../../static/img/Furnishing1.jpg"
								},
								{
									imgUrl: "../../static/img/Furnishing2.jpg"
								},
								{
									imgUrl: "../../static/img/Furnishing3.jpg"
								}
							]
						}
					]
				},
				{
					type: "commodityList",
					data: [{
							id: 1,
							imgUrl: "../../static/img/commodity1.jpg",
							title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
							newPrice: "299",
							oldPrice: "659",
							discount: "5.2"
						},
						{
							id: 2,
							imgUrl: "../../static/img/commodity2.jpg",
							title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
							newPrice: "299",
							oldPrice: "659",
							discount: "5.2"
						},
						{
							id: 3,
							imgUrl: "../../static/img/commodity3.jpg",
							title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
							newPrice: "299",
							oldPrice: "659",
							discount: "5.2"
						},
						{
							id: 4,
							imgUrl: "../../static/img/commodity4.jpg",
							title: "大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008大姨绒毛大款2020年必须买,不买你就不行了,爆款疯狂GG008",
							newPrice: "299",
							oldPrice: "659",
							discount: "5.2"
						}
					]
				}
			]
		}
	});
});

module.exports = router;
