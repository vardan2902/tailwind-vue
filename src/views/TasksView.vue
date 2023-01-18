<template>
  <div class="ml-3.5">
    <todo-control />
    <todo-list />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/tasks/TodoList.vue';
import TodoControl from '@/components/tasks/TodoControl.vue';
</script>
