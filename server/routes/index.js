const express = require('express');
const router = express.Router();
const connection = require('../db/sql.js');

router.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});

router.get('/api/goods/list', function(req, res, next) {
	res.json({
		code: 0,
		data: [{
				id: 1,
				name: "家居家纺",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 2,
				name: "女装",
				data: [{
						name: "裙装",
						list: [{
								id: 1,
								name: "半身裙",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "连衣裙",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "上衣",
						list: [{
								id: 1,
								name: "T恤",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "衬衫",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 3,
				name: "男装",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 4,
				name: "内衣配饰",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 5,
				name: "云顶户外",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 6,
				name: "鞋靴",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 7,
				name: "箱包",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 8,
				name: "食品酒饮",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 9,
				name: "美妆个护",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 10,
				name: "母婴童装",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 11,
				name: "饰品",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 12,
				name: "数码家电",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			},
			{
				id: 13,
				name: "计生用品",
				data: [{
						name: "家纺",
						list: [{
								id: 1,
								name: "毛巾/浴巾",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "枕头",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					},
					{
						name: "生活用品",
						list: [{
								id: 1,
								name: "浴室用品",
								imgUrl: "../../static/img/list1.jpg"
							},
							{
								id: 2,
								name: "洗晒",
								imgUrl: "../../static/img/list1.jpg"
							}
						]
					}
				]
			}
		]
	})
});


router.get('/api/goods/search', (req, res, next) => {
	// 获取前端传递数据
	const [name, orderName] = Object.keys(req.query);
	let titleValue = req.query[name];
	let orderValue = req.query[orderName];
	// 操作数据库
	const statement =
		`SELECT * FROM goods_search WHERE title LIKE '%${titleValue}%' ORDER BY ${orderName} ${orderValue};`;
	connection.query(statement, (error, results, fields) => {
		if (error) throw error;
		res.json({
			"code": 0,
			"data": results
		})
	});
});


router.get('/api/goods/id', (req, res, next) => {
	// 获取前端传递数据
	let id = req.query.id;
	// 操作数据库
	const statement =
		`SELECT * FROM goods_search WHERE id=${id};`;
	connection.query(statement, (error, results, fields) => {
		if (error) throw error;
		res.json({
			"code": 0,
			"data": results
		})
	});
});

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
