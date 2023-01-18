<template>
  <div class="flex flex-col gap-[7px] py-[21px]">
    <div v-for="item in todoList" :key="item.id">
      <todo-item :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { Store, useStore } from 'vuex';

import { IStore, ITodoItem } from '@/types';
import TodoItem from '@/components/tasks/TodoItem.vue';

const store: Store<IStore> = useStore();
const todoList: ComputedRef<Array<ITodoItem>> = computed(
  () => store.getters.todos
);
</script>
