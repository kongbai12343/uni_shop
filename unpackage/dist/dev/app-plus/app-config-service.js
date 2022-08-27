
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/cart/cart","pages/profile/profile","pages/categary/categary","pages/search/search","pages/searchList/searchList","pages/details/details"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#636263","selectedColor":"#636263","spacing":"5px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/tabbar/index.png","selectedIconPath":"./static/tabbar/index_active.png"},{"pagePath":"pages/categary/categary","text":"分类","iconPath":"./static/tabbar/categary.png","selectedIconPath":"./static/tabbar/categary_active.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"./static/tabbar/shop.png","selectedIconPath":"./static/tabbar/shop_active.png"},{"pagePath":"pages/profile/profile","text":"我的","iconPath":"./static/tabbar/profile.png","selectedIconPath":"./static/tabbar/profile_active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo","compilerVersion":"3.5.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#FFFFFF","navigationStyle":"custom","scrollIndicator":"none","titleNView":{"buttons":[{"float":"left","fontSrc":"./common/iconfont.ttf","text":""},{"float":"right","fontSrc":"./common/iconfont.ttf","text":""}]}}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":false,"scrollIndicator":"none","titleNView":false}},{"path":"/pages/profile/profile","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/pages/categary/categary","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","enablePullDownRefresh":false,"navigationStyle":"custom","scrollIndicator":"none","titleNView":{"searchInput":{"align":"left","placeholder":"请输入","disabled":true,"borderRadius":"15px","backgroundColor":"#F7F7F7","placeholderColor":"#B3B3B3"}}}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","enablePullDownRefresh":false,"navigationStyle":"custom","scrollIndicator":"none","titleNView":{"searchInput":{"align":"left","placeholder":"空白~~~","disabled":false,"autoFocus":true,"borderRadius":"15px","backgroundColor":"#F7F7F7","placeholderColor":"#B3B3B3"},"buttons":[{"float":"right","color":"#636263","width":"60px","text":"搜索","fontSize":"16px"}]}}},{"path":"/pages/searchList/searchList","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","enablePullDownRefresh":false,"navigationStyle":"custom","scrollIndicator":"none","titleNView":{"searchInput":{"align":"left","placeholder":"空白~~~","disabled":true,"borderRadius":"15px","backgroundColor":"#F7F7F7","placeholderColor":"#B3B3B3"},"buttons":[{"float":"right","color":"#636263","width":"60px","text":"筛选","fontSize":"16px"}]}}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false,"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"},{"type":"share"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
