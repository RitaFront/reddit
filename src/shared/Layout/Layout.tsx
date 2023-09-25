import React from 'react';
import styles from './layout.scss';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import { Content } from '../Content';

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
