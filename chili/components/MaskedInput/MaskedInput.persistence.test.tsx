import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MaskedInput } from './index';
import { Persistence } from '../Validation/types';

describe('MaskedInput PERSISTENCE', () => {
  it('should restore persisted value without console error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    window.sessionStorage.clear();

    const { unmount } = render(
      <MaskedInput
        mask="###"
        form="form"
        name="field"
        persistence={Persistence.sessionStorage}
        onChange={jest.fn()}
      />,
    );

    userEvent.type(screen.getByRole('textbox'), '123');

    expect(window.sessionStorage.getItem('chili-form-form')).toBe(JSON.stringify({ field: '123' }));

    unmount();

    render(
      <MaskedInput
        mask="###"
        form="form"
        name="field"
        persistence={Persistence.sessionStorage}
        onChange={jest.fn()}
      />,
    );

    expect(await screen.findByDisplayValue('123')).toBeTruthy();

    expect(consoleErrorSpy.mock.calls.flat()).not.toContain('Persistence prop is for uncontrolled state only');

    consoleErrorSpy.mockRestore();
  });
});
