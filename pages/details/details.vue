<template>
	<view class="detail">
		<!-- 商品图片轮播 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image :src="shopData.imgUrl" class="swiper-img"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品价格以及名称 -->
		<view class="detail-good">
			<view class="new-price">￥{{ shopData.newPrice }}.<text class="new-price-float">00</text></view>
			<view class="old-price">原价￥{{ shopData.oldPrice }}.00</view>
			<view class="title">{{ shopData.title }}</view>
		</view>
		<!-- 商品详情图片 -->
		<view>
			<view>
				<image class="detail-img" src="../../static/img/commodity1.jpg" style="height: 600rpx;"></image>
			</view>
			<view>
				<image class="detail-img" src="../../static/img/commodity2.jpg" style="height: 600rpx;"></image>
			</view>
			<view>
				<image class="detail-img" src="../../static/img/commodity3.jpg" style="height: 600rpx;"></image>
			</view>
			<view>
				<image class="detail-img" src="../../static/img/commodity4.jpg" style="height: 600rpx;"></image>
			</view>
		</view>
		<Card cardTitle="看了又看" />
		<CommodityList :commodityList="commodityList" />
		<!-- 底部 -->
		<view class="detail-footer">
			<view class="iconfont icon-xiaoxi"></view>
			<view class="iconfont icon-gouwuche"></view>
			<view class="add-shop-car" @tap="showModal">加入购物车</view>
			<view class="purchase" @tap="showModal">立即购买</view>
		</view>

		<!-- 立即购买/加购弹出框 -->
		<view class="purchase-modal" v-show="isShowModal" @touchmove.stop.prevent="">
			<!-- 蒙层 -->
			<view class="overlay" @tap="hideModal"></view>
			<!-- 内容块 -->
			<view class="content" :animation="animationData">
				<view class="info">
					<image class="content-img" src="../../static/img/Children1.jpg"></image>
					<view>
						<view class="f-active-color">￥58.00</view>
						<view>可购33件</view>
						<view>已选:"透明"</view>
					</view>
				</view>
				<view class="num">
					<text>购买数量</text>
					<view class="operation">
						<button size="mini" :disabled="inputValue > 1 ? false : true" @tap="decrement">-</button>
						<input type="number" @input="changeNum" class="input" v-model="inputValue" />
						<button size="mini" @tap="increment">+</button>
					</view>
				</view>
				<view class="submit">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/common/card.vue';
	import CommodityList from '@/components/common/commodityList.vue'

	import http from '@/http/index.js'
	export default {
		data() {
			return {
				isShowModal: false,
				animationData: {},
				inputValue: 1,
				shopData: {},
				commodityList: [{
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
		},
		components: {
			Card,
			CommodityList
		},
		onLoad(e) {
			this.getDataforId(e.id)
		},
		// 修改返回的默认行为
		onBackPress() {
			if (this.isShowModal) {
				this.hideModal();
				return true;
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.type = 'share') {
				uni.share({
					"provider": "weixin",
					"type": 0,
					"title": this.shopData.title,
					"scene": "WXSceneSession",
					"href": "http://192.168.31.144:8081/pages/details/details?id=" + this.shopData.id + "",
					"imageUrl": "",
					success: (res) => {
						uni.showTabBar({
							title: "分享成功"
						})
					},
					fail: err => {
						console.log("fail:" + JSON.stringify(err));
					}
				})
			}
		},
		methods: {
			getDataforId(id) {
				http.request({
					url: '/goods/id',
					data: {
						id
					}
				}).then(res => {
					this.shopData = res[0];
				}).catch(err => {
					uni.showToast({
						title: '请求失败',
						icon: 'error'
					})
				});
			},
			changeNum(e) {
				this.inputValue = e.target.value;
			},
			decrement() {
				this.inputValue -= 1;
			},
			increment() {
				this.inputValue += 1;
			},
			showModal() {
				const animation = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				animation.translateY(400).step();
				this.animationData = animation.export();
				setTimeout(() => {
					this.isShowModal = true;
					animation.translateY(0).step();
					this.animationData = animation.export();
				}, 200);
			},
			hideModal() {
				const animation = uni.createAnimation({
					duration: 200,
					timingFunction: 'ease',
				})
				animation.translateY(400).step();
				this.animationData = animation.export();
				setTimeout(() => {
					animation.translateY(0).step();
					// this.animationData = animation.export();
					this.isShowModal = false;
				}, 200);
			}
		}
	}
</script>

<style scoped lang="less">
	swiper {
		width: 100%;
		height: 700rpx;
	}

	.swiper-img {
		width: 100%;
		height: 700rpx;
	}

	.detail {
		padding-bottom: 88rpx;
	}

	.detail-good {
		margin-top: 40rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;

		.new-price {
			font-size: 34rpx;
			margin: 20rpx 0;
		}

		.new-price-float {
			font-size: 20rpx;
		}

		.old-price {
			margin: 20rpx 0;
			font-size: 26rpx;
			text-decoration: line-through;
		}

		.title {
			margin: 0 40rpx 20rpx;
		}
	}

	.detail-img {
		width: 100%;
	}

	.detail-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 88rpx;
		display: flex;
		background: #fff;
		justify-content: space-around;
		align-items: center;

		.iconfont {
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 60rpx;
			background: #000;
			text-align: center;
			color: #fff;
		}
	}

	.add-shop-car {
		background-color: #000;
		color: #fff;
		border-radius: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		padding: 10rpx 14rpx;
		font-size: 30rpx;
	}

	.purchase {
		background-color: #80daff;
		color: #fff;
		border-radius: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		padding: 10rpx 14rpx;
		font-size: 30rpx;
	}

	.purchase-modal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;

		.overlay {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .3);
		}

		.content {
			position: absolute;
			left: 0rpx;
			bottom: 0;
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			.info {
				display: flex;
				justify-content: flex-start;
			}

			.content-img {
				vertical-align: bottom;
				margin: -40rpx 0 0 10rpx;
				width: 220rpx;
				height: 240rpx;
			}

			.num {
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;

				.operation {
					display: flex;
					margin-right: 30rpx;
					border-radius: 0;

					.input {
						width: 80rpx;
						text-align: center;
						height: 100%;
						background-color: #e9e9e9;
					}
				}
			}

			.submit {
				position: fixed;
				left: 0;
				bottom: 0;
				background-color: #80daff;
				color: #fff;
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
			}
		}
	}
</style>
