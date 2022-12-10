<template>
	<div class="card">
		<div class="card__information">
			<p>{{ status }}</p>
			<span class="card--type-font">{{ quantity }}</span>
		</div>
		<div class="card__icon">
			<Icon :icon="`carbon:${ icon_type }`" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "CardMessure",
	components: { Icon },
	props: {
		status: {
			type: String,
		},
		icon_type: {
			type: String,
		},
		quantity: {
			type: Number,
		}
	}
});
</script>
