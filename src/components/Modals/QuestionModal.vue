<template>
	<div class="box-modal">
		<p>{{ text_field }}</p>
		<div class="box-btn">
			<MainButton :title_btn="'Sim'" @click="$emit('action')" />
			<MainButton :title_btn="'Não'" @click="$emit('closeModal')" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../Buttons/MainButton.vue";

export default defineComponent({
	name: "QuestionModal",
	emits: ["action", "closeModal"],
	components: { MainButton },
	props: {
		text_field: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.box-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 2002;
	transform: translate(-50%, -50%);
	filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.173));
	background-color: #fff;
	border-radius: 8px;
	min-width: 400px;
	height: 150px;
	padding: 30px;
	text-align: center;

	p {
		font-weight: 500;
		margin-bottom: 30px;
	}

	.box-btn {
		display: flex;
		justify-content: center;

		button {
			width: 120px;
			margin: 0 3px;
			border: none;

			&:first-child {
				background: rgb(216, 50, 50);
				color: #fff;
			}

			&:last-child {
				border: 2px solid rgb(216, 50, 50);
				color: rgb(216, 50, 50);
			}
		}
	}
}
</style>
