<template>
	<view class="add-path">
		<view class="path-item">
			<view>收件人：</view>
			<input type="text" value="" placeholder="收件人姓名" v-model="formData.name" />
		</view>
		<view class="path-item">
			<view>手机号：</view>
			<input type="text" value="" placeholder="收件人11位手机号" v-model="formData.tel" />
		</view>
		<view class="path-item">
			<view>所在地区：</view>
			<view @tap="showCityPicker">{{ formData.city }} &gt;</view>
			<mpvueCityPicker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm">
			</mpvueCityPicker>
		</view>
		<view class="path-item">
			<view>详细地址：</view>
			<input type="text" value="" placeholder="详细地址" v-model="formData.detailedAddress" />
		</view>
		<view class="path-item">
			<view>是否设为默认地址：</view>
			<radio-group @change="radioChange">
				<label class="radio">
					<radio :checked="formData.isDefault" />
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import {
		mapActions,
		mapMutations
	} from 'vuex'

	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		name: 'addPath',
		components: {
			mpvueCityPicker,
		},
		data() {
			return {
				formData: {
					name: '',
					tel: '',
					city: '请选择',
					detailedAddress: '',
					isDefault: false
				},
				pickerValueDefault: [0, 0, 1],
				index: -1,
				isEdit: false // 是否修改
			}
		},
		// 接收url传递过来的参数
		onLoad(e) {
			if (e.date) {
				uni.setNavigationBarTitle({
					title: '修改地址'
				});
				let editFormData = JSON.parse(e.date)
				this.formData = editFormData.item;
				this.index = editFormData.index;
				this.isEdit = true;
			}
		},
		onNavigationBarButtonTap(e) {
			if (this.isEdit) { // 修改
				let obj = {
					index: this.index,
					item: this.formData
				}
				this.updateAddress(obj);
			} else { // 新增
				this.createAddress(this.formData);
			}

			if (e.float == 'right') {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		methods: {
			...mapActions('address', ['createAddress', 'updateAddress']),
			radioChange() {
				this.formData.isDefault = !this.formData.isDefault;
			},
			showCityPicker() {
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				this.formData.city = e.label;
			}
		}
	}
</script>

<style scoped lang="less">
	.add-path {
		padding-left: 20rpx;

		.path-item {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 16rpx 0;
			border-bottom: 2rpx solid #CCC;

			&>input {
				flex: 1;
				text-align: left;
			}
		}
	}
</style>
