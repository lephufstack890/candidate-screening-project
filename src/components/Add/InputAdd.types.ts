import React, { ChangeEvent } from 'react';

export type TInputAddProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  reloadData: any
};
