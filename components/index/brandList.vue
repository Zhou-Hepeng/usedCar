<template>
	<div class="container">
		<!-- 类型筛选 -->
		<div class="subclass-wrapper">
			<div class="subclass-list" v-for="item in typeList" @click="screen('models',item)">
				<image class="subclass-img" :src="item.src"></image>
				<text class="subclass-text">{{item.name}}</text>
			</div>
		</div>
		<!-- 价格筛选 -->
		<div class="price-list">
			<div class="price" v-for="item in price" @click="screen('price',item)">
				<text class="price-text">{{item.name}}</text>
			</div>
		</div>
		<!-- 品牌筛选 -->
		<div class="brand-wrapper">
			<div class="brand-list" v-for="item in brandList" @click="screen('brand',item)">
				<image :src="item.img" class="brand-img"></image>
				<text class="brand-name">{{item.name}}</text>
			</div>
		</div>
		<div class="more" @click="goWeexUrl('buyCar')">
			<text class="more-text">更多二手货车</text>
			<text :style="{fontFamily:'icon',fontSize:'20px',color:'#f60'}">&#xe604;</text>
		</div>
	</div>
</template>

<style scoped>
	.subclass-wrapper{flex-direction: row;}
	.subclass-list{flex: 1;padding-top: 20px;border-top-width: 1px;border-top-style: solid;border-top-color: #eee;border-right-width: 1px;border-right-style: solid;border-right-color: #eee;justify-content: center;align-items: center;}
	.subclass-img{width:100px;height:48px;margin-top:10px;margin-bottom: 10px;}
	.subclass-text{color: #333;font-size: 24px;margin-bottom: 20px;}
	.price-list{flex-direction: row}
	.price{flex:1;height:76px;justify-content: center;align-items: center;border-top-width: 1px;border-top-style: solid;border-top-color: #eee;border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #eee;border-right-width: 1px;border-right-style: solid;border-right-color: #eee;}
	.price-text{color:#333;font-size:24px;}
	.brand-wrapper{flex-direction: row;flex-wrap: wrap;}
	.brand-list{width:187.5px;padding-top:20px;padding-bottom:20px;justify-content: center;align-items: center;border-bottom-width: 1px;border-bottom-style: solid;border-bottom-color: #eee;border-right-width: 1px;border-right-style: solid;border-right-color: #eee;}
	.brand-img{width:144px;height:96px;}
	.brand-name{color:#333;font-size:24px;}
	.more{height:80px;flex-direction: row;justify-content:center;align-items:center;}
	.more-text{color:#ee6e47;font-size: 24px;margin-right:5px;}
</style>

<script>
	let storage = weex.requireModule('storage')
	export default {
		props:['brandList'],
		data () {
			return {
				typeList:[
					{
						name:'牵引车',
						src:'https://tao.m.360che.com/m/images/qianyin.png',
						id:66
					},
					{
						name:'载货车',
						src:'https://tao.m.360che.com/m/images/zaihuo.png',
						id:64
					},
					{
						name:'自卸车',
						src:'https://tao.m.360che.com/m/images/zixie.png',
						id:63
					},
					{
						name:'轻卡',
						src:'https://tao.m.360che.com/m/images/qingka.png',
						id:65
					}
				],
				price:[
					{
						name:'0-5万',
						id:31
					},
					{
						name:'5-10万',
						id:32
					},
					{
						name:'10-20万',
						id:33
					},
					{
						name:'20-50万',
						id:34
					}
				]
			}
		},
		created(){
			// console.log(this.brandList,'this.brandList')
		},
		methods:{
			screen(type,item){
				let screen = {};
				screen[type] = item;
				storage.setItem('screen',JSON.stringify(screen),ele => {
					if(ele.result == 'success'){
						this.goWeexUrl('buyCar')
					}
				})
			}
		}
	}
</script>