<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item, index) in recommendList" :key="index">
			<image class="img-big" :src="item.bigUrl"></image>
			<view class="img-small">
				<block v-for="(citem, cindex) in item.data" :key="cindex">
					<image class="img-item" :src="citem.imgUrl"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'recommend',
		props: {
			recommendList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
	.recommend {
		padding: 20rpx;

		.recommend-item {
			border-radius: 20rpx;
			border: 2px solid #CCCCCC;
			overflow: hidden;
			margin: 20rpx;
			display: flex;
			flex-direction: column;

			.img-big {
				width: 100%;
				height: 300rpx;
			}

			.img-small {
				flex: 1;
				display: flex;
				width: 100%;
				height: 240rpx;

				.img-item {
					flex: 1;
					height: 240rpx;
				}
			}
		}
	}
</style>
