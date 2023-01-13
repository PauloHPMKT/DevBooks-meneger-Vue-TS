<template>
	<div
		class="tag"
		:class="{
			nightActive: nightStage,
			afternoonActive: afternoonStage,
			dayActive: dayStage,
		}"
	>
		<span>{{ day_period }}</span>
		<div class="date_time">{{ date_time }}</div>
		<div class="weather">
			<div>
				<span>{{ api.temp }} °C</span>
				<p>Maranguape</p>
			</div>
			<div class="temp-status">
				<p>{{ api.weather_description }}</p>
				<Icon :icon="`carbon:${api.temp_icon}`" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import weatherApi from "../../services/weatherApi";

export default defineComponent({
	name: "WeatherWidget",
	data() {
		return {
			day_period: "",
			date_time: "",
			api: {
				temp: 0,
				weather_description: "",
				temp_icon: "",
			},
			nightStage: false,
			afternoonStage: false,
			dayStage: false,
		};
	},
	methods: {
		async weatherRequest() {
			await weatherApi.getWeatherResults().then((res) => {
				console.log(res.data);

				this.api.temp = Math.trunc(res.data.main.temp);

				//info cards weather events
				const weatherDescription = res.data.weather[0].main;
				this.api.weather_description = res.data.weather[0].description;
				if (weatherDescription === "Clouds") {
					this.api.temp_icon = "cloud";
				}
			});
		},
		clockTimer() {
			setInterval(() => {
				const data = new Date();
				const currentTime = [
					data.getHours(),
					data.getMinutes(),
					data.getSeconds(),
				]
					.map((valor) => `0${valor}`.slice(-2))
					.join(":");
				this.date_time = currentTime;
				if (currentTime >= "18:00:00" && currentTime <= "23:59:59") {
					this.day_period = "Boa Noite";
					this.nightStage = true;
				} else if (currentTime >= "00:00:00" && currentTime <= "11:59:59") {
					this.day_period = "Bom dia";
					this.dayStage = true;
				} else {
					return (this.day_period = "Boa tarde"), (this.afternoonStage = true);
				}
			}, 1000);
		},
	},
	beforeMount() {
		this.clockTimer();
		this.weatherRequest();
	},
	components: { Icon },
});
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;800;900&display=swap);

.tag {
	width: 40%;
	margin-left: 25px;
	padding: 20px;
	border-radius: 8px;
	color: #fff;
	.date_time {
		font-family: "Roboto", sans-serif;
		font-size: 30px;
	}

	.weather {
		margin-top: 50px;
		display: flex;

		span {
			font-size: 35px;
		}

		.temp-status {
			padding-top: 3px;
			margin-left: 30px;
			display: flex;

			flex-direction: column;
			p {
				margin-bottom: 3px;
				font-size: 16px;
			}

			svg {
				font-size: 37px;
			}
		}
	}
}

.dayActive {
	background-image: url("/img/morning-sky.jpg");
}
.afternoonActive {
	background-image: url("/img/afternoon.jpg");
}
.nightActive {
	background-image: url("/img/night-bg.webp");
}
</style>
