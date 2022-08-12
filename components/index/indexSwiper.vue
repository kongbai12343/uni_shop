<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(item, index) in swiperList" :key="index">
			<view class="swiper-item">
				<image :src="item.imgUrl" class="swiper-img"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: 'indexSwiper',
		props: {
			swiperList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style scoped lang="less">
	swiper {
		width: 100%;
		height: 400rpx;
	}

	.swiper-img {
		width: 100%;
		height: 400rpx;
	}
</style>
