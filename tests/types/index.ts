import { IStore } from '@/types';

export interface IVuexMockedContext {
  state: IStore;
  rootState: IStore;
  commit: jest.Mock;
  getters: jest.Mock;
  dispatch: jest.Mock;
  rootGetters: jest.Mock;
}
