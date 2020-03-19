/*
 * @Description: 请输入当前文件描述
 * @Author: xiao xin (834529118@qq.com)
 * @Date: 2020-03-17 17:26:14
 * @LastEditors: xiao xin (834529118@qq.com)
 * @LastEditTime: 2020-03-19 15:08:09
 */

const data = [
  {
    name: "白皮鸡蛋",
    value: "459.00"
  },
  {
    name: "红皮鸡蛋",
    value: "389.00"
  },
  {
    name: "鸡蛋",
    value: "336.00"
  },
  {
    name: "牛肉",
    value: "282.00"
  },
  {
    name: "羊肉",
    value: "249.00"
  },
  {
    name: "鸭蛋",
    value: "242.00"
  },
  {
    name: "红薯",
    value: "222.00"
  },
  {
    name: "白菜",
    value: "182.00"
  },
  {
    name: "鸡肉",
    value: "102.00"
  }
];

const colorList = [
  "#f6e242",
  "#ebec5b",
  "#d2ef5f",
  "#b1d894",
  "#97d5ad",
  "#82d1c0",
  "#70cfd2",
  "#63c8ce",
  "#50bab8"
];

const defalutConfig = {
  tipShow: true,
  yScale: {
    color: "#636363",
    fontSize: "14px"
  },
  xScale: {
    color: "#636363",
    fontSize: "14px"
  },
  colorList: colorList
};

// 判断值类型
export function isTypeOf(value, type) {
  return Object.prototype.toString.call(value).slice(8, -1) === type;
}

export { data, defalutConfig };