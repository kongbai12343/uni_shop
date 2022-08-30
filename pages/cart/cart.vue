<template>
	<view class="shop-car">
		<template v-if="list.length > 0">
			<!-- 自定义导航栏 -->
			<!-- #ifdef MP-WEIXIN -->
			<uni-nav-bar title="购物车" :leftText="isShow ? '完成' : '编辑'" fixed="true" statusBar="true"
				@clickLeft="changeShow">
			</uni-nav-bar>
			<!-- #endif -->

			<!-- #ifdef APP-PLUS || H5 -->
			<uni-nav-bar title="购物车" :rightText="isShow ? '完成' : '编辑'" fixed="true" statusBar="true"
				@clickRight="changeShow">
			</uni-nav-bar>
			<!-- #endif -->
			<!-- 商品内容 -->
			<view class="shop-list">
				<view class="shop-list-item" v-for="(item, index) in list" :key="index">
					<label class="radio" @tap="checkedOne(index)">
						<radio value="" :checked="item.checked" /><text></text>
					</label>
					<image class="item-img" :src="item.imgUrl"></image>
					<view class="item-content">
						<view class="item-title">{{ item.title }}</view>
						<view class="f-color color-categary">颜色分类：{{ item.color }}</view>
						<view class="price-and-num">
							<view class="price">￥{{ item.newPrice }}</view>
							<template v-if="!isShow">
								<view class="num">x{{ item.num }}</view>
							</template>
							<template v-else>
								<uni-number-box :min="1" @change="changeNum($event,index)" v-model="item.num">
								</uni-number-box>
							</template>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部-->
			<view class="car-footer">
				<view class="footer-content">
					<view class="footer-left">
						<label class="radio" @tap="checkedAll">
							<radio value="" :checked="isCheckedAll" /><text>全选</text>
						</label>
					</view>
					<view class="footer-right">
						<template v-if="!isShow">
							<view class="total">
								<view>合计:<text class="f-active-color">￥{{ totalAndCount.totalPrice }}</text></view>
								<view style="font-size: 20rpx;">不含运费</view>
							</view>
							<view class="settlement">
								结算({{totalAndCount.count}})
							</view>
						</template>
						<template v-else>
							<view class="other-operation">
								<view class="collection"><button type="primary">移入收藏夹</button></view>
								<view class="del"><button type="warn" @tap="del">删除</button></view>
							</view>
						</template>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<!-- 自定义导航栏 -->
			<uni-nav-bar title="购物车" statusBar="true" fixed="true"></uni-nav-bar>
			<view class="car-empty">
				<view class="iconfont icon-gouwuche"></view>
				<view class="car-empty-tip">囧~购物车为空~快去购物吧</view>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				isShow: false
			}
		},
		computed: {
			...mapState({
				list: state => state.cart.list
			}),
			...mapGetters('cart', ['isCheckedAll', 'totalAndCount']),
		},
		methods: {
			...mapActions('cart', ['checkedAll', 'checkedOne', 'del']),
			changeShow() {
				this.isShow = !this.isShow;
			},
			changeNum(e, index) {
				this.list[index].num = e;
			}
		}
	}
</script>

<style scoped lang="less">
	.shop-list {
		/* #ifdef APP-PLUS || MP-WEIXIN */
		padding-bottom: 88rpx;
		/* #endif */
		display: flex;
		flex-direction: column;

		.shop-list-item {
			display: flex;
			padding: 20rpx;
			margin: 10rpx;
			// justify-content: center;
			align-items: center;
			background: #f7f7f7;

			.item-img {
				border-radius: 20rpx;
				width: 220rpx;
				height: 200rpx;
			}

			.item-content {
				flex: 1;

				.item-title {
					padding-left: 20rpx;
					font-size: 30rpx;
				}

				.color-categary {
					padding-left: 20rpx;
					margin: 14rpx 0;
					font-size: 26rpx;
				}

				.price-and-num {
					display: flex;
					margin: 6rpx 10rpx;
					justify-content: space-between;
				}
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
		z-index: 999;
		background-color: #fff;

		.footer-content {
			padding: 0 0 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.footer-right {
				display: flex;

				.other-operation {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 88rpx;
					line-height: 88rpx;

					.collection {
						// margin-right: 20rpx;
						padding: 0 20rpx;
						font-size: 26rpx;
						// background-color: #007aff;
						color: #ffffff;
						text-align: center;
					}

					.del {
						font-size: 26rpx;
						color: #ffffff;
						padding: 0 20rpx;
						// background-color: #e64340;
						text-align: center;
					}
				}

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

	.car-empty {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #f7f7f7;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.iconfont {
			font-size: 160rpx
		}
	}
</style>
