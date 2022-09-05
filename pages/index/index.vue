<template>
	<view class="content">
		<!-- 解决自定义头部微信小程序端兼容性问题 -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="status_bar"
			:style="{'padding-top':height + 'px', 'height': buttonHeight + 'px', 'line-height': buttonHeight + 'px'}">
			<!-- <view class="iconfont icon-fangdajing"></view> -->
			<view>我的首页</view>
			<!-- <view class="iconfont icon-xiaoxi"></view> -->
		</view>
		<!-- #endif -->
		<!-- 顶部滑块 -->
		<scroll-view scroll-x="true" class="scroll-bar" :scroll-into-view="scrollToIndex">
			<view class="scroll-item" v-for="(item, index) in topBar" :key="index" :id="'top'+index">
				<text :class="currentIndex === index ? 'f-active-color': 'f-color'" @tap="getCurrentDate(index)">
					{{ item.name }}
				</text>
			</view>
		</scroll-view>
		<!-- 滑块切换内容 -->
		<swiper @change="changeTopBarContent" :current="currentIndex" :style="{'height': clientHeight + 'px'}">
			<swiper-item v-for="(item, index) in topBarDatas" :key="item.name">
				<scroll-view scroll-y="true" :style="{'height': clientHeight + 'px'}" class="home-data"
					@scrolltolower="loadMore(index)">
					<block v-for="(citem, cindex) in item.data" :key="cindex">
						<IndexSwiper v-if="citem.type == 'swiperList'" :swiperList='citem.data'></IndexSwiper>
						<template v-if="citem.type == 'recommendList'">
							<Recommend :recommendList='citem.data'></Recommend>
							<Card cardTitle="猜你喜欢"></Card>
						</template>
						<Banner v-if="citem.type == 'bannerList'" :bannerList='citem.data'></Banner>
						<template v-if="citem.type == 'iconList'">
							<Icons :iconList='citem.data'></Icons>
							<Card cardTitle="热销爆款"></Card>
						</template>
						<template v-if="citem.type == 'hotList'">
							<Hot :hotList='citem.data'></Hot>
							<Card cardTitle="店铺推荐"></Card>
						</template>
						<template v-if="citem.type == 'shopList'">
							<Shop :shopList='citem.data'></Shop>
							<Card cardTitle="为您推荐"></Card>
						</template>
						<commodityList v-if="citem.type == 'commodityList'" :commodityList='citem.data'></commodityList>
					</block>
					<!-- 上拉加载更多 -->
					<view class="load-more f-color">
						{{ item.loadTips }}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommend from '@/components/index/recommend.vue'
	import Card from '@/components/common/card.vue'
	import CommodityList from '@/components/common/commodityList.vue'
	import Banner from '@/components/index/banner.vue'
	import Icons from '@/components/index/icons.vue'
	import Hot from '@/components/index/hot.vue'
	import Shop from '@/components/index/shop.vue'

	import http from '@/http/index.js'
	export default {
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		data() {
			return {
				height: null, //获取的状态栏高度
				buttonHeight: null,
				currentIndex: 0,
				scrollToIndex: 'top0',
				clientHeight: 0,
				topBar: [],
				topBarDatas: [], // 获取不同tapBar内的数据
				page: 1 // 当前上拉请求数据次数(默认为1：未上拉)
			}
		},
		onLoad() {
			this.init();
		},
		onReady() {
			// #ifdef MP-WEIXIN
			const {
				top,
				height
			} = uni.getMenuButtonBoundingClientRect();
			this.buttonHeight = height;
			// #endif

			// 获取手机状态栏高度
			uni.getSystemInfo({
				success: data => {
					// 可滚动区域高度
					// #ifdef APP-PLUS || H5
					this.clientHeight = data.windowHeight - uni.upx2px(80);
					// #endif

					// #ifdef MP-WEIXIN
					const navBarHeight = height + (top - data.statusBarHeight) * 2
					// this.height = data.statusBarHeight + navBarHeight;
					this.height = top;
					this.clientHeight = data.windowHeight - uni.upx2px(80) - top - height;
					// #endif
				}
			})
		},
		onNavigationBarButtonTap(e) {
			if (e.float == 'left') {
				uni.navigateTo({
					url: '../search/search'
				})
			}
		},
		methods: {
			// 初始化数据
			init() {
				http.request({
					url: '/index_list/data'
				}).then(res => {
					this.topBar = res.topBar;
					this.topBarDatas = this.initData(res);
				}).catch(err => {
					uni.showToast({
						title: '请求失败',
						icon: 'error'
					})
				})
			},
			initData(data) {
				let arr = [];
				this.topBar.map((item, index) => {
					// 不同的topBar对应不同的数据
					const obj = {
						data: [],
						load: 'first',
						loadTips: '上拉加载更多...'
					}
					// 获取首次数据
					if (index == 0) {
						obj.data = data.data;
					}
					arr.push(obj);
				});
				return arr;
			},
			getCurrentDate(index) {
				if (index == this.currentIndex) {
					return;
				}
				this.page = 1;
				this.currentIndex = index;
				this.scrollToIndex = "top" + index;

				// 获取其他数据
				if (this.topBarDatas[index].load === 'first') {
					this.getOtherData(index);
				}
			},
			changeTopBarContent(e) {
				this.getCurrentDate(e.detail.current)
			},
			getOtherData(index, callback) {
				//拿到id
				let id = this.topBar[index].id;

				http.request({
					url: '/index_list/' + id + '/data/' + this.page
				}).then(res => {
					this.page += 1;
					this.topBarDatas[index].data = [...this.topBarDatas[index].data, ...res];
				}).catch(err => {
					uni.showToast({
						title: '请求失败',
						icon: 'error'
					})
				})
				this.topBarDatas[index].load = 'last';
				if (typeof callback == 'function') {
					callback();
				}
			},
			loadMore(index) {
				// 触发上拉加载更多，修改提示文字
				this.topBarDatas[index].loadTips = '加载中~~~~';
				// 发送请求
				this.getOtherData(index, () => {
					// 数据请求完毕,还原提示文字
					this.topBarDatas[index].loadTips = '上拉加载更多...';
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.content {
		.status_bar {
			display: flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
	}

	.scroll-bar {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;

		.scroll-item {
			display: inline-block;
			padding: 20rpx 24rpx;
			font-size: 32rpx;

			.f-active-color {
				padding: 10rpx 0;
				border-bottom: 4rpx solid #49BDFB;
			}

		}
	}

	.load-more {
		text-align: center;
		border-top: 2rpx solid #636263;
		line-height: 60rpx;
		font-size: 28rpx;
	}
</style>
