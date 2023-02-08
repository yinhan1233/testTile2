//交通流量
var data = {
    id: 'multipleBarsLines',
    legendBar: ['出租车', '私家车'],
    symbol: ' ', //数值是否带百分号        --默认为空 ''
    legendLine: ['环比', '同比'],
    xAxis: ['2014', '2015', '2016', '2017', '2018',
        '2019'
    ],
    yAxis: [
        [8, 10, 10, 11, 4, 13],
        [10, 7, 8, 8, 7, 9]
    ],
    lines: [
        [10, 10, 9, 11, 7, 4],
        [6, 12, 12, 2, 4, 4]
    ],
    barColor: ['#009883', '#e66922'], //柱子颜色 必填参数
    lineColor: ['#fd6665', '#fba73b'], // 折线颜色

}

var myData = (function test() {
    let yAxis = data.yAxis || []
    let lines = data.lines || []
    let legendBar = data.legendBar || []
    let legendLine = data.legendLine || []
    var symbol = data.symbol || ' '
    let seriesArr = []
    let legendArr = []
    yAxis && yAxis.forEach((item, index) => {
        legendArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index]
        })
        seriesArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index],
            type: 'bar',
            barGap: '0.5px',
            data: item,
            barWidth: data.barWidth || 12,
            label: {
                normal: {
                    show: false,
                    formatter: '{c}' + symbol,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        textAlign: 'left',
                        fontSize: 11,
                    },
                },
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius:0,
                    borderWidth:1,
                    borderColor:'#ddd',
                    color: data.barColor[index]
                },
            }
        })
    })

    lines && lines.forEach((item, index) => {
        legendArr.push({
            name: legendLine && legendLine.length > 0 && legendLine[index]
        })
        seriesArr.push({
            name: legendLine && legendLine.length > 0 && legendLine[index],
            type: 'line',
            data: item,
            itemStyle: {
                normal: {
                    color: data.lineColor[index],
                    lineStyle: {
                        width: 2,//折线宽度
                        type: 'solid',
                    }
                }
            },
            label: {
                normal: {
                    show: false, //折线上方label控制显示隐藏
                    position: 'top',
                }
            },
            symbol: 'circle',
            symbolSize: 5
        })
    })

    return {
        seriesArr,
        legendArr
    }
})()
option1 = {
  
 grid: {
        left: '0',
		top: '30',
        right: '0',
        bottom: '10',
        containLabel: true
    },
        legend: {
            top: 0,
            textStyle: {
            color: "#fff",
        },
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ["01/01","07/01","14/01","21/01","28/01","04/02"],
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
            },
            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                    width: 1,
                    type: 'dotted',
                },
            },
            axisLabel: {//X轴文字
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
 color: 'rgba(255,255,255,.1)',

                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [{

            name: '出租车',

            type: 'bar',

            data: [3, 7, 4, 9, 3, 5],

            barWidth: 15,
	
            barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

            itemStyle: {

                normal: {
					barBorderRadius: 0,
                    color: "#188df0",

                }

            },

        }, {

            name: '私家车',

            type: 'bar',
            data: [6, 2, 5, 2, 5, 6],
            barWidth: 15, //柱图宽度
			barGap: 0.5,
            itemStyle: {

                normal: { //设置颜色的渐变
					barBorderRadius: 0,
                    color: "#58f2f1",

                }

            },

        }]

    };
//////////////////////交通流量 end

