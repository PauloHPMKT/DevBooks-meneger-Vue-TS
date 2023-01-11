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
				<div class="size-container">
					<div class="board-info">
						<div class="introduction">
							<span>Plaraforma de gerenciamento de recursos</span>
							<h1>Gerenciador DevBooks</h1>
							<p>
								<strong>Conhece a DevBooks?</strong>
								O DevBooks é uma plataforma / rede social voltada para o público
								bibliófilo. E por aqui é possível conhecer outros usuários,
								indicar livros, comentar e até mesmo salvar na sua estante.
								Legal não é mesmo? Então junte-se a nós!
							</p>
						</div>
						<div class="tag">
							<WeatherWidget />
						</div>
					</div>
				</div>
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
import WeatherWidget from "@/assets/sass/components/Widget/WeatherWidget.vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "Overview",
	components: { CardMessure, Icon, WeatherWidget },
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
