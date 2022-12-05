<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group name="hello" appear>
			<h1 v-show="isShow" key="1">Hello</h1>
			<h1 v-show="!isShow" key="2">Hello2</h1>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: "Test2",
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
	.hello-enter,
	.hello-leave-to {
		transform: translateX(-100%);
	}
	.hello-enter-to,
	.hello-leave {
		transform: translateX(0);
	}
	.hello-enter-active,
	.hello-leave-active {
		transition: 0.5s linear;
	}
</style>
