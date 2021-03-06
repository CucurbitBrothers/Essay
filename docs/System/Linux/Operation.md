### 常用命令

| 查看进程 | lsof -i tcp:8080 |      |
| -------- | ---------------- | ---- |
|          | grep             |      |
|          |                  |      |

### 命令参数

```shell
grep # 可以对关键字进行提取

a 不要忽略二进制数据。 
    -A<显示列数> 除了显示符合范本样式的那一行之外，并显示该行之后的内容。 
    -b 在显示符合范本样式的那一行之外，并显示该行之前的内容。 
    -c 计算符合范本样式的列数。 
    -C<显示列数>或-<显示列数> 除了显示符合范本样式的那一列之外，并显示该列之前后的内容。 
    -d<进行动作> 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。 
    -e<范本样式> 指定字符串作为查找文件内容的范本样式。 
    -E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。 
    -f<范本文件> 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。 
    -F 将范本样式视为固定字符串的列表。 -G 将范本样式视为普通的表示法来使用。 
    -h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。 
    -H 在显示符合范本样式的那一列之前，标示该列的文件名称。 
    -i 胡列字符大小写的差别。 
    -l 列出文件内容符合指定的范本样式的文件名称。 
    -L 列出文件内容不符合指定的范本样式的文件名称。 
    -n 在显示符合范本样式的那一列之前，标示出该列的编号。 
    -q 不显示任何信息。 -R/-r 此参数的效果和指定“-d recurse”参数相同。 
    -s 不显示错误信息。 
    -v 反转查找。

tail

-f 循环读取
    -q 不显示处理信息
    -v 显示详细的处理信息
    -c<数目> 显示的字节数
    -n<行数> 显示行数
    --pid=PID 与-f合用,表示在进程ID,PID死掉之后结束. 
    -q, --quiet, --silent 从不输出给出文件名的首部 
    -s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒
```





### Linux

- [链接](https://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html)

### 2. crontab

- 环境变量
- 无法读取系统环境变量, 需要在crontab之前命令之前声明
- cat /etc/crontab
- crontab -e
- 添加crontab 任务
- crontab -l
- 查看正在运行的 任务

### 3. 常用命令

- tar
- \```tex tar 解包：tar zxvf FileName.tar

打包：tar czvf FileName.tar DirName

gz命令 　　解压1：gunzip FileName.gz

解压2：gzip -d FileName.gz

压缩：gzip FileName

.tar.gz 和 .tgz

解压：tar zxvf FileName.tar.gz

压缩：tar zcvf FileName.tar.gz DirName

```
 压缩多个文件：tar zcvf FileName.tar.gz DirName1     
             DirName2 DirName3 ...
```

bz2命令 　　解压1：bzip2 -d FileName.bz2

解压2：bunzip2 FileName.bz2

压缩： bzip2 -z FileName

.tar.bz2

解压：tar jxvf FileName.tar.bz2

压缩：tar jcvf FileName.tar.bz2 DirName

bz命令

解压1：bzip2 -d FileName.bz

解压2：bunzip2 FileName.bz

压缩：未知

.tar.bz

解压：tar jxvf FileName.tar.bz

Z命令 　　解压：uncompress FileName.Z

压缩：compress FileName

.tar.Z

解压：tar Zxvf FileName.tar.Z

压缩：tar Zcvf FileName.tar.Z DirName

zip命令 　　解压：unzip FileName.zip

压缩：zip -r FileName.zip DirName ```

### 4. yum

```
// 1 安装 
yum install package  // 安装指定的安装包package 

// 2 更新和升级 
yum update  // 全部更新 
yum update package  // 更新指定程序包package
yum check-update  // 检查可更新的程序 
yum upgrade package  // 升级指定程序包package 

// 3 查找和显示 
yum info // 列出所有可以安装或更新的包的信息
yum info package //显示安装包信息package 
yum list // 显示所有已经安装和可以安装的程序包 
yum list package  // 显示指定程序包安装情况package
yum search package // 搜索匹配特定字符的package的详细信息

// 4 删除程序 
yum remove | erase package  // 删除程序包package
yum deplist package  // 查看程序package依赖情况

// 5 清除缓存 
yum clean packages  // 清除缓存目录下的软件包 
yum clean headers // 清除缓存目录下的 headers 
yum clean oldheaders // 清除缓存目录下旧的 headers 
yum clean, yum clean all  // (= yum clean packages; yum clean oldheaders) 清除缓存目录下的软件包及旧的headers
```

### 5. vim









### 重要文件地址

* ~/.ssh
  * 公钥，私钥