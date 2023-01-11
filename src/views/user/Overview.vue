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
		<div class="table overview_table">
			<section>
				<div class="size-container">conteudo 1</div>
				<div class="size-container">conteudo 2</div>
				<div class="size-container book-card">
					<div class="cover">
						<img
							v-if="
								bookIndex[0].poster.image_cover === ''
									? empty.poster
									: bookIndex[0].poster.image_cover
							"
							:src="
								`${imagePath}/${bookIndex[0].poster.image_cover}` ||
								empty.poster
							"
							:alt="bookIndex[0].title"
						/>
					</div>
					<div class="info-book">
						<h2>Ultimo livro adicionado ao DevBooks</h2>
						<h3>
							{{ bookIndex[0].title }}
						</h3>
						<p>
							{{ bookIndex[0].plot }}
						</p>
						<span>Ver mais <Icon icon="carbon:arrow-right" /></span>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardMessure from "@/components/DashboardComponents/CardMessure.vue";
import { Icon } from "@iconify/vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "Overview",
	components: { CardMessure, Icon },
	data() {
		return {
			imagePath: HOST_URI,
			empty: {
				poster: "img/empty-cover.png",
			},
			quantityUser: this.$store.state.userStore.countUsers,
			quantityBooks: 476,
			quantityComments: 851,
			bookIndex: this.$store.state.bookStore.Books,
		};
	},
});
</script>
