<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear>
			<h1 v-show="isShow">Hello</h1>
		</transition>
		<transition name="hello2" appear>
			<h1 v-show="isShow">Hello2</h1>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "Test",
		data() {
			return {
				isShow: true,
			};
		},
	};
</script>

<style>
	h1 {
		background-color: orange;
	}

	.hello-enter-active {
		animation: identifier 1s;
	}
	.hello-leave-active {
		animation: identifier 1s reverse;
	}

	.hello2-enter-active {
		animation: identifier 1s;
	}
	.hello2-leave-active {
		animation: identifier 1s reverse;
	}

	@keyframes identifier {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0px);
		}
	}
</style>
