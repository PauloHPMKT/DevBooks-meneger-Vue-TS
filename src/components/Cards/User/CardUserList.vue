<template>
	<li v-for="user in user_state" :key="user._id">
		{{ user.name }}
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CardUserList",
	props: {
		user_state: {
			type: Object,
		},
	},
});
</script>
