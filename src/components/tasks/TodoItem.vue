<template>
  <div
    class="flex flex-nowrap flex-row px-[18px] justify-between items-center rounded-md border border-solid border-light-grey w-full h-[60px]"
  >
    <div class="flex items-center flex-row gap-[13px] w-8/12">
      <input
        type="checkbox"
        class="after:bg-center after:bg-no-repeat checked:after:bg-checked checked:after:border-light-blue checked:after:bg-light-blue invisible cursor-pointer after:rounded after:visible w-[20px] h-[20px] after:block after:content-[''] after:w-[20px] after:h-[20px] after:border after:border-solid after:border-grey-400"
        v-model="done"
      />
      <p
        class="w-full whitespace-nowrap text-ellipsis overflow-hidden text-grey-900"
        :class="{ 'line-through': item.done }"
      >
        {{ item.text }}
      </p>
    </div>
    <div class="flex gap-[3px] flex-nowrap min-w-[67px]">
      <button class="p-2" @click="setEditing">
        <img src="../../assets/icons/edit.svg" alt="edit button" />
      </button>
      <button class="p-2" @click="remove">
        <img src="../../assets/icons/remove.svg" alt="edit button" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { ref, Ref, watch } from 'vue';
import { IStore } from '@/types';
import {
  REMOVE_TODO_ITEM,
  SET_EDITING_ITEM,
  TOGGLE_TODO_ITEM,
} from '@/store/types/mutations';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const done: Ref<boolean> = ref(props.item.done);
const store: Store<IStore> = useStore();

watch(done, () => store.dispatch(TOGGLE_TODO_ITEM, props.item.id));

const setEditing = () => store.dispatch(SET_EDITING_ITEM, props.item);
const remove = () => store.dispatch(REMOVE_TODO_ITEM, props.item.id);
</script>
