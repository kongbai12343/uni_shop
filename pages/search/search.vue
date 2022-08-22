<template>
	<view>
		<splitLines />

		<view class="search-item f-color">
			<view class="search-title">
				<view>最近搜索</view>
				<view class="iconfont icon-lajitong" @tap="del"></view>
			</view>
			<view>
				<template v-if="searchData.length > 0">
					<view class="search-name" v-for="(item, index) in searchData" @tap="toSearchList(index)">{{ item }}</view>
				</template>
				<view class="search-empty" v-else>暂无搜索记录</view>
			</view>
		</view>
		<view class="search-item f-color">
			<view class="search-title">
				<view>热们搜索</view>
			</view>
			<view>
				<view class="search-name">热们搜索1</view>
				<view class="search-name">热们搜索2</view>
			</view>
		</view>
	</view>
</template>

<script>
	import splitLines from '@/components/common/splitLines.vue'
	export default {
		name: 'serach',
		components: {
			splitLines
		},
		data() {
			return {
				keyword: '', // 输入的搜索词
				searchData: [], // 搜索记录
			}
		},
		// 监听原生标题栏搜索输入框输入内容变化事件
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text;
		},
		// 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发
		onNavigationBarSearchInputConfirmed() {
			this.search();
		},
		// 监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e) {
			this.search();
		},
		onLoad() {
			// 读取本地缓存
			uni.getStorage({
				key: "searchData",
				success: (res) => {
					this.searchData = JSON.parse(res.data);
				},
			})
		},
		methods: {
			search() {
				if (this.keyword == '') {
					uni.showToast({
						title: '搜索关键字不能为空!',
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: '../searchList/searchList?keyword=' + this.keyword
					})
				}
				uni.hideKeyboard() // 隐藏软键盘
				this.addSearchWord();
			},
			// 点击某条搜索记录
			toSearchList (index) {
				this.keyword = this.searchData[index];
				this.search();
			},
			addSearchWord() {
				// 判断搜索词是否重复
				let idx = this.searchData.indexOf(this.keyword);
				if (idx != -1) {
					this.searchData.splice(idx, 1);
					if (this.keyword) {
						this.searchData.unshift(this.keyword);
					}
				} else {
					if (this.keyword) {
						this.searchData.unshift(this.keyword);
					}
				}
				// 本地缓存
				uni.setStorage({
					key: "searchData",
					data: JSON.stringify(this.searchData)
				})
			},
			del() {
				uni.showModal({
					title: "提示",
					content: "您确认要清除搜索记录吗？清除后将无法恢复！",
					success: (res) => {
						if (res.confirm) {
							this.searchData = [];
							uni.removeStorageSync('searchData');
						}
					}
				});

			}
		}
	}
</script>

<style scoped lang="less">
	.search-item {
		padding: 20rpx;

		.search-title {
			display: flex;
			justify-content: space-between;
		}

		.search-name {
			display: inline-block;
			padding: 4rpx 24rpx;
			border-radius: 26rpx;
			background-color: #E1E1E1;
			margin: 10rpx;
		}

		.search-empty {
			text-align: center;
		}
	}
</style>
