import {
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  SET_EDITING_ITEM,
} from '@/store/types/mutations';
import actions from '@/store/actions';
import { mockedContext } from '@tests/mocks';
import { IVuexMockedContext } from '@tests/types';

describe('actions', () => {
  let context: IVuexMockedContext;

  beforeEach(() => {
    context = mockedContext;
  });

  it('should call commit with ADD_TODO_ITEM and payload', () => {
    actions[ADD_TODO_ITEM](context, 'Test Todo');
    expect(context.commit).toHaveBeenCalledWith(ADD_TODO_ITEM, 'Test Todo');
  });

  it('should call commit with EDIT_TODO_ITEM and payload', () => {
    const payload = { id: 1, text: 'Test Todo Edited', done: false };
    actions[EDIT_TODO_ITEM](context, payload);
    expect(context.commit).toHaveBeenCalledWith(EDIT_TODO_ITEM, payload);
  });

  it('should call commit with REMOVE_TODO_ITEM and payload', () => {
    actions[REMOVE_TODO_ITEM](context, 1);
    expect(context.commit).toHaveBeenCalledWith(REMOVE_TODO_ITEM, 1);
  });

  it('should call commit with TOGGLE_TODO_ITEM and payload', () => {
    actions[TOGGLE_TODO_ITEM](context, 1);
    expect(context.commit).toHaveBeenCalledWith(TOGGLE_TODO_ITEM, 1);
  });

  it('should call commit with SET_EDITING_ITEM and payload', () => {
    const payload = { id: 1, text: 'Test Todo Edited', done: false };
    actions[SET_EDITING_ITEM](context, payload);
    expect(context.commit).toHaveBeenCalledWith(SET_EDITING_ITEM, payload);
  });
});
