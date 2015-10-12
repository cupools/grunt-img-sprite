# grunt-img-sprite

> Grunt 下的精灵图自动构建工具，基于 [img-sprite](https://github.com/cupools/img-sprite) 实现

## 安装
这个插件需要 Grunt `~0.4.5`

如果你还没有使用过 [Grunt](http://gruntjs.com/)，一定要查看入门指南，因为它解释了如何创建一个 [Gruntfile](http://gruntjs.com/sample-gruntfile) 以及安装和使用 [Grunt](http://gruntjs.com/) 插件。一旦你熟悉这个过程中，您可以安装这个插件，使用此命令：

``` bash
npm install grunt-img-sprite --save-dev
```

一旦插件被安装，你可以在 Gruntfile 内配置这行JavaScript代码：

``` javascript
grunt.loadNpmTasks('grunt-img-sprite');
```

## 特性
1. 像 FIS 一般，通过在 css 文件中背景图片添加标识合并精灵图。**跟平时一样写 css，仅在打包阶段产出精灵图和新的 css 文件**
1. 能够根据标识产出多个精灵图
1. 不依赖 Less 等 CSS 预处理器
1. 兼容 Retina，并自动插入媒体查询代码
1. 支持 Base64 内联图片

## 使用
### 简单配置如下

``` javascript
grunt.initConfig({
  	img_sprite: {
  		task: {
  			src: 'css/main.css',
			dest: 'css/dest.css'	
  		}
	}
});
```

![css 文件](https://github.com/cupools/grunt-img-sprite/blob/master/docs/00.png)

![精灵图](https://github.com/cupools/grunt-img-sprite/blob/master/docs/01.png)


### 更多配置如下
```javascript
grunt.initConfig({
    img_sprite: {
        options: {
            output: 'test/tmp/',
            imgPath: '../images/',
            prefix: 'sprite-',
            retina: false,
            algorithm: 'binary-tree',
            padding: 10,
            sizeLimit: 10 * 1024
        },
        task: {
            src: 'css/*.css',
            dest: 'dest/css'
        }
    },
});
```

## 参数
### task.src
- 类型：Array
- 说明：css 文件路径，必须
- 默认：无

### task.dest
- 类型：String
- 说明：css 产出路径，当仅处理一个 css 文件时可指定文件名
- 默认：当前目录

### options.output
- 类型：String
- 说明：精灵图产出路径
- 默认：当前目录

### options.retina
- 类型：Boolean
- 说明：是否产出 @2x 图片
- 默认：true

### options.padding
- 类型：Number
- 说明：精灵图中图片间距
- 默认：10

### options.prefix
- 类型：String
- 说明：精灵图前缀；当产出 css 文件与指定 css 的目录一致时，为 css 文件添加该前缀
- 默认：'sprite-'

### options.imgPath
- 类型：String
- 说明：css 文件中的图片路径
- 默认：'../images/'

### options.algorithm
- 类型：String
- 说明：图片排序算法
- 可选：top-down, left-right, diagonal, alt-diagonal, binary-tree
- 默认：'binary-tree'

### options.media
- 类型：String
- 说明：媒体查询条件
- 默认：only screen and (-webkit-min-device-pixel-ratio: 1.5)

### options.sizeLimit
- 类型：Number
- 说明：内联图片大小限制
- 默认：5000

## 更新日志
- 0.1.0：基本功能
