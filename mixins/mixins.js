let modal = weex.requireModule('modal')
let dom = weex.requireModule('dom')
let stream = weex.requireModule('stream')
export default {
    methods: {
        alert(text) {
            modal.alert({
                message: text
            })
        },
        //请求地址
        ajaxUrl(){
            //本地测试环境
            let localUrl = 'http://z.taoshop.360che.com/v1/'
            //开发环境
            let devUrl = 'https://product.360che.com'
            //线上正式环境
            let url = 'https://tao-api-test.m.360che.com'
            //返回
            return localUrl
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
                url:url,
                headers:{
                    "Content-Type":'application/json'
                },
                type:'json',
                body:JSON.stringify(data)
            },callback)
        }
    },
    created() {
        //iconFont字体
        dom.addRule('fontFace', {
            'fontFamily': 'icon',
            'src': "url(\'https://at.alicdn.com/t/font_472583_4hnenff4r1vmquxr.woff\'),\
                    url('https://at.alicdn.com/t/font_472583_4hnenff4r1vmquxr.ttf')"
        });
    },
}