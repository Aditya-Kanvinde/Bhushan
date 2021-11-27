const client =  contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "48kiwilqdgw3",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "13WrY_-xKZtGBcjQxMrLHXn0fznVgz15nUVFnQC0sfM"
});
Vue.use(VueLazyload,{
  preLoad: 1.3,
  attempt: 1
})

var app = new Vue({
    el: '#app',
    data()   {
      return {
        res:[],
      }
    },
    created(){
      this.getData();
    },
    methods:{
             getData(){
            client
            .getEntries({
              'content_type':'galleryMagic'
            }).then((responses)=>{
              this.res = responses.items
              console.log(responses.items);;
            })
          
      }
    }
  })

