<template>
	<button class="btn">
		{{ title_btn }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MainButton',
	props: {
		title_btn: {
			type: String,
		},
	},
})
</script>
