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
          <!--<form-login @handleLogin="submitLogin"/>
          <information-popup
            v-if="toastMessageHidden"
            :message_data="message"
           />-->
        </div>
      </div>
    </main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Login',
})
</script>
