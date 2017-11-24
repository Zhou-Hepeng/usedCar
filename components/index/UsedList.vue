<template>
  <div class="used-car">
    <list-nav :leftTitle="leftTitle" :rightTitle="rightTitle" :selected="selected" @clickLeft="chooseLeft" @clickRight="chooseRight"></list-nav>
    <div class="used-content">
		<!-- 二手货车论坛 -->
		<div v-if="selected">
	      <div class="list-li" v-for="(item, index) in forum.data" @click="goUrl(item.url)">
	        <text class="list-line" v-if="index !== 0"></text>
	        <text class="li-title">{{item.subject}}</text>
	        <div class="list-content">
	          <text class="li-to-store">{{item.views}}阅读</text>
	          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
	        </div>
	      </div>
	      <div class="more-href" @click="goUrl(forum.moreHref)">
	        <text class="look-more">查看更多内容</text>
	        <text class="li-arrow more-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
	      </div>
		</div>
		<!-- 二手货车咨询 -->
		<div v-if="!selected">
	      <div class="list-li" v-for="(item, index) in news.data" @click="goUrl(item.url)">
	        <text class="list-line" v-if="index !== 0"></text>
	        <text class="li-title">{{item.Title}}</text>
	        <div class="news-content">
	          <text class="li-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
	        </div>
	      </div>
	      <div class="more-href" @click="goUrl(news.moreHref)">
	        <text class="look-more">查看更多咨询</text>
	        <text class="li-arrow more-arrow" :style="{fontFamily:'icon',fontSize:'24px'}">&#xe604;</text>
	      </div>
		</div>
    </div>
  </div>
</template>
<script>
import ListNav from './ListNav.vue';
export default {
	props:['forum','news'],
	components: {
		ListNav
	},
	data: () => ({
		leftTitle: '二手货车论坛',
		rightTitle: '二手货车咨询',
		selected: true,
		// forum: {
		// 	data: [
		// 		{
		// 			subject: '刚回来的车，便宜卖', //帖子标题
		// 			views: '2577', //浏览量
		// 			dateline: '1510452103', // 发布日期时间戳
		// 			url: 'https://bbs.360che.com/thread-2338790-1-1.html'
		// 		},
		// 		{
		// 			subject: '刚回来的车，便宜卖', //帖子标题
		// 			views: '2577', //浏览量
		// 			dateline: '1510452103', // 发布日期时间戳
		// 			url: 'https://bbs.360che.com/thread-2338790-1-1.html'
		// 		},
		// 		{
		// 			subject: '刚回来的车，便宜卖', //帖子标题
		// 			views: '2577', //浏览量
		// 			dateline: '1510452103', // 发布日期时间戳
		// 			url: 'https://bbs.360che.com/thread-2338790-1-1.html'
		// 		},
		// 		{
		// 			subject: '刚回来的车，便宜卖', //帖子标题
		// 			views: '2577', //浏览量
		// 			dateline: '1510452103', // 发布日期时间戳
		// 			url: 'https://bbs.360che.com/thread-2338790-1-1.html'
		// 		},
		// 		{
		// 			subject: '刚回来的车，便宜卖', //帖子标题
		// 			views: '2577', //浏览量
		// 			dateline: '1510452103', // 发布日期时间戳
		// 			url: 'https://bbs.360che.com/thread-2338790-1-1.html'
		// 		}
		// 	],
		// 	moreHref: 'https://bbs.360che.com/m/club-112169-1.html'
		// },
		// news: {
		// 	data: [
		// 		{
		// 			Click: '237', //  点击次数
		// 			Title: '不想在高安买车被套路？你需要看好这五点  ！', // 标题
		// 			Url: 'http://m.360che.com/news/170814/82391.html', // 文章链接地址
		// 			PublishData: '1502924553' // 发布日期时间戳
		// 		},
		// 		{
		// 			Click: '237', //  点击次数
		// 			Title: '不想在高安买车被套路？你需要看好这五点  ！', // 标题
		// 			Url: 'http://m.360che.com/news/170814/82391.html', // 文章链接地址
		// 			PublishData: '1502924553' // 发布日期时间戳
		// 		},
		// 		{
		// 			Click: '237', //  点击次数
		// 			Title: '不想在高安买车被套路？你需要看好这五点  ！', // 标题
		// 			Url: 'http://m.360che.com/news/170814/82391.html', // 文章链接地址
		// 			PublishData: '1502924553' // 发布日期时间戳
		// 		},
		// 		{
		// 			Click: '237', //  点击次数
		// 			Title: '不想在高安买车被套路？你需要看好这五点  ！', // 标题
		// 			Url: 'http://m.360che.com/news/170814/82391.html', // 文章链接地址
		// 			PublishData: '1502924553' // 发布日期时间戳
		// 		}
		// 	],
		// 	moreHref: 'https://bbs.360che.com/m/club-112169-1.html'
		// }
	}),
	methods: {
		chooseLeft() {
			this.selected  = true
		},
		chooseRight() {
			this.selected = false
		},
		moreHref() {
			this.selected
				? weex.requireModule('THAW').goUrl(this.forum.moreHref)
				: weex.requireModule('THAW').goUrl(this.news.moreHref);
		}
	}
};
</script>
<style scoped>
.used-car{
  border-top-width: 30px;
  border-top-style: solid;
  border-top-color: rgb(239, 239, 244);
}
.used-content{
  background-color: #fff;
}
.list-li{
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 88px;
}
.li-title{
  font-size: 28px;
  flex: 1;
  margin-right:30px;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	overflow: hidden;
	lines: 1;
}
.list-content{
  width: 160px;
  max-width: 160px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
.news-content{
  width: 24px;
}
.li-to-store{
  margin-right: 8px;
  font-size: 24px;
  color: #96a6c5;
}
.li-arrow{
  font-family: 'icon';
  font-size: 24px;
  color: #96a6c5;
}
.list-line{
  position: absolute;
  left: 30px;
  top: 0;
  width: 720px;
  height: 2px;
  background-color: #eee;
}
.more-href{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 88px;
}
.look-more{
  font-size: 24px;
  color: #999;
}
.more-arrow{
  margin-left: 8px;
  color: #999;
}
</style>
