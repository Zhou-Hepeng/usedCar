<template>
	<div class="container" ref="searchPop">
		<div class="search-bar">
			<input type="search" class="search-input" placeholder="搜索二手车" ref="searchBox"/>
			<div class="cancal" @click="searchPop">
				<text class="cancal-text">取消</text>
			</div>
		</div>
		<div class="hot-search">
			<text class="title">热门搜索</text>
		</div>
		<div class="options">
			<div class="option" v-for="item in searchData" @click="screen(item)">
				<text class="option-text">{{item.word}}</text>
			</div>
		</div>
	</div>
</template>
<script>
	let animation = weex.requireModule('animation')
	export default {
		props:['searchData','searchShow'],
		methods:{
			searchPop(){
				this.$emit('searchPop')
			},
			// 点击条件搜索
			screen(item){
				this.$emit('screen',item)
			}
		},
		watch:{
			searchShow(){
					let searchPop = this.$refs.searchPop;
					let number = 750
					let opacity = 0
					if(this.searchShow){
						number = 0
						opacity = 1
					}else{
						let searchBox = this.$refs.searchBox;
            //搜索框失去焦点
            searchBox.blur();
					}
					animation.transition(searchPop,{
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
<style scoped>
	.container{
		position:fixed;
		top:0;
		right:0;
		bottom:0;
		left:0;
		padding-left:20px;
		background-color:#fff;
		transform: translate(750px,0);
		opacity: 0;
	}
	.search-bar{
		height:100px;
		padding-top: 20px;
		padding-bottom:20px;
		flex-direction: row;
		/*justify-content: space-between;*/
	  border-bottom-width: 1px;
	  border-bottom-style: solid;
	  border-bottom-color: #eee;
	}
	.search-input{
		flex:1;
		padding-left:30px;
		padding-top:15px;
		padding-bottom:15px;
		font-size:28px;
	    border-top-left-radius: 6px;
	    border-top-right-radius: 6px;
	    border-bottom-left-radius: 6px;
	    border-bottom-right-radius: 6px;
		background-color:#f2f2f2;
	}
	.cancal{
		justify-content: center;
		align-items: center;
		padding-left:20px;
		padding-right:20px;
	}
	.cancal-text{
		color:#999;
		font-size:28px;
	}
	.hot-search{
		height:80px;
		justify-content: center;
		align-items: flex-start;
	}
	.title{
    font-size: 28px;
    color: #666;
	}
	.options{
		flex-direction: row;
		flex-wrap: wrap;
	}
	.option{
		margin-right:20px;
		margin-bottom:20px;
		padding-left:20px;
		padding-right:20px;
		padding-top: 10px;
		padding-bottom:10px;
	  border-top-width: 1px;
	  border-top-style: solid;
	  border-top-color: #dedede;
	  border-right-width: 1px;
	  border-right-style: solid;
	  border-right-color: #dedede;
	  border-bottom-width: 1px;
	  border-bottom-style: solid;
	  border-bottom-color: #dedede;
	  border-left-width: 1px;
	  border-left-style: solid;
	  border-left-color: #dedede;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
	}
	.option-text{
    color: #333;
    font-size: 24px;
	}
</style>