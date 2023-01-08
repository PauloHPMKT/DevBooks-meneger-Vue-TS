<template>
	<li v-for="user in user_state" :key="user._id">
		<!--testar a implementacao de avatar para o usuario-->
		<div class="table-list-informations">
			<div class="avatar-table">
				<span>A</span>
			</div>
			<div class="table-size">
				<h3>{{ user.name }}</h3>
			</div>
			<div class="table-size">
				<span>{{ user.email }}</span>
			</div>
			<div class="table-size">
				<p>
					Usuário criado em:
					{{ new Date(user.createdAt).toLocaleString().slice(0, 10) }}
				</p>
			</div>
			<div class="icon-menu">
				<Icon icon="carbon:overflow-menu-vertical" />
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "CardUserList",
	components: { Icon },
	props: {
		user_state: {
			type: Object,
		},
	},
});
</script>

<style scoped lang="scss">
.avatar-table {
	width: 10%;
	margin-left: 15px;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		color: #fff;
		font-size: 22px;
		width: 50px;
		height: 50px;
		background-color: rgb(247, 72, 72);
		cursor: pointer;
	}
}
</style>
