<template>
	<view class="shop-car">
		<!-- 自定义导航栏 -->
		<uni-nav-bar title="购物车" :rightText="isShow ? '完成' : '编辑'" fixed="true" statusBar="true"
			@clickRight="clickRight">
		</uni-nav-bar>
		<!-- 商品内容 -->
		<view class="shop-list">
			<view class="shop-list-item" v-for="(item, index) in list" :key="index">
				<label class="radio">
					<radio value="" /><text></text>
				</label>
				<image class="item-img" :src="item.imgUrl"></image>
				<view class="item-content">
					<view class="item-title">{{ item.title }}</view>
					<view class="f-color color-categary">颜色分类:{{ item.color }}</view>
					<view class="price-and-num">
						<view class="price">￥{{ item.price }}</view>
						<view class="num">x{{ item.num }}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部-->
		<view class="car-footer">
			<view class="footer-content">
				<view class="footer-left">
					<label class="radio">
						<radio value="" /><text>全选</text>
					</label>
				</view>
				<view class="footer-right">
					<view class="total">
						<view>合计:<text class="f-active-color">￥0</text></view>
						<view style="font-size: 20rpx;">不含运费</view>
					</view>
					<view class="settlement">
						结算(0)
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				isShow: false
			}
		},
		computed: {
			...mapState({
				list: state => state.car.list
			})
		},
		methods: {
			clickRight() {
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style scoped lang="less">
	.shop-list {
		padding-bottom: 88rpx;
		display: flex;
		// justify-content: center;
		// align-items: center;
		flex-direction: column;

		.shop-list-item {
			display: flex;
			padding: 20rpx;
			margin: 10rpx;
			// justify-content: center;
			align-items: center;
			background: #f7f7f7;

			.item-img {
				width: 200rpx;
				height: 200rpx;
			}

			.item-title {
				font-size: 30rpx;
			}

			.color-categary {
				font-size: 26rpx;
			}

			.price-and-num {
				display: flex;
				margin: 6rpx 10rpx;
				justify-content: space-between;
			}
		}
	}

	.car-footer {
		border-top: 2rpx solid #f7f7f7;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 88rpx;
		background-color: #fff;

		.footer-content {
			padding: 0 0 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.footer-right {
				display: flex;

				.settlement {
					margin-left: 20rpx;
					width: 200rpx;
					line-height: 88rpx;
					text-align: center;
					background-color: #80daff;
					color: #fff;
				}
			}
		}
	}
</style>
