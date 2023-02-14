import { conditionalOptions } from './constants';
import { Select } from 'antd';
import React from 'react';

export const renderConditionalOptions = (description) => {
  return conditionalOptions.map((option, index) => (
    <Select.Option key={index} value={option.value}>
      {`${option.label}${description ? ` - ${description[index]}` : ''}`}
    </Select.Option>
  ));
};

export const getLiveSessionIndexedFormItemName = (
  sessionType,
  sectionNumber,
  position,
  index,
  field
) => {
  const name =
    sessionType === 'custom-live-session'
      ? [
          'liveSessions',
          `${sectionNumber}-${position}`,
          'sessions',
          index,
          field
        ]
      : ['liveSessions', `${sessionType}`, 'sessions', index, field];
  return name;
};

export const getLiveSessionFormItemName = (
  cardType,
  sectionNumber,
  position,
  field
) => {
  return cardType === 'custom-live-session'
    ? ['liveSessions', `${sectionNumber}-${position}`, field]
    : ['liveSessions', `${cardType}`, field];
};
