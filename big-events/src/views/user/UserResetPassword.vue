<script setup>
import { ref } from 'vue'
import { resetPasswordService } from '@/api/user.js'
import { ElMessage } from 'element-plus'

const passwordInfo = ref({
	old_pwd: '',
	new_pwd: '',
	re_pwd: ''
})

const passwordRules = {
	old_pwd: [
		{ required: true, message: '请输入旧密码', trigger: 'blur' }
	],
	new_pwd: [
		{ required: true, message: '请输入新密码', trigger: 'blur' },
		{ min: 6, max: 16, message: '新密码必须为6-16位', trigger: 'blur' }
	],
	re_pwd: [
		{ required: true, message: '请确认新密码', trigger: 'blur' },
		{
			validator: (rule, value, callback) => {
				if (value !== passwordInfo.value.new_pwd) {
					callback(new Error('两次输入的密码不一致'))
				} else {
					callback()
				}
			},
			trigger: 'blur'
		}
	]
}

// 重置密码
const resetPassword = async () => {
	try {
		let result = await resetPasswordService(passwordInfo.value)
		ElMessage.success(result.msg ? result.msg : '密码重置成功')

		// 重置成功后清空密码字段
		passwordInfo.value.old_pwd = ''
		passwordInfo.value.new_pwd = ''
		passwordInfo.value.re_pwd = ''
	} catch (error) {
		ElMessage.error(error.message || '密码重置失败')
	}
}
</script>

<template>
	<el-card class="page-container">
		<template #header>
			<div class="header">
				<span>重置密码</span>
			</div>
		</template>
		<el-row>
			<el-col :span="12">
				<el-form :model="passwordInfo" :rules="passwordRules" label-width="100px" size="large">
					<el-form-item label="旧密码" prop="old_pwd">
						<el-input v-model="passwordInfo.old_pwd" show-password></el-input>
					</el-form-item>
					<el-form-item label="新密码" prop="new_pwd">
						<el-input v-model="passwordInfo.new_pwd" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认新密码" prop="re_pwd">
						<el-input v-model="passwordInfo.re_pwd" show-password></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="resetPassword">提交修改</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</el-card>
</template>
