<template>
	<ul class="pagination">
		<li class="pagination-item">
			<button>Primeiro</button>
		</li>
		<!-- Visible Buttons Start -->
		<li class="pagination-item">
			<button @click="onClickFirstPage" :disabled="isInFirstPage">
				Anterior
			</button>
		</li>

		<!-- ... -->
		<li v-for="page in pages" :key="page.name" class="pagination-item">
			<button
				type="button"
				@click="onClickPage(page.name)"
				:disabled="page.isDisabled"
				:class="{ active: isPageActive(page.name) }"
			>
				{{ page.name }}
			</button>
		</li>

		<!-- Visible Buttons End -->
		<li class="pagination-item">
			<button @click="onClickPreviousPage" :disabled="isInFirstPage">
				Próximo
			</button>
		</li>
		<li class="pagination-item">
			<button>Último</button>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Pagination",
	props: {
		maxVisibleButton: {
			type: Number,
			required: true,
			default: 3,
		},
		totalPages: {
			type: Number,
			required: true,
		},
		perPage: {
			type: Number,
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
	},

	computed: {
		startPage() {
			//quando estiver na primeira pagina
			if (this.currentPage === 1) {
				return 1;
			}

			//quando estiver na ultima pagina
			if (this.currentPage === this.totalPages) {
				return this.totalPages - this.maxVisibleButton;
			}

			//quando estiver entre
			return this.currentPage - 1;
		},

		pages() {
			const range = [];

			for (
				let index = this.startPage;
				index <=
				Math.min(this.startPage + this.maxVisibleButton - 1, this.totalPages);
				index++
			) {
				range.push({
					name: index,
					isDisabled: index === this.currentPage,
				});
			}

			return range;
		},

		isInFirstPage() {
			return this.currentPage === 1;
		},

		isInLastPage() {
			return this.currentPage === this.totalPages;
		},
	},

	methods: {
		onClickFirstPage() {
			this.$emit("pagechanged", 1);
		},
		onClickPreviousPage() {
			this.$emit("pagechanged", this.currentPage - 1);
		},
		onClickPage(page: number) {
			this.$emit("pagechanged", page);
		},
		onClickNextPage() {
			this.$emit("pagechanged", this.currentPage + 1);
		},
		onClickLastPage() {
			this.$emit("pagechanged", this.totalPages);
		},
		isPageActive(page: number) {
			return this.currentPage === page;
		},
	},
});
</script>

<style scoped lang="scss">
.pagination {
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 10px;

	.pagination-item {
		button {
			padding: 10px;
			cursor: pointer;
			border-radius: 8px;
			border: none;
			color: #009acc;
			font-size: 16px;

			&:active {
				background-color: #343a63;
				color: #ffffff;
			}
		}
	}

	.active {
		background-color: #343a63;
		color: #ffffff;
	}
}
</style>
