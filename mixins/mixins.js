let modal = weex.requireModule('modal')
let dom = weex.requireModule('dom')
let thaw = weex.requireModule('THAW')
let navigator = weex.requireModule('navigator')
let stream = weex.requireModule('stream')
let animation = weex.requireModule('animation')
let storage = weex.requireModule('storage')
export default {
    methods: {
        alert(text) {
            modal.alert({
                message: JSON.stringify(text)
            })
        },
        showConfirm (callback,name="确定删除吗？") {
          console.log('will show confirm')
          modal.confirm({
            message: name,
            duration: 0.3,
            okTitle:'确定',
            cancelTitle:'取消'
          }, value => {
            callback(value);
          })
        },
        //直接跳转m端页面
        goUrl(url) {
            thaw && thaw.goUrl(url)
        },
        //跳入到weex页面
        goWeexUrl(url) {
            navigator.push({
                url: 'http://192.168.1.196:8080/dist/' + url + '.js',
                animated: 'true'
            }, () => {

            })
        },
        //返回上一个页面
        goBack() {
            navigator.pop()
        },
        //请求地址
        ajaxUrl(){
            //本地测试环境
            let localUrl = 'http://z.taoshop.360che.com/v1'
            //开发环境
            let devUrl = 'https://tao-api-test.m.360che.com/v1'
            //线上正式环境
            let url = 'https://tao-api-test.m.360che.com'
            //返回
            return devUrl
        },
        //封装get请求
        getData(url, callback){
            return stream.fetch({
              method: 'GET',
              type: 'json',
              url: this.ajaxUrl() + url
            }, callback)
        },
        postData(url,data,callback){
            return stream.fetch({
                method:'POST',
                url:this.ajaxUrl() + url,
                type:'json',
                body:data
            },callback)
        },
        //显示加载loading
        loadingShow() {
            thaw && thaw.onShowLoading()
        },
        //隐藏加载loading
        loadingHide() {
            thaw && thaw.onHideLoading()
        },
        //返回顶部
        goTop(){
            let goTop = this.$refs.goTop
            dom.scrollToElement(goTop, {offset: 0})
        },
        //获取toKen
        getToKen(){
            this.postData('/weex/token/generate','uid=525895&unique=testunique',ele => {
               this.alert(ele,'eleeleele')
                if(ele.ok && ele.data.status == 0){
                    storage.setItem('toKen',ele.data.data.token)
                }
            })
        }
    },
    created() {
        //iconFont字体
        // dom.addRule('fontFace', {
        //     'fontFamily': 'icon',
        //     'src': "url(\'https://at.alicdn.com/t/font_472583_47m0grdqzaq69a4i.woff\')"
        // });
    },
}