const lineMapData = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}

const pieMapData = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}

const blockMapData = {
  backgroundColor: '#2c343c',

  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 274,
        name: '联盟广告'
      },
      {
        value: 235,
        name: '视频广告'
      },
      {
        value: 400,
        name: '搜索引擎'
      }
    ].sort(function(a, b) {
      return a.value - b.value;
    }),
    roseType: 'radius',
    label: {
      color: 'rgba(255, 255, 255, 0.3)'
    },
    labelLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      smooth: 0.2,
      length: 10,
      length2: 20
    },
    itemStyle: {
      color: '#c23531',
      shadowBlur: 200,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    },

    animationType: 'scale',
    animationEasing: 'elasticOut',
    animationDelay: function(idx) {
      return Math.random() * 200;
    }
  }]
}

export {lineMapData, pieMapData, blockMapData}
