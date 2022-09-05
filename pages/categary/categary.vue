<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="status_bar"
			:style="{'padding-top':height + 'px', 'height': buttonHeight + 'px', 'line-height': buttonHeight + 'px'}">
			<view>分类</view>
		</view>
		<!-- #endif -->

		<!-- #ifdef APP -->
		<SplitLines />
		<!-- #endif -->
		<view class="categary">
			<!-- 左侧 -->
			<scroll-view scroll-y="true" class="left-list" :style="{height: clientHeight + 'px'}">
				<view v-for="(item, index) in leftList" :key="index" class="left-list-item">
					<view class="left-item-name" :class="currentIndex == index ? 'left-item-name-active' : ''"
						@tap="changeLeftBar(index, item.id)">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y="true" class="right-list" :style="{height: clientHeight + 'px'}">
				<view class="right-list-item" v-for="(item, index) in rightList" :key="index">
					<block v-for="(iitem, iidex) in item" :key="iidex">
						<view class="right-list-item-title">{{ iitem.name }}</view>
						<view class="right-list-item-content">
							<view class="right-content-item" v-for="(k, i) in iitem.list" :key="i">
								<image :src="k.imgUrl" alt="" class="right-content-img"></image>
								<view class="right-content-item-name">{{ k.name }}</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import SplitLines from '@/components/common/splitLines.vue'

	import http from '@/http/index.js'
	export default {
		name: 'categary',
		components: {
			SplitLines
		},
		data() {
			return {
				clientHeight: null,
				buttonHeight: null, // 胶囊按钮高度
				height: null, // 状态栏高度
				currentIndex: 0,
				leftList: [], // 左侧
				rightList: [] // 右侧
			}
		},
		onLoad() {
			this.getData();
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
					// #ifdef APP-PLUS
					this.clientHeight = data.windowHeight;
					// #endif
					// #ifdef MP-WEIXIN
					const navBarHeight = height + (top - data.statusBarHeight) * 2
					// 将其赋值给this
					// this.height = data.statusBarHeight + navBarHeight;
					this.height = top;
					this.clientHeight = data.windowHeight - top - height;
					// #endif
				}
			})
		},
		// 监听原生标题栏搜索输入框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		methods: {
			getData(id) {
				if (id == this.currentIndex + 1) return;
				http.request({
					url: '/goods/list'
				}).then(res => {
					res.map(item => {
						// 如果存在，不重复添加数据(有BUG，待解决)
						this.leftList.push({
							id: item.id,
							name: item.name
						});
						// 根据id 获取右侧数据
						if (item.id == (this.currentIndex + 1)) {
							this.rightList = [];
							this.rightList.push(item.data);
						}
					})
				}).catch(err => {
					uni.showToast({
						title: '失败',
						icon: 'error'
					})
				})
			},
			changeLeftBar(index, id) {
				this.getData(id);
				this.currentIndex = index;
			},
		}
	}
</script>

<style scoped lang="less">
	.categary {
		display: flex;

		.left-list {
			box-sizing: border-box;
			flex: 1;

			.left-list-item {
				border-bottom: 2rpx solid #fff;
				background-color: #f7f7f7;
				font-size: 30rpx;
				font-weight: bold;

				.left-item-name {
					text-align: center;
					padding: 30rpx 6rpx;
				}

				.left-item-name-active {
					border-left: 8rpx solid #49BDFB;
					background: #fff;
				}
			}
		}

		.right-list {
			flex: 3;

			.right-list-item {
				padding: 30rpx 0 0 30rpx;

				.right-list-item-title {
					font-size: 30rpx;
					font-weight: bold;
				}

				.right-list-item-content {
					display: flex;
					flex-wrap: wrap;


					.right-content-item {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						padding: 30rpx 10rpx;

						.right-content-img {
							width: 150rpx;
							height: 120rpx;
						}

						.right-content-item-name {
							font-size: 26rpx;
							color: #333333;
						}
					}
				}
			}


		}
	}
</style>
