/**
 * Created by qiaolele on 2016/11/17.
 */
var myChart = echarts.init(document.getElementById('brokeLine'));
option = {
<<<<<<< HEAD
	tooltip : {
		trigger: 'axis',
		position: function (pos) {
			return [pos[0] - 50, pos[1] -40]
		},
		backgroundColor: '#F5F5F5',
		textStyle: {
			color: 'black'
		},
		formatter: function (params) {
			return 'å®Œæˆ:' + params[0].data
		}
	},
	calculable : true,
	xAxis : [
		{
			type : 'category',
			splitLine:{
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				},
				show: true
			},
			axisTick: {
				show: false
			},
			boundaryGap : true,
			data : ['Mon','Tue','Wed','Tur','Fri','Sat','Sun']
		}
	],
	yAxis : [
		{
			splitLine: {
				lineStyle: {
					color: '#eaeaea'
				}

			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#e2e2e2'
				}
			},
			axisLabel: {
				show: false
			}
		}
	],
	series : [
		{
			name:'å®Œæˆ',
			type:'line',
			smooth:true,
			symbol: 'emptyCircle',
			itemStyle: {
				normal: {
					areaStyle: {
						color: '#ffdfd1'
					}
				}
			},
			data:[10, 100, 56, 150, 260, 830, 710]
		}
	]
};
myChart.setOption(option);
window.onresize = function () {
	myChart.resize();
};
=======
    tooltip : {
        trigger: 'axis',
        position: function (pos) {
            return [pos[0] - 50, pos[1] -40]
        },
        backgroundColor: '#F5F5F5',
        textStyle: {
            color: 'black'
        },
        formatter: function (params) {
            return 'ÅÅÃû:' + params[0].data
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            splitLine:{
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
              show: false
            },
            boundaryGap : true,
            data : ['Mon','Tue','Wed','Tur','Fri','Sat','Sun']
        }
    ],
    yAxis : [
        {
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'³É½»',
            type:'line',
            smooth:true,
            symbol: 'emptyCircle',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data:[10, 12, 21, 54, 260, 830, 710]
        }
    ]
};

myChart.setOption(option,true);
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
