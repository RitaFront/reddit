import React, { useEffect, useState } from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Provider } from 'react-redux';
import { store } from './store';
import { useActions } from './hooks/useActions';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from 'react-router-dom';
import { Post } from './shared/Post';
import { useTypedSelector } from './hooks/useTypedSelector';
import NotFound from './shared/NotFound/NotFound';

function AppComponent() {
  const { saveToken } = useActions();
  saveToken();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path=""
                element={<Navigate replace to="/posts" />}
              />
              <Route
                path="auth"
                element={<Navigate replace to="/posts" />}
              />
              <Route path="posts" element={<CardsList />}>
                <Route path=":id" element={<Post />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          {/* <Layout> */}
          {/* <Header /> */}
          {/* <Content> */}
          {/* <CardsList /> */}

          {/* </Content> */}
          {/* </Layout> */}
        </BrowserRouter>
      )}
    </div>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
