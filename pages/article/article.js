//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles:[
      {
        avatar:'../../img/me1.jpg',
        date:'2019-05-06',
        title:'我是标题1',
        img:'../../img/b1.jpg',
        desc:'我是描述',
        star:30,
        view:40
      },
      {
        avatar: '../../img/me2.jpg',
        date: '2019-05-07',
        title: '我是标题2',
        img: '../../img/b3.jpg',
        desc: '我是描述2',
        star: 40,
        view: 50
      }      
    ]
  },
})