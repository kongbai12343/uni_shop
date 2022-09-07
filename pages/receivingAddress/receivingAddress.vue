<template>
	<view class="address-management">
		<!-- 地址列表 -->
		<view class="address-list" v-for="(item, index) in list" :key="index" @tap="selectAddress(item)">
			<uni-swipe-action>
				<uni-swipe-action-item :right-options="options1" @click="bindClick($event, index)">
					<view class="content-box">
						<image class="box-img" src="../../static/img/icons1.png" mode=""></image>
						<view class="box-info">
							<view class="box-user">{{ item.name }} {{ item.tel }}</view>
							<view class="box-address"><text class="isDefault"
									v-if="item.isDefault">默认</text>{{ item.city + item.detailedAddress }}
							</view>
						</view>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
		</view>
		<view class="operation">
			<button class="add-address" @tap="goAddPath">+新增地址</button>
		</view>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				from: '',
				options1: [{
						text: '编辑',
						style: {
							backgroundColor: '#80daff',
							color: '#ffffff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#EC1D24',
							color: '#ffffff'
						}
					}
				]
			}
		},
		onLoad(e) {
			this.from = e.from
		},
		computed: {
			...mapState({
				list: state => state.address.list
			})
		},
		methods: {
			selectAddress(item) {
				if (this.from == 'orderConfirm') {
					// 页面传递数据
					uni.$emit('selectAddress', item);
					uni.navigateBack({
						delta: 1
					})
				}
			},
			bindClick(e, index) {
				if (e.index == 0) {
					this.editPath(index);
				} else if (e.index == 1) {
					this.delPath(index);
				}
			},
			// 删除地址
			delPath(index) {

			},
			// 修改地址
			editPath(index) {
				let addressInfo = JSON.stringify({
					index,
					item: this.list[index]
				});
				uni.navigateTo({
					url: '../addPath/addPath?date= ' + addressInfo + ''
				});
			},
			// 新增地址
			goAddPath() {
				uni.navigateTo({
					url: '../addPath/addPath'
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.address-management {

		.address-list {
			width: 100%;
			height: 120rpx;

			.content-box {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				width: 100%;
				height: 120rpx;
				padding: 0 20rpx;
				position: relative;
				top: 0;
				left: 0;
				background-color: #fff;
				border: 1px solid #f5f5f5;

				.box-img {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					margin-right: 30rpx;
				}

				.box-info {
					display: flex;
					font-size: 26rpx;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;

					.box-user {
						margin-bottom: 10rpx;
					}

					.box-address {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;

						.isDefault {
							margin-right: 10rpx;
							border-radius: 50%;
							padding: 4rpx;
							text-align: center;
							background-color: #80daff;
						}
					}
				}
			}
		}

		.operation {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 120rpx;
			box-sizing: border-box;
			padding: 0 60rpx;

			.add-address {
				color: #636263;
				background-color: #80daff;
				border-radius: 60rpx;
			}
		}
	}
</style>
