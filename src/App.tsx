import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { PostsContextProvider } from './shared/context/postsContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { useActions } from './hooks/useActions';

function AppComponent() {
  const { saveToken } = useActions();
  saveToken();

  return (
    <PostsContextProvider>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </PostsContextProvider>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
