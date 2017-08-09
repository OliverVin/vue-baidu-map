webpackJsonp([32],{"7GUW":function(_,t,v){var s=v("VU/8")(null,v("XdG0"),null,null);_.exports=s.exports},XdG0:function(_,t){_.exports={render:function(){var _=this,t=_.$createElement;_._self._c;return _._m(0)},staticRenderFns:[function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("section",[v("h1",[_._v("基础")]),_._v(" "),v("h2",[_._v("全局事件")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("事件名")]),_._v(" "),v("th",{staticStyle:{"text-align":"center"}},[_._v("参数")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ready")]),_._v(" "),v("td",{staticStyle:{"text-align":"center"}},[_._v("{BMap, map}")]),_._v(" "),v("td",[_._v("地图组件渲染完毕时触发，返回一个百度地图的核心类和地图实例。百度地图组件是异步加载，请"),v("strong",[_._v("不要")]),_._v("尝试在组件的生命周期中访问 BMap 核心类和 map 实例，如有需要，请在所需组件的 "),v("code",[_._v("ready")]),_._v(" 事件回调函数的参数中获取。")])])])]),_._v(" "),v("h2",[_._v("常量")]),_._v(" "),v("h3",[_._v("ControlAnchor")]),_._v(" "),v("p",[_._v("此常量表示控件的定位。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_ANCHOR_TOP_LEFT")]),_._v(" "),v("td",[_._v("控件将定位到地图的左上角")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_ANCHOR_TOP_RIGHT")]),_._v(" "),v("td",[_._v("控件将定位到地图的右上角")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_ANCHOR_BOTTOM_LEFT")]),_._v(" "),v("td",[_._v("控件将定位到地图的左下角")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_ANCHOR_BOTTOM_RIGHT")]),_._v(" "),v("td",[_._v("控件将定位到地图的右下角")])])])]),_._v(" "),v("h3",[_._v("NavigationControlType")]),_._v(" "),v("p",[_._v("此常量表示平移缩放控件的类型。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_NAVIGATION_CONTROL_LARGE")]),_._v(" "),v("td",[_._v("标准的平移缩放控件（包括平移、缩放按钮和滑块）")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_NAVIGATION_CONTROL_SMALL")]),_._v(" "),v("td",[_._v("仅包含平移和缩放按钮")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_NAVIGATION_CONTROL_PAN")]),_._v(" "),v("td",[_._v("仅包含平移按钮")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_NAVIGATION_CONTROL_ZOOM")]),_._v(" "),v("td",[_._v("仅包含缩放按钮")])])])]),_._v(" "),v("h3",[_._v("MapTypeControlType")]),_._v(" "),v("p",[_._v("此常量表示MapTypeControl的外观样式。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_MAPTYPE_CONTROL_HORIZONTAL")]),_._v(" "),v("td",[_._v("按钮水平方式展示，默认采用此类型展示")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_MAPTYPE_CONTROL_DROPDOWN")]),_._v(" "),v("td",[_._v("按钮呈下拉列表方式展示")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_MAPTYPE_CONTROL_MAP")]),_._v(" "),v("td",[_._v("以图片方式展示类型控件，设置该类型后无法指定maptypes属性")])])])]),_._v(" "),v("h3",[_._v("Animation")]),_._v(" "),v("p",[_._v("此常量表示标注的动画效果。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_ANIMATION_DROP")]),_._v(" "),v("td",[_._v("坠落动画")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_ANIMATION_BOUNCE")]),_._v(" "),v("td",[_._v("跳动动画")])])])]),_._v(" "),v("h3",[_._v("MapType")]),_._v(" "),v("p",[_._v("表示一种地图类型。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_NORMAL_MAP")]),_._v(" "),v("td",[_._v("此地图类型展示普通街道视图")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_PERSPECTIVE_MAP")]),_._v(" "),v("td",[_._v("此地图类型展示透视图像视图")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_SATELLITE_MAP")]),_._v(" "),v("td",[_._v("此地图类型展示卫星视图")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_HYBRID_MAP")]),_._v(" "),v("td",[_._v("此地图类型展示卫星和路网的混合视图")])])])]),_._v(" "),v("h3",[_._v("LengthUnit")]),_._v(" "),v("p",[_._v("常量表示长度单位制。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_UNIT_METRIC")]),_._v(" "),v("td",[_._v("公制单位")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_UNIT_IMPERIAL")]),_._v(" "),v("td",[_._v("英制单位")])])])]),_._v(" "),v("h3",[_._v("HighlightModes")]),_._v(" "),v("p",[_._v("此常量用于描述对象当前状态。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_HIGHLIGHT_STEP")]),_._v(" "),v("td",[_._v("驾车结果展现中点击列表后的展现点步骤")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_HIGHLIGHT_ROUTE")]),_._v(" "),v("td",[_._v("驾车结果展现中点击列表后的展现路段")])])])]),_._v(" "),v("h3",[_._v("TransitPolicy")]),_._v(" "),v("p",[_._v("此常量表示公交方案的策略。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_TRANSIT_POLICY_LEAST_TIME")]),_._v(" "),v("td",[_._v("最少时间")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_TRANSIT_POLICY_LEAST_TRANSFER")]),_._v(" "),v("td",[_._v("最少换乘")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_TRANSIT_POLICY_LEAST_WALKING")]),_._v(" "),v("td",[_._v("最少步行")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_TRANSIT_POLICY_AVOID_SUBWAYS")]),_._v(" "),v("td",[_._v("不乘地铁")])])])]),_._v(" "),v("h3",[_._v("DrivingPolicy")]),_._v(" "),v("p",[_._v("此枚举类型表示驾车方案的策略配置。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("常量")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("BMAP_DRIVING_POLICY_LEAST_TIME")]),_._v(" "),v("td",[_._v("最少时间")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_DRIVING_POLICY_LEAST_DISTANCE")]),_._v(" "),v("td",[_._v("最短距离")])]),_._v(" "),v("tr",[v("td",[_._v("BMAP_DRIVING_POLICY_AVOID_HIGHWAYS")]),_._v(" "),v("td",[_._v("避开高速")])])])]),_._v(" "),v("h2",[_._v("私有类型")]),_._v(" "),v("h3",[_._v("Point")]),_._v(" "),v("p",[_._v("用于描述地图上点的经纬度。")]),_._v(" "),v("h4",[_._v("结构")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("lng")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n  lat: "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n}\n")])]),_._v(" "),v("h3",[_._v("Size")]),_._v(" "),v("p",[_._v("用于描述地图上指定区域的长宽尺寸。")]),_._v(" "),v("h4",[_._v("结构")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("width")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("height")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n}\n")])]),_._v(" "),v("h3",[_._v("Pixel")]),_._v(" "),v("p",[_._v("用于描述地图上某一个像素点的坐标。")]),_._v(" "),v("h4",[_._v("结构")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("x")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("y")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n}\n")])]),_._v(" "),v("h3",[_._v("Bounds")]),_._v(" "),v("p",[_._v("用于描述地图上的一片区域上由西南和东北两个坐标围成的一片区域。")]),_._v(" "),v("h4",[_._v("结构")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("sw")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("ne")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n}\n")])]),_._v(" "),v("h3",[_._v("Icon")]),_._v(" "),v("p",[_._v("声明一个图标。")]),_._v(" "),v("h4",[_._v("结构")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("url")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("String")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("size")]),_._v(": Size,\n  "),v("span",{staticClass:"hljs-attr"},[_._v("opts")]),_._v(": {\n    "),v("span",{staticClass:"hljs-attr"},[_._v("anchor")]),_._v(": Size,\n    "),v("span",{staticClass:"hljs-attr"},[_._v("imageOffset")]),_._v(": Size,\n    "),v("span",{staticClass:"hljs-attr"},[_._v("imageSize")]),_._v(": Size,\n    "),v("span",{staticClass:"hljs-attr"},[_._v("infoWindowAnchor")]),_._v(": Size,\n    "),v("span",{staticClass:"hljs-attr"},[_._v("printImageUrl")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("String")]),_._v("\n  }\n}\n")])]),_._v(" "),v("h3",[_._v("Label")]),_._v(" "),v("p",[_._v("声明一个标签。")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("content")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("String")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("opts")]),_._v(": {\n    "),v("span",{staticClass:"hljs-attr"},[_._v("offset")]),_._v(": Size\n    position: Point,\n    "),v("span",{staticClass:"hljs-attr"},[_._v("enableMassClear")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Boolean")]),_._v("\n  }\n}\n")])]),_._v(" "),v("h3",[_._v("Copyright")]),_._v(" "),v("p",[_._v("声明一条版权信息。")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("id")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v(",\n  content "),v("span",{staticClass:"hljs-built_in"},[_._v("String")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("bounds")]),_._v(": Bounds\n}\n")])]),_._v(" "),v("h3",[_._v("PredictDate")]),_._v(" "),v("p",[_._v("声明一个交通流量的预测日期。")]),_._v(" "),v("pre",[v("code",{staticClass:"language-javascript"},[_._v("{\n  "),v("span",{staticClass:"hljs-attr"},[_._v("weekday")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v(",\n  "),v("span",{staticClass:"hljs-attr"},[_._v("hour")]),_._v(": "),v("span",{staticClass:"hljs-built_in"},[_._v("Number")]),_._v("\n}\n")])]),_._v(" "),v("h2",[_._v("参考")]),_._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html"}},[_._v("百度地图官方文档")])])])])}]}},lnPI:function(_,t,v){_.exports=v("7GUW")}});