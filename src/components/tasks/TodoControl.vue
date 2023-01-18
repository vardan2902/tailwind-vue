<template>
  <div class="flex gap-[10px] items-center">
    <input
      type="text"
      class="h-[48px] w-full border border-solid border-light-grey rounded-lg p-3"
      v-model="text"
      ref="inputRef"
    />
    <button
      class="bg-light-blue text-white text-base font-semibold w-[129px] h-[46px] flex justify-center items-center rounded-lg"
      @click="editingItem ? edit() : add()"
    >
      {{ editingItem ? 'Save' : 'Add' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref, watch } from 'vue';
import { Store, useStore } from 'vuex';
import { IStore, Nullable } from '@/types';
import { ADD_TODO_ITEM, EDIT_TODO_ITEM } from '@/store/types/mutations';

const store: Store<IStore> = useStore();
const editingItem = computed(() => store.getters.editingItem);
const text: Ref<string> = ref(editingItem.value?.text || '');
const inputRef: Ref<Nullable<HTMLInputElement>> = ref(null);

watch(editingItem, () => {
  if (editingItem.value) {
    text.value = editingItem.value.text;
    if (inputRef.value) inputRef.value.focus();
  }
});

const add = () => {
  store.dispatch(ADD_TODO_ITEM, text.value);
  text.value = '';
};

const edit = () => {
  store.dispatch(EDIT_TODO_ITEM, {
    ...editingItem.value,
    text: text.value,
  });
  text.value = '';
};
</script>
