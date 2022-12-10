<template>
	<div class="overview">
		<header class="overview__header-messure">
			<CardMessure
				:icon_type="'user-multiple'"
				:status="'Total de usuário'"
				:quantity="quantityUser"
			/>
			<CardMessure
				:icon_type="'book'"
				:status="'Total de livros'"
				:quantity="quantityBooks"
			/>
			<CardMessure
				:icon_type="'add-comment'"
				:status="'Total de comentários'"
				:quantity="quantityComments"
			/>
			<CardMessure
				:icon_type="'wifi'"
				:status="'Total online'"
				:quantity="305"
			/>
		</header>
	</div>
</template>

<script lang="ts">
import CardMessure from '@/components/DashboardComponents/CardMessure.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Overview",
    components: { CardMessure },
		data() {
			return {
				quantityUser: 290,
				quantityBooks: 476,
				quantityComments: 851,
			}
		}
})
</script>
