<template>
	<div class="pickLocation">
    <div :class="['shade',shadeShow ? 'visible' : '']" ref="shadeShow" @click="pickLocationShow"></div>
		<div class="location" ref="pickLocation">
			<div class="buttons">
				<div class="cancel" @click="pickLocationShow">
					<text class="cancel-text">取消</text>
				</div>
				<div class="submit" @click="submitLocation">
					<text class="submit-text">确定</text>
				</div>
			</div>
			<div class="content">
				<scroller class="wrapper" @scroll="selectProvince($event,'province')" show-scrollbar="false" offset-accuracy="10" @touchend="provinceEnd('province')">
					<div class="seat"></div>
					<div class="info" v-for="province in cityDate" :ref="province.text"><text>{{province.text}}</text></div>
					<div class="seat" ref="seat"></div>
				</scroller>
				<scroller class="wrapper" @scroll="selectProvince($event,'city')" show-scrollbar="false" offset-accuracy="10" @touchend="provinceEnd('city')">
					<div class="seat" ref="cityTop"></div>
					<div class="info" v-for="city in cityDate[provinceIndex].children" :ref="city.text"><text>{{city.text}}</text></div>
					<div class="seat"></div>
				</scroller>
				<scroller class="wrapper" @scroll="selectProvince($event,'county')" show-scrollbar="false" offset-accuracy="10" @touchend="provinceEnd('county')">
					<div class="seat" ref="countyTop"></div>
					<div class="info" v-for="county in cityDate[provinceIndex].children[cityIndex].children" :ref="county.text"><text>{{county.text}}</text></div>
					<div class="seat"></div>
				</scroller>
				<div class="br"></div>
			</div>
		</div>
	</div>

</template>

<style scoped>
/*内容选择样式*/
.content{
	position:relative;
	height:400px;
	flex-direction: row;
	background-color:#ddd;
}
.wrapper{
	flex:1;
	padding-top: 50px;
	padding-bottom:50px;
}
.info{
	height:100px;
	justify-content: center;
	align-items: center;
}
.seat{
	height:100px;
}
.br{
	position:absolute;
	left:0;
	top:150px;
	right:0;
	height:100px;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: rgba(0,0,0,.1);
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,.1);
}
/*遮罩层*/
.shade{
  position:fixed;
  right:0;
  bottom:0;
  top:0;
  background-color:rgba(0,0,0,.6);
}
.visible{
	left:0;
}
.location{
	position: fixed;
	left:0;
	right:0;
	bottom:0;
	height:480px;
	background-color:#eee;
	/*transform: translateY(500px),*/
}
.buttons{
	height:80px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color:#f5f5f5;
}
.cancel{
	width:92px;
	height:60px;
	margin-left:10px;
	justify-content: center;
	align-items: center;
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: #ccc;
	border-right-width: 1px;
	border-right-style: solid;
	border-right-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: #ccc;
	border-left-width: 1px;
	border-left-style: solid;
	border-left-color: #ccc;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	background-color:#fff;
}
.cancel-text{
	color:#333;
	font-size:20px;
}
.submit{
	width:92px;
	height:60px;
	margin-right:10px;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	background-color:#ee6e47;
}
.submit-text{
	color:#fff;
	font-size: 20px;
}
</style>

<script>

let dom = weex.requireModule('dom')
let animation = weex.requireModule('animation')
import cityDate from '../components/city.data-3.js'
	export default {
		props:['pickShow'],
		data(){
			return {
				//总数据
				cityDate:cityDate,
				//滚动的距离
				deviation:'',
				//省份数据的下标
				provinceIndex:3,
				//城市数据的下标
				cityIndex:0,
				//县数据的下标
				countyIndex:0,
				time:false,
				shadeShow:true,
				locationInfo:{
					province:{
						value: '',
						text: '',
					},
					city:{
						value: '',
						text: '',
					},
					county:{
						value: '',
						text: '',
					}
				},
			}
		},
		methods:{
			selectProvince(event,type){
				clearTimeout(this.time)
				this.deviation = -event.contentOffset.y
				if(this.time){
					this.setProvince(type);
				}
			},
			provinceEnd(type){
				this.time = true
				this.setProvince(type);
			},

			//设置城市
			setProvince(type){
				this.time = setTimeout(() => {
					if(Math.floor((this.deviation + 30)/100) > Math.floor(this.deviation/100)){
						this.deviation += 35
					}
					this[type + 'Index'] = (this.deviation - this.deviation%100)/100
					let name = ''
					let o = {}
					if(type == 'province'){
						let provinceInfo = cityDate[this[type + 'Index']]
						name = this.$refs[provinceInfo.text]
						//重置城市和县的数据
						this.cityIndex = 0;
						this.countyIndex = 0;
						//重置城市和县的偏移量
						let cityTop = this.$refs.cityTop;
		      	dom.scrollToElement(cityTop, {offset: -50})
						let countyTop = this.$refs.countyTop;
		      	dom.scrollToElement(countyTop, {offset: -50})
		      	//存储选择城市信息
		      	o.text = provinceInfo.text
		      	o.value = provinceInfo.value
		      	//清除市 && 县信息
		      	this.locationInfo['city'] = {}
		      	this.locationInfo['county'] = {}
					}else if(type == 'city'){
						let cityInfo = cityDate[this.provinceIndex].children[this.cityIndex]
						name = this.$refs[cityInfo.text]
						//清除县的距离
						this.countyIndex = 0;
						//重置县的偏移量
						let countyTop = this.$refs.countyTop;
		      	dom.scrollToElement(countyTop, {offset: -50})
		      	//存储选择城市信息
		      	o.text = cityInfo.text
		      	o.value = cityInfo.value
		      	//清除县信息
		      	this.locationInfo['county'] = {}
					}else{
						let countyInfo = cityDate[this.provinceIndex].children[this.cityIndex].children[this.countyIndex]
						name = this.$refs[countyInfo.text]
		      	//存储选择城市信息
		      	o.text = countyInfo.text
		      	o.value = countyInfo.value
					}
					//赋值地区信息
					this.locationInfo[type] = o

		      dom.scrollToElement(name[0], {offset: -150})
					clearTimeout(this.time)
					this.time = false
				},500)
			},
			//取消城市选择
			pickLocationShow(){
				this.$emit('pickLocationShow')
			},
			//确定城市选择
			submitLocation(){
				this.$emit('submitLocation',this.locationInfo)
			}
		},
		created(){

		},
		watch:{
			pickShow(){

				//内容
				let pickLocation = this.$refs.pickLocation
				let number = 500
				if(this.pickShow){
					number = 0
					this.shadeShow = true
				}
				animation.transition(pickLocation,{
					styles:{
						transform: `translateY(${number}px)`,
					},
					duration:300,
					timingFunction: 'ease-in-out',
					needLayout:false,
					delay:0,
				},() => {
					if(!this.pickShow){
						this.shadeShow = false
					}
				})
			}
		}
	}
</script>