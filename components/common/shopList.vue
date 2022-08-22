<template>
	<view>
		<view class="search-criteria f-color">
			<view class="search-criteria-item" v-for="(item, index) in tobBar" :key="item.name" @tap="changeTob(index)">
				<view :class="currentIndex == index ? 'active' : ''">{{ item.name }}</view>
				<view class="sort">
					<view class="iconfont icon-shangjiantou up" :class="item.status == 1 ? 'active' : ''"></view>
					<view class="iconfont icon-xiajiantou down" :class="item.status == 2 ? 'active' : ''"></view>
				</view>
			</view>
		</view>
		<splitLines />
		<commodityList :commodityList="commodityList"></commodityList>
	</view>
</template>

<script>
	import splitLines from '@/components/common/splitLines.vue'
	import commodityList from './commodityList.vue'
	
	import http from '@/http/index.js'
	export default {
		name: 'shopList',
		components: {
			splitLines,
			commodityList
		},
		props: {
			keyword: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				currentIndex: 0,
				tobBar: [{
						name: '价格',
						value: 'newPrice',
						status: 1
					},
					{
						name: '折扣',
						value: 'discount',
						status: 0
					},
					{
						name: '品牌',
						status: 0
					},
				],
				commodityList: []
			}
		},
		watch: {
			
		},
		computed: {
			orderBy () {
				let obj = this.tobBar[this.currentIndex]; // 拿到当前对象
				let val = obj.status == 1 ? 'asc' : 'desc';
				return {
					[obj.value]: val
				}
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData () {
				http.request({
					url: '/goods/search',
					data: {
						title: this.keyword,
						...this.orderBy
					}
				}).then(res => {
					this.commodityList = res;
				}).catch(err => {
					uni.showToast({
						title: '请求失败',
						icon: 'error'
					})
				})
			},
			changeTob(index) {
				// 排序，调用接口
				this.getData();
				let idx = this.currentIndex;
				let item = this.tobBar[idx]; // 拿到切换前选中的项
				if (this.currentIndex == index) {
					return item.status = item.status == 1 ? 2 : 1;
				}
				let newItem = this.tobBar[index]; // 拿到切换后选中的项
				item.status = 0; // 将切换前的数据状态滞0
				this.currentIndex = index;
				newItem.status = 1; // 将切换后的数据状态滞1
				
			}
		}
	}
</script>

<style scoped lang="less">
	.search-criteria {
		display: flex;
		align-items: center;
		justify-content: space-around;

		.search-criteria-item {
			margin: 10rpx 0;
			height: 60rpx;
			line-height: 60rpx;
			display: flex;

			.active {
				color: #49BDFB;
			}

			.sort {
				margin-left: 10rpx;

				.iconfont {
					width: 16rpx;
					height: 8rpx;
				}

				.up {
					margin-bottom: 4rpx;
				}
			}
		}
	}
</style>
