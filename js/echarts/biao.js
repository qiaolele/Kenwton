var myChart = echarts.init(document.getElementById('biao'));
var option = {
  tooltip : {
    formatter: "{a} <br/>{b} : {c}%"
  },
  series : [
    {
      name:'业务指标',
      type:'gauge',
      splitNumber: 10,       // 分割段数，默认为5
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[.66, '#FD9B5C'],[1, '#D7D7D7']],
          width: 12
        }
      },
      axisTick: {            // 坐标轴小标记
        show: false,
        splitNumber: 10,   // 每份split细分多少段
        length :12,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto'
        }
      },
      axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#D7D7D7',
          fontSize: 10
        }
      },
      splitLine: {           // 分隔线
        show: false,        // 默认显示，属性show控制显示与否
        length :15,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          color: 'auto'
        }
      },
      pointer : {
        width : 3
      },
      detail : {
        formatter:'{value}%',
        offsetCenter: [0, '30%'],
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto',
          fontSize: 20
        }
      },
      data:[{value: 66}]
    }
  ]
};
myChart.setOption(option,true);
window.onresize = function () {
  myChart.resize();
};