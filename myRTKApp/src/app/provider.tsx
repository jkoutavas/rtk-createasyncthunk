import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import store from './store';

export type InferredStore = typeof store;

type Props = {
  children: ReactNode;
};
export function StoreProvider(props: Props): JSX.Element {
  const {children} = props;
  return <Provider store={store}>{children}</Provider>;
}
