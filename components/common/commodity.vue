<template>
	<view class="commodity" :style="{'flex-wrap': wrap}">
		<view class="commodity-item" v-for="(item, index) in commodityList" :key="index"
			:style="{'width':width + 'rpx'}" @tap="goDetails(item.id)">
			<image class="commodity-img" :src="item.imgUrl" :style="{'height':height + 'rpx'}"></image>
			<view class="commodity-content">
				<text class="commodity-title" :style="{'font-size': fontSize + 'rpx'}">{{ item.title }}</text>
				<view>
					<text class="new-price">￥{{ item.newPrice }}</text>
					<text class="old-price">￥{{ item.oldPrice }}</text>
				</view>
				<text class="commodity-discount">{{ item.discount }}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'commodity',
		props: {
			commodityList: {
				type: Array,
				require: true
			},
			width: {
				type: Number,
				default: 375
			},
			height: {
				type: Number,
				default: 375
			},
			wrap: {
				type: String,
				default: 'wrap'
			},
			fontSize: {
				type: Number,
				default: 26
			}
		},
		data() {
			return {}
		},
		methods: {
			goDetails(id) {
				uni.navigateTo({
					url: '../../pages/details/details?id=' + id + ''
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.commodity {
		display: flex;

		.commodity-item {
			padding-bottom: 20rpx;

			.commodity-img {
				width: 100%;
			}

			.commodity-content {
				text-align: center;

				.commodity-title {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					color: #333333;
					word-break: break-all;
					padding: 5rpx 20rpx;
				}

				.new-price {
					font-size: 32rpx;
				}

				.old-price {
					text-decoration: line-through;
					font-size: 20rpx;
					color: #999999;
				}

				.commodity-discount {
					border-radius: 4rpx;
					border: 2rpx solid #FF0000;
					padding: 2rpx 10rpx;
					font-size: 20rpx;
					color: #FF0000;
				}
			}

		}
	}
</style>
