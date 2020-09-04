# bookep

## 说明

> 一个记账的webApp ，基于 Vue（vuex、vue-router）、localStorage、IndexedDB，自己设计实现

![image](https://github.com/undefine4080/Bookep/blob/master/images/main.png)



## 技术栈

使用了Vue、VueRouter、Vuex的基本技术来构建页面以及页面交互，使用 IndexedDB 保存大体积数据（明细记录），使用 localStorage 保存小体积的数据（账户信息）


## 注意

本项目作为前端技术的练习，可以完美的提供记账的功能，但是不能当作一个正真的app来使用，因为没有考虑安全性和性能等方面的问题。为前端学习者提供一种做项目的思路


## 功能

 1. 支出和收入记录功能
  
![image](https://github.com/undefine4080/Bookep/blob/master/images/way.png)
 


 2. 查看每一笔支出或收入的记录（明细）；支持给明细记录排序，可以按时间降序、按账户显示、按单笔最大金额（无论是支出还是收入金额）；明细一旦记录不支持删除（为了规范）
  
![image](https://github.com/undefine4080/Bookep/blob/master/images/detail.png)
 


 3. 设置支出类别和收入类别，为了规范，只能添加或者删除类别，默认提供的类别可以删除
  
![image](https://github.com/undefine4080/Bookep/blob/master/images/setting_02.png)
 


 4. 设置账户额度的功能，比如月初先给一个账户设置好这个月的额度（预算），之后就能根据明细记录，计算出剩余的额度；添加或删除账户的功能，只能添加或删除，不能修改原来的的账户
   
 ![image](https://github.com/undefine4080/Bookep/blob/master/images/setting_01.png)



 5. 主题切换的功能，内置六种纯色主题，根据喜好，自由切换。还能记住上次的主题设置，再次打开时显示上次设置的主题
  
![image](https://github.com/undefine4080/Bookep/blob/master/images/theme.png)
  


 6. 显示消费或收入的统计图表的功能（未完成...）
   
 ![image](https://github.com/undefine4080/Bookep/blob/master/images/chart.png)


 # 预览

## 本地预览

1. 下载项目文件后解压缩
2. 进入到项目文件夹的根路径
3. 运行 node 命令，安装依赖
    `npm install`
4. 运行到本地服务器
    `npm run dev`
5. 在浏览器打开地址：http://localhost:8080/


## 在线预览

在线预览地址： [Ｂｏｏｋｅｐ](http://www.ztf.cool/)  （可能不能正常显示，因为我还不会搭服务器😂）
