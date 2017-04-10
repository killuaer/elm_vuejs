<template>
	<div class="cartcontrol">
		<transition-group name="move" tag="div" class="move-wrapper">
			<div v-show="food.count > 0" class="cart-decrease" @click="decreaseCart" :key="1">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
			<div v-show="food.count > 0" class="cart-count" :key="2">
				<span class="inner">{{food.count}}</span></div>
		</transition-group>
		<div class="cart-add icon-add_circle" @click="addCart"></div>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart (event) {
				if (!event._constructed) {
					return
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1)
				} else {
					this.food.count++
				}
				this.$emit('add', event.target)
			},
			decreaseCart (event) {
				if (!event._constructed) {
					return
				}
				if (this.food.count) {
					this.food.count--
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size: 0
		.move-wrapper
			display: inline-block
		.cart-decrease
			display: inline-block
			padding: 6px 0px
			transform: translate3D(0,0,0)
			.inner
				display: inline-block
				line-height: 24px
				font-size: 24px
				color: rgb(0, 160, 220)
				transform: rotate(0)
			&.move-enter-active, &.move-leave-active
				transition: all 0.3s linear
				.inner
					transition: all 0.3s linear
			&.move-enter, &.move-leave-active
				opacity: 0
				transform: translate3D(24px,0,0)
				.inner
					transform: rotate(-360deg)
		.cart-count
			display: inline-block
			vertical-align: top
			padding-top: 6px
			font-size: 10px
			line-height: 24px
			text-align: center
			.inner
				display: inline-block
				color: rgb(147, 153, 159)
			&.move-enter-active, &.move-leave-active
				transition: all 0.3s linear
				.inner
					transition: all 0.3s linear
			&.move-enter, &.move-leave-active
				opacity: 0
				transform: translate3D(12px,0,0)
				.inner
					transform: rotate(-360deg)
		.cart-add
			display: inline-block
			padding: 6px 6px 6px 0
			line-height: 24px
			font-size: 24px
			color: rgb(0, 160, 220)
</style>
