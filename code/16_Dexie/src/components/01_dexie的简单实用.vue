<template>
  <div>
    <h2>嘻嘻嘻</h2>
  </div>
</template>

<script setup>
import Dexie from 'dexie'

// ?Dexie解决了原声的indexedDB的三个主要问题:
// 1.糟糕的查询
// 2.代码复杂度
// 3.不明确的错误处理

// 创建一个名为workbench.database的数据库,不存在创建，存在打开
const db = new Dexie('workbench')

db.version(1).stores({
  // 创建一个表users,users表具有一个名为id的自增长主键字段，以及一个名为username的索引
  users: '++id, username'
})

// db.users.add({username: 'curry',age: 34}).then(res=>{
//   return db.users.where('username')
// }).then(res=> console.log(res))

console.log(db.table('users'))

</script>

<style scoped></style>
