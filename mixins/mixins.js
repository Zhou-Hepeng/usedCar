let modal = weex.requireModule('modal')
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
            let url = 'https://tao-api-test.m.360che.com'
            let devUrl = 'https://product.360che.com'
            return url
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
        // //iconFont字体
        // dom.addRule('fontFace', {
        //     'fontFamily': 'detail',
        //     'src': "url(\'https://at.alicdn.com/t/font_9uxuxvowyib5ipb9.woff\')"
        // });
    },
}