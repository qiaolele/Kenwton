<<<<<<< HEAD

var myChart = echarts.init(document.getElementById('bar'));
var myChart1 = echarts.init(document.getElementById('main'));
var myChart2 = echarts.init(document.getElementById('main1'));
var myChart3 = echarts.init(document.getElementById('main2'));
//柱状图
// 指定图表的配置项和数据
option = {
  grid: {
    borderWidth: 0,
    y: 40,
    y2: 20
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {
      type : 'none'
    },
    position: function(event) {
      return [event[0] - 45, 20]
    },
    formatter: function (params){
      return '未完成' + (params[0].value) + '道题'
    }
  },
  calculable : true,
  xAxis : [
    {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      data : ['Mon','Tues','Wed','Thur','Fri','Sat', 'Sun']
    }
  ],
  yAxis : [
    {
      show: false,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      type : 'value'
    }
  ],
  series : [
    {
      name:'已完成',
      type:'bar',
      stack: 'sum',
      barCategoryGap: '60%',
      itemStyle: {
        normal: {
          color: '#FD9B5C'
        }
      },
      data:[3, 9, 7, 6, 1, 2,6]
    },
    {
      name:'未完成',
      type:'bar',
      stack: 'sum',
      itemStyle: {
        normal: {
          color: '#EBEBEB'
        }
      },
      data:[7, 1, 3, 4,9, 8,4]
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
//三个饼图
=======
var myChart1 = echarts.init(document.getElementById('main1'));
var myChart2 = echarts.init(document.getElementById('main2'));
var myChart3 = echarts.init(document.getElementById('main'));
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
var labelTop = {
  normal : {
    label : {
      position : 'center',
      formatter : '{b}',
      textStyle: {
        baseline : 'bottom',
        color:'#00f',
        fontSize:14
      }
    },
    labelLine : {
      show : false
    }
  }
};
var labelFromatter = {
  normal : {
    label : {
      formatter : function (params){
        return 100 - params.value + '%'
      },
      textStyle: {
        baseline : 'top',
        color: 'black'
      }
    }
  }
}
var labelBottom = {
  normal : {
    color: '#f3f6fb',
    label : {
      show : true,
      position : 'center'
    },
    labelLine : {
      show : false
    }
  },
  emphasis: {
    color: 'rgba(0,0,0,0)'
  }
};
var radius = [40, 55];
option1 = {
  textStyle:{
    color:'black'
  },
  series : [
    {
      type : 'pie',
      radius: ['70%', '90%'],
      center : ['50%', '50%'],
      itemStyle : labelFromatter,
      data : [
        {name:' ',value:90, itemStyle : labelBottom},
        {name:' ',value:21,itemStyle : labelTop}
      ]
    }
  ],
  color:['#fd9a5d']
};
myChart1.setOption(option1);
option2 = {
  textStyle:{
    color:'black'
  },
  series : [
    {
      type : 'pie',
      radius: ['70%', '90%'],
      center : ['50%', '50%'],
      itemStyle : labelFromatter,
      data : [
        {name:' ',value:90, itemStyle : labelBottom},
        {name:' ',value:21,itemStyle : labelTop}
      ]
    }

  ],
  color:['#84cafb']
};
myChart2.setOption(option2);
option3 = {
  textStyle:{
    color:'black'
  },
  calculable : false,
  series : [
    {
      type : 'pie',
      radius: ['70%', '90%'],
      center : ['50%', '50%'],
      itemStyle : labelFromatter,
      data : [
        {name:' ',value:89, itemStyle : labelBottom},
        {name:' ',value:11,itemStyle : labelTop}
      ]
    }
  ],
  color:['#fd775d']
};
myChart3.setOption(option3);
window.onresize = function () {
<<<<<<< HEAD
  myChart.resize();
=======
  //myChart.resize();
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
  myChart1.resize();
  myChart2.resize();
  myChart3.resize();
};
<<<<<<< HEAD


=======
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
