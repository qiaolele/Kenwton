var myChart = echarts.init(document.getElementById('bar'));
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
//用于使chart自适应高度和宽度
window.onresize = function () {
  myChart.resize();
};

