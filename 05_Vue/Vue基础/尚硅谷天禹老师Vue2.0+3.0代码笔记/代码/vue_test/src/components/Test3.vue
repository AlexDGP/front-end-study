<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition-group
			name="animate__animated animate__bounce"
			appear
			enter-active-class="animate__swing"
			leave-active-class="animate__backInUp"
		>
			<h1 v-show="isShow" key="1">Hello</h1>
			<!-- <h1 v-show="!isShow" key="2">Hello2</h1> -->
		</transition-group>
	</div>
</template>

<script>
	import "animate.css";
	export default {
		name: "Test3",
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
</style>
