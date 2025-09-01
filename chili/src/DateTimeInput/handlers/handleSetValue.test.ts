import { createSetValueHandler } from './handleSetValue';
import { stateActionTypes } from '../actions';
import { COMPONENT_TYPES } from '../constants';

describe('createSetValueHandler', () => {
  it('should handle ISO date string', () => {
    const dispatch = jest.fn();
    const onChange = jest.fn();

    const handler = createSetValueHandler({
      props: {
        name: 'test',
        onChange,
        format: 'dd.MM.yyyy',
        type: COMPONENT_TYPES.DATE_ONLY,
      },
      dispatch,
    });

    handler('2025-02-01T13:34:00.000Z');

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: stateActionTypes.SET_VALUE,
      payload: '01.02.2025',
    });

    const setDateCall = dispatch.mock.calls[1][0];
    expect(setDateCall.type).toBe(stateActionTypes.SET_DATE);
    expect(setDateCall.payload).toBeInstanceOf(Date);
    expect(setDateCall.payload.toISOString()).toBe('2025-02-01T13:34:00.000Z');

    expect(onChange).toHaveBeenCalledWith({
      component: {
        name: 'test',
        date: setDateCall.payload,
        value: '2025-02-01T13:34:00.000Z',
      },
    });
  });
});
