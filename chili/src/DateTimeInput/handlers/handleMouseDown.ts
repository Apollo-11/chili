import type * as React from 'react';
import { VIEW_TYPES } from '../../CalendarBase/constants';
import { setOpen, setViewType } from '../actions';
import type { HandlersData } from '../types';

export const createCalendarIconMouseDownHandler = ({
  dispatch,
  props,
  state,
}: HandlersData) => (ev: React.MouseEvent<SVGElement>): void => {
  const { isDisabled } = props;
  const {
    isOpen,
  } = state;

  if (isDisabled) return;

  ev.preventDefault();
  ev.stopPropagation();

  if (!isOpen) {
    dispatch(setViewType(VIEW_TYPES.DATES));

    dispatch(setOpen(true));
  } else dispatch(setOpen(false));
};

export const createCalendarMouseDownHandler = () => (ev: React.MouseEvent<HTMLDivElement>): void => {
  ev.preventDefault();
};
