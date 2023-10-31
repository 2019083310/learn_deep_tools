<template>
  <div>
    <input type="text" v-model="todoText"> 任务
    <input type="number" v-model.number="todoDone"> 完成
    <button @click="addTodo">addTodo</button>
    <button @click="updateTodoDone">updateTodo</button>
    <button @click="deleteTodo">deleteTodo</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.text }}</span>
        <span>-</span>
        <span>{{ todo.done ? '已完成' : '未完成' }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { Database, unfinishedFirstOrder } from '../utils/database.js'

const db = new Database()

const todoText = ref('')
const todoDone = ref(0)
const todos = ref([])

const addTodo = async () => {
  await db.addTodo(todoText.value)
  todoText.value = ''
  todoDone.value = 0
  updateTodo()
}

const updateTodo = async () => {
  todos.value = await db.getTodos(unfinishedFirstOrder)
}

const updateTodoDone = async () => {
  await db.setTodoDone(1, todoDone.value)
  todoDone.value = 0
  updateTodo()
}

const deleteTodo = async () => {
  await db.deleteTodo(2)
  updateTodo()
}

onMounted(() => {
  updateTodo()
})
</script>

<style scoped></style>
