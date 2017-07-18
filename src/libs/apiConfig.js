export default {
    // 网站数据接口
    channel:'/api/channel/list.jspx',
    list:'/api/content/list.jspx',
    content:'/api/content/get.jspx',
    search:'/api/content/search.jspx',

    // 友情链接
    /**
	 * @param siteId 站点ID  非必选
	 * @param ctgId 分类ID  非必选
	 * @param enabled 是否启用  非必选 默认是筛选启用
	 * @param first 开始
	 * @param count 数量
	 */
    friendlink:'/api/friendlink/list.jspx',

    // 信用公式查询接口
    selectSgsInfo: process.env.NODE_ENV === 'development' ? '/selectSgsInfo' : '/selectSgsInfo.jspx',
    selectDetailSgsInfo: process.env.NODE_ENV === 'development' ? '/selectDetailSgsInfo' : '/selectDetailSgsInfo.jspx',

    // 自然法人信用信息查询接口
    selectForFrxx:'/selectForFrxx.jspx',
    selectDetailForFrxx:'/selectDetailForFrxx.jspx',
    selectForzrr:'/selectForzrr.jspx',
    selectDetailForZrr:'/selectDetailForZrr.jspx',
}
