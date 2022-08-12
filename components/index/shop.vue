<template>
	<view class="shop">
		<view class="shop-item" v-for="(item, index) in shopList" :key="index">
			<view class="shop-img">
				<image class="shop-img" :src="item.bigImg" mode=""></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :commodityList="item.data.data" wrap="nowrap" :width="200" :height="200" :fontSize="20">
					</Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '@/components/common/commodity.vue'
	export default {
		name: "shop",
		components: {
			Commodity
		},
		props: {
			shopList: Array,
			default () {
				return [];
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
	.shop-item {
		.shop-img {
			width: 100%;
			height: 350rpx;
		}

		.scroll-content {
			width: 100%;
			white-space: nowrap;

			.scroll-item {
				display: inline-block;
			}
		}
	}
</style>