//交通工具流量
option2 = {

    tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985'
			}
		}
	},
	grid: {
        top : '10%',
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [
		{
			type: 'category',
			minorTick: {
			  show: false,
			  splitNumber: 3
			},
			axisLabel: {
				textStyle: {
					color: '#fff'
				},
			},
			axisLine: {
				show: true,
				lineStyle: {
                    width:2,
                    color: '#188df0'  
                }
			},
			axisTick: {
                show: false
            },
			boundaryGap: false,
			data: ['01/01', '03/01', '05/01', '07/01', '09/01', '11/01', '13/01','15/01','17/01','19/01','21/01','23/01','25/01','27/01']
		},
	    {
			type: 'category',
			minorTick: {
			  show: false,
			  splitNumber: 3
			},
			axisLabel: {
			    show: false,
				textStyle: {
					color: '#fff'
				},
			},
			axisLine: {
				show: false,
				lineStyle: {
                    width:2,
                    color: '#188df0'  
                }
			},
			axisTick: {
                show: false
            },
			boundaryGap: false,
			data: ['01/01', '03/01', '05/01', '07/01', '09/01', '11/01', '13/01','15/01','17/01','19/01','21/01','23/01','25/01','27/01']
		},
	],
	yAxis: [
		{
			type: 'value',
			axisLine: {
				show: false,
				
			},
			axisLabel: {
				margin: 20,
				color: '#fff'
			},
			textStyle: {
				color: '#fff'
			},
			axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dotted",
                    color: "rgba(67,67,67,0.7)",
                },
            },
		}
	],
	series: [
	  
		{
			type: 'line',
			name: '车流量',
			symbol: "none",
			stack: '总量',
			itemStyle: {
				color: '#188df0'
			},
			label: {
				normal: {
					show: false,
					position: 'top'
				}
			},
			areaStyle: {
				  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#188df0'
				}, {
					offset: 1,
					color: '#188df01a'
				}])
			},
			data: [600, 896, 456, 934, 656, 741, 345,756,458,800,650,900,543,1100]
		},
		{
            name: '车流量',
            type: 'line',
            smooth: false,
            symbol:'none',
            itemStyle: {
                color: '#52e7e8',
            },
            lineStyle: {
                    type: "dotted",
                    
            },
            label: {
                normal:{
                    show: false
                }
            },
            data: [500, 300, 350, 600, 500, 700,600, 900, 500, 670, 908, 670,980,1000]
        }
	]
};
//////////////////////交通工具流量 end

// //本月发生事件1
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "少年",
        "value": 30
    },
    {
        "name": "青年",
        "value": 30
    },
    {
        "name": "中年",
        "value": 42
    },
    {
        "name": "中老年",
        "value": 50
    },
    {
        "name": "老年",
        "value": 34
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "第一季度",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#188df0',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: '#188df0'
                }, {
                    offset: 1,
                    color: '#188df01a'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件1 end
//本月发生事件2
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "少年",
        "value": 15
    },
    {
        "name": "青年",
        "value": 14
    },
    {
        "name": "中年",
        "value": 23
    },
    {
        "name": "中老年",
        "value": 2
    },
    {
        "name": "老年",
        "value": 50
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "第二季度",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#188df0',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: '#188df0'
                }, {
                    offset: 1,
                    color: '#188df01a'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}


//////////////////////本月发生事件2 end



//收费站收费排行1
// var spirit = '../images.ksh45.png';

// var maxData = 200;
var data = [220, 182, 191, 234, 290, 330, 310,500];
var yMax = 50;
var dataShadow = [];
for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option4 = {

grid: {
    top : '10%',
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
},
xAxis: {
    data:['餐厅', '服饰', '家居', '服饰', '娱乐', '饮品','饰品','超市'],
    axisLabel: {
        inside: false,
        show: true,
        rotate: -35,
        margin: 15,
        textStyle: {
            color: '#999'
        }
    },
    axisTick: {
        show: false
    },
    axisLine: {
        show: false
    },
    z: 10
},
yAxis: {
    axisLine: {
        show: true
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        margin: 15,
        textStyle: {
            color: '#999'
        }
    },
    splitLine: {
        show: false
    },
    nameGap:80,
},
dataZoom: [
    {
        type: 'inside'
    }
],
series: [
    { // For shadow
        type: 'bar',
        itemStyle: {
            color: 'rgba(0,0,0,0.05)'
        },
        barGap: '-100%',
        barCategoryGap: '70%',
        data: dataShadow,
        animation: false
    },
    {
        type: 'bar',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#188df0'},
                    {offset: 0.5, color: '#188df0'},
                    {offset: 1, color: '#52e7e8'}
                ]
            )
        },
        data:[22, 35, 19, 23, 15, 31, 10,2],
    }
]
};

//////////////////////今日实时收费 end
option9={
    grid : {
        top : '10%',
        left : '3%',   //组件离容器左侧的距离
        right : '4%',
        bottom : '2%',
        containLabel : true     //grid 区域是否包含坐标轴的刻度标签
    },
    xAxis: {
        axisLabel: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)",
            },
            textStyle: {
                color: "#fff"
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            lineStyle: {
                type: "dotted",
                color: "rgba(67,67,67,0.7)",
            },
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            type: 'scatter',
            itemStyle: {
                color: '#188df0'
                
            },
            symbolSize: 10,
            data: [
                [10.0, 8.04],
                [2.1,3.2],
                [3.4,2.2],
                [1.6,1.8],
                [5.5,2.4],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [4.0, 4.26],
                [12.0, 10.84],
                
            ],
        },
         {
            type: 'scatter',
            itemStyle: {
                color: '#58f2f1'
                
            },
            symbolSize: 10,
            data: [
                [6.0, 7.24],
                [8.0, 6.95],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
        }
    ]
}
















