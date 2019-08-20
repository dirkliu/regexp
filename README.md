正则表达式
### 元字符
 代码/语法 | 说明 
 --- | ---
 . | 匹配换行符以外的任意字符 
 \w | 匹配字母或数字或下划线或汉字 
 \s | 匹配任意的空白符 
 \d | 匹配数字 
 \b | 匹配单词的开始或结束 
 ^  | 匹配字符串的开始 
 $ | 匹配字符串的结束

### 重复
 代码/语法 | 说明 
 --- | ---
 *| 重复零次或更多次 
 +| 重复一次或更多次 
 ?| 重复零次或一次 
 {n}| 重复n次 
 {n, }| 重复n次或更多次 
 {n, m}| 重复n到m次

### 字符类 

### 分枝条件 

### 分组 

### 反义

### 后向引用
后向引用用于重复搜索前面某个分组匹配的文本  
 代码/语法 | 说明 
 --- | ---
 (exp) | 匹配exp,并捕获文本到自动命名的组里 
 (?<name>exp) | 匹配exp,并捕获文本到名称为name的组里，也可以写成(?'name'exp)
 (?:exp) | 匹配exp,不捕获匹配的文本，也不给此分组分配组号

\b(?<Word>\w+)\b\s+\k<Word>\b  匹配 go go,或者kitty kitty等

### 零宽断言 
断言用来声明一个应该为真的事实。正则表达式中只有当断言为真时才会继续进行匹配。  
 代码/语法 | 说明 
 --- | --- 
 (?=exp) | 零宽度正预测先行断言:  断言自身出现的位置的后面能匹配表达式exp  
 (?<=exp) | 零宽度正回顾后发断言: 断言自身出现的位置的前面能匹配表达式exp

### 负向零宽断言
 代码/语法 | 说明 
 --- | ---
 (?!exp) | 断言此位置的后面不能匹配表达式exp
 (?<!exp) | 断言此位置的前面不能匹配表达式exp   

\b((?!abc)\w)+\b匹配不包含连续字符串abc的单词 
(?<=<(\w+)>).*(?=<\/\1>) 

### 注释 
(?#comment) 在#后面到这一行结束的所有文本都将被当成注释忽略掉

### 贪婪与懒惰 
 代码/语法 | 说明 
 --- | --- 
 *?| 重复任意次，但尽可能少重复 
 +?| 重复1次或更多次，但尽可能少重复 
 ??| 重复0次或1次，但尽可能少重复 
 {n,m}?| 重复n到m次，但尽可能少重复 
 {n,}?| 重复n次以上，但尽可能少重复 

### 处理选项 
 名称 | 说明 
 --- | ---
 IgnoreCase(忽略大小写)| 匹配时不区分大小写。
 Multiline(多行模式)| 更改^和$的含义，使它们分别在任意一行的行首和行尾匹配，而不仅仅在整个字符串的开头和结尾匹配。 (在此模式下,$的精确含意是:匹配\n之前的位置以及字符串结束前的位置.)  
 Singleline(单行模式) | 更改.的含义，使它与每一个字符匹配（包括换行符\n） 
 IgnorePatternWhitespace(忽略空白) | 忽略表达式中的非转义空白并启用由#标记的注释。 
 RightToLeft(从右向左查找)| 匹配从右向左而不是从左向右进行。 
 ExplicitCapture(显式捕获)| 仅捕获已被显式命名的组。 
 ECMAScript(JavaScript兼容模式)| 使表达式的行为与它在JavaScript里的行为一致。 

### 平衡组/递归匹配
 语法 | 说明 
 --- | --- 
 (?'group') | 把捕获的内容命名为group,并压入堆栈(Stack) 
 (?'-group') | 从堆栈上弹出最后压入堆栈的名为group的捕获内容，如果堆栈本来为空，则本分组的匹配失败 
 (?(group)yes\|no) | 如果堆栈上存在以名为group的捕获内容的话，继续匹配yes部分的表达式，否则继续匹配no部分 
 (?!) | 零宽负向先行断言，由于没有后缀表达式，试图匹配总是失败 


平衡组的一个最常见的应用就是匹配HTML,下面这个例子可以匹配嵌套的```<div>```标签: 
<div[^>]*>[^<>]*(((?'Open'<div[^>]*>)[^<>]*)+((?'-Open'</div>)[^<>]*)+)*(?(Open)(?!))</div>

#### Tips
[在线正则表达式测试](https://regex.supfree.net/)
