// console.log(_);
// *1.chunk 将一个数组，指定size拆分为多个数组，并返回
const arr=[1,2,3,4,5,6,]
const chunkArr=_.chunk(arr,2)

console.log(chunkArr)//[[1,2],[3,4],[5,6]]

// *2.compact 将一个数组中的假值过滤掉 返回过滤掉假值的新数组
// todo 例如：false,0,"",NaN,undefined都是假值
const falseArr=[1,2,0,"",false]
console.log(_.compact(falseArr))//[1,2]

// *3.concat 合并数组，ES中数组的prototype中的实例方法，接受一个多个数组或者是值，返回合并的新数组
// todo 1.接受的是多个数值
console.log(arr.concat('a'))
// todo 2.接受多个数组
console.log(arr.concat([1,2],[8]))

// todo 3.利用_.concat
console.log(_.concat(['a','b'],'c',['d','e']))

// *4.difference 排出数组种指定的值，返回一个新的数组
// todo _.difference(array,[values])
console.log(_.difference([1,2,3],[3]))//[1,2]

// *5.drop 去除指定n前面的元素 返回一个数组
// todo _.drop(array,[n=1])
console.log(_.drop([1,2,3]))//[2,3]
console.log(_.drop([1,2,3],0))//[1,2,3]

// *6.findIndex 查找数组中是否存在该元素，存在返回找到的第一个索引,否则返回-1 和Array.prototype.findIndex很像
// todo _.findIndex(array,)
console.log([1,2,3].findIndex((v,i,array)=>v===2))//1
console.log(_.findIndex([1,2,3],(v)=>v===2))//1

// *7.last 获取array的最后一个元素
// todo _.last(array)
console.log(_.last(['a','c']))//'c'

// *8.nth 获取数组的第n个元素，n为负值则从后找
// todo _.nth(array,n)
console.log(_.nth([7,8,9,6],2))//9
console.log(_.nth([7,8,9,6],-2))//9

// *9. tail获取数组除了第一个元素的剩余元素
// todo _.tail(array)
console.log(_.tail([2,3,4]))//[3,4]

// *10.uniq数组去重
// todo _.uniq(array)
console.log(_.uniq([{x:'x',c:'c'},{},{},1,1,NaN,NaN,'c','c',true,true]))//[{},{},{},1,NaN,'c',true]

// *11.uniqBy 数组去重，只不过可以对数组操作过滤
// todo _.uniqBy(array,迭代函数)
console.log(_.uniqBy([1.1,2.2,2.3],Math.floor))//[1.1,2.2]
console.log(_.uniqBy([1.1,2.2,2.3],(v)=>v!==2))//[1.1]

// *12.zip 创建一个新的数组，数组的第一个元素包含所有数组的第一个元素，第二个元素包含所有数组的第二个元素
// todo _.zip(arrays)
// !从下面的值可以看出来，返回的新数组包含的数组的长度是一致的，即数组的长度以参数数组的最长长度为标准，如果其他数组没有值为Undefined
// [[{name:'coder',age:18},{height:1.88},{address:'dalian'}],[undefined,true,'大连'],[undefined,false,undefined]]
console.log(_.zip([{name:'coder',age:18}],[{height:1.88},true,false],[{address:'dalian'},'大连']))

// *13.xor 创建一个具有唯一值的数组
// todo _.xor(arrays)
console.log(_.xor([1,2],[2,1,3,5,'c']))//[3,5,'c']