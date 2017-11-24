<template>
	<div class="container" ref="location">
		<div class="title">
			<div class="title-name">
				<text class="title-name-text">选择城市</text>
			</div>
			<div class="back" @click="locationPop">
				<text class="back-text" :style="{fontFamily:'icon',fontSize:'36px',color:'#666'}">&#xe60d;</text>
			</div>
		</div>
		<scroller class="content">
			<div class="model" v-for="(ele,index) in location" :ref="indexNav[index]">
				<div class="model-title">
					<text :class="['model-title-text',index == '0' ? 'title-visible' : '']">{{indexNav[index]}}</text>
				</div>
				<div class="location-wrapper">
					<div class="location-list" v-for="item in ele" @click="selectLocation(item)">
						<text class="city-name">{{item.city}}</text>
					</div>
				</div>
			</div>
		</scroller>
		<div class="index-nav" v-if="locationShow">
			<div class="nav-info" v-for="ele in indexNav" @click="anchor(ele)">
				<text class="nav-text">{{ele == '热门' ? '热' : ele }}</text>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container{position:fixed;top:0;right:0;bottom:0;left:0;transform: translate(750px,0);background-color:#fff;opacity:0;}
	.title{position: relative;height:100px;}
	.back{position: absolute;left:0;top:0;height:100px;width:100px;justify-content: center;align-items: center;}
	.title-name{height:100px;justify-content: center;align-items: center;}
	.content{flex:1;padding-top:20px;background-color:#efeff4;}
	.model{padding-left:30px;margin-bottom:20px;background-color:#fff;}
	.model-title{height:60px;padding-top:16px;padding-bottom:16px;justify-content: center;align-items:flex-start;border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #efeff4;}
	.model-title-text{color:#333;font-size:28px;}
	.title-visible{color:#ee6e47;}
	.location-wrapper{padding-top:10px;padding-right:20px;padding-bottom:15px;flex-direction: row;flex-wrap: wrap;}
	.location-list{height:64px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;}
	.city-name{color:#333;font-size:28px;}
	.index-nav{position:fixed;right:20px;top:0;bottom:0;justify-content: center;}
	.nav-info{width:24px;height:34px;justify-content: center;align-items: center;}
	.nav-text{color:#ee6e47;font-size: 24px}
</style>

<script>
	let animation = weex.requireModule('animation')
	let dom = weex.requireModule('dom')
	export default {
		props:['location','indexNav','locationShow'],
		data(){
			return {

			}
		},
		created(){
			console.log(this.location,'this.location')
		},
		methods:{
			locationPop(){
				this.$emit('locationPop')
			},
			//点击锚点跳转
            anchor(index){
                dom.scrollToElement(this.$refs[index][0], {offset: 0})
            },
            //选择地区
            selectLocation(ele){
            	this.$emit('selectLocation',ele)
            }
		},
		watch:{
			locationShow(){
				let location = this.$refs.location;
				let number = 750
				let opacity = 0
				if(this.locationShow){
					number = 0
					opacity = 1
				}
				animation.transition(location,{
					styles:{
						transform: 'translate(' + number + 'px, 0)',
						opacity: opacity
					},
					duration:300,
			   		timingFunction: 'ease-in-out',
			        needLayout:false,
			        delay:0,
				},() => {

				})
			}
		}

	}
</script>