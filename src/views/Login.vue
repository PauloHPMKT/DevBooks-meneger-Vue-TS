<template>
	<div class="main-banner">
		<main>
      <div class="box-content">
        <div class="form-container">
          <div class="image-container">
            <img src="/img/logo-livraria-do-dev-removebg.png" alt="logo principal livraria do dev">
          </div>
          <div class="title-content">
            <h1>Gerenciador de plataforma</h1>
            <p>Acesse seu ambiente de gestão da plataforma DevBooks</p>
          </div>
					<FormLogin
						@handleSubmit="login"
					/>
        </div>
      </div>
    </main>
	</div>
</template>

<script lang="ts">
import FormLogin from '@/components/Forms/FormLogin.vue';
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Login",
	components: { FormLogin },
	methods: {
		login(user: object) {
			this.$store.dispatch('userStore/login', user)
		}
	},
})
</script>

<!--https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html-->
