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
	filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.082));
	padding: 20px;
	background-color: #fff;
	border-radius: 8px;
	height: 150px;
	padding: 20px;

	.box-btn {
		display: flex;
	}
}
</style>
