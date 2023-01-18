import { createApp } from 'vue';
import store from './store';
import router from './router';

import App from './App.vue';
import { INIT } from '@/store/types/mutations';

createApp({
  extends: App,
  beforeCreate() {
    this.$store.commit(INIT);
  },
})
  .use(store)
  .use(router)
  .mount('#app');
