<script setup>
import { computed, reactive, ref, watch } from 'vue'

// 本地存储的键名
const SCORE_LIST_KEY = 'score-list-key'

// 成绩列表
// localStorage.getItem(key): 从本地进行取值
// JSON.parse() 反序列化：因为我们存的时候，序列化了
const scoreList = ref(
	JSON.parse(localStorage.getItem(SCORE_LIST_KEY)) || [
		{ id: 19, subject: '语文', score: 94 },
		{ id: 27, subject: '数学', score: 59 },
		{ id: 12, subject: '英语', score: 92 }
	]
)

// 成绩表单
const scoreForm = reactive({
	subject: '', // 科目
	score: '' // 分数
})

// 添加
const onAdd = () => {
	// 非空检验
	if (!scoreForm.subject || !scoreForm.score) {
		return alert('科目名称或分数不能为空')
	}
	// 给数组新增对象
	scoreList.value.push({
		...scoreForm, // 展开 scoreForm，把 scoreForm 中的键值对全部拿过来，放到新对象中
		id: Date.now() // 时间戳
	})
	// 清空表单
	scoreForm.subject = scoreForm.score = ''
}

// 删除
const onDel = (i) => {
	if (window.confirm('确认删除么?')) {
		scoreList.value.splice(i, 1)
	}
}

// 计算得到总分数
const totalScore = computed(() => {
	return scoreList.value.reduce((prev, item) => prev + item.score, 0)
})

// 计算得到平均分
const avgScore = computed(() => {
	return scoreList.value.length > 0
		? totalScore.value / scoreList.value.length
		: 0
})

watch(
	scoreList,
	(newVal) => {
		// 监视 scoreList 的变化，当 scoreList 变了，
		// 将其最新的值进行序列化后，存储到本地
		// JSON.stringify(): 序列化
		localStorage.setItem(SCORE_LIST_KEY, JSON.stringify(newVal))
	},
	{
		// 开启深度监视
		deep: true
	}
)
</script>

<template>
<div class="score-case">
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>编号</th>
						<th>科目</th>
						<th>成绩</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<!-- 列表渲染 -->
					<tr
						v-for="(item, index) in scoreList"
						:key="item.id">
						<td>{{ index + 1 }}</td>
						<td>{{ item.subject }}</td>
						<td :class="{ red: item.score < 60 }">{{ item.score }}</td>
						<td>
							<a
								href="#"
								@click="onDel(index)"
								>删除</a
							>
						</td>
					</tr>
				</tbody>
				<tbody v-if="scoreList.length === 0">
					<tr>
						<td colspan="5">
							<span class="none">暂无数据</span>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="5">
							<span>总分: {{ totalScore }}</span>
							<span style="margin-left: 50px">平均分: {{ avgScore }}</span>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		<form class="form">
			<div class="form-item">
				<div class="label">科目：</div>
				<div class="input">
					<input
						v-model.trim="scoreForm.subject"
						type="text"
						placeholder="请输入科目" />
				</div>
			</div>
			<div class="form-item">
				<div class="label">分数：</div>
				<div class="input">
					<input
						v-model.number="scoreForm.score"
						type="number"
						placeholder="请输入分数" />
				</div>
			</div>
			<div class="form-item">
				<div class="label"></div>
				<div class="input">
					<button
						class="submit"
						@click.prevent="onAdd">
						添加
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<style>
	.score-case {
		width: 1000px;
		margin: 50px auto;
		display: flex;
	}
	.score-case .table {
		flex: 4;
	}
	.score-case .table table {
		width: 100%;
		border-spacing: 0;
		border-top: 1px solid #ccc;
		border-left: 1px solid #ccc;
	}
	.score-case .table table th {
		background: #f5f5f5;
	}
	.score-case .table table tr:hover td {
		background: #f5f5f5;
	}
	.score-case .table table td,
	.score-case .table table th {
		border-bottom: 1px solid #ccc;
		border-right: 1px solid #ccc;
		text-align: center;
		padding: 10px;
	}
	.score-case .table table td.red,
	.score-case .table table th.red {
		color: red;
	}
	.score-case .table .none {
		height: 100px;
		line-height: 100px;
		color: #999;
	}
	.score-case .form {
		flex: 1;
		padding: 20px;
	}
	.score-case .form .form-item {
		display: flex;
		margin-bottom: 20px;
		align-items: center;
	}
	.score-case .form .form-item .label {
		width: 60px;
		text-align: right;
		font-size: 14px;
	}
	.score-case .form .form-item .input {
		flex: 1;
	}
	.score-case .form .form-item input,
	.score-case .form .form-item select {
		appearance: none;
		outline: none;
		border: 1px solid #ccc;
		width: 200px;
		height: 40px;
		box-sizing: border-box;
		padding: 10px;
		color: #666;
	}
	.score-case .form .form-item input::placeholder {
		color: #666;
	}
	.score-case .form .form-item .cancel,
	.score-case .form .form-item .submit {
		appearance: none;
		outline: none;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 10px;
		margin-right: 10px;
		font-size: 12px;
		background: #ccc;
	}
	.score-case .form .form-item .submit {
		border-color: #069;
		background: #069;
		color: #fff;
	}
</style>
