'use client'

import React, { useEffect, useRef } from 'react';
//echarts核心
import * as echarts from 'echarts/core';
//布局
import { GridComponent } from 'echarts/components';
//使用的图表类型
import {  BarChart } from 'echarts/charts';
//选择的渲染方式
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent,  BarChart, CanvasRenderer]);

const EChartComponent = () => {
  //使用ref获取dom
  const chartRef = useRef(null);

  useEffect(() => {
    //初始化图表
    var myChart = echarts.init(chartRef.current);

    // 指定图表的配置项和数据
    var option = {
        title: {
          //标题
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            //x轴坐标
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {
          // type: 'value'
        },
        series: [{
            name: '销量',
            type: 'bar',
            //每一个对应x轴的刻度,对应y轴的值
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartComponent;