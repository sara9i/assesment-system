import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import { AdminRouter } from '../../routes';
import AuthStore, { isUserLoggedIn } from '../../stores/authStore';
import configStore from '../../stores/configureStore';
import { Provider } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { defaultNavItems, navItemMap } from './constant';

const { Content } = Layout;

const store = configStore();

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [navItems, setNavItems] = useState(defaultNavItems);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isTrainer, setIsTrainer] = useState(false);
  const [layoutStyle, setLayoutStyle] = useState({
    padding: '0 24px 24px'
  });
  const [mainContentLayout, setMainContentLayout] = useState({
    padding: 24,
    margin: 0,
    minHeight: '100vh',
    backgroundColor: 'white'
  });

  useEffect(() => {
    let authObject = window.localStorage.getItem('auth');
    if (authObject) {
      try {
        authObject = JSON.parse(authObject);
        if (
          authObject.user &&
          authObject.accessToken &&
          authObject.refreshToken
        ) {
          AuthStore.dispatch({ type: 'AUTH/LOG_IN', payload: authObject });
          const user = authObject?.user;
          const tabs = user?.tabsVisible; // IS THIS USED BY SOMETHING
          if (tabs) {
            // IS THIS USED BY SOMETHING
            setNavItems(tabs.map((tab) => navItemMap[tab]));
          } else {
            setNavItems(defaultNavItems);
          }
          if (user.isTrainer) {
            setIsTrainer(true);
          }
        }
      } catch (error) {
        console.log('[Home] Error parsing the JSON Object:', error);
        window.localStorage.removeItem('auth');
      }
    }
  }, [location]);

  const pathname = location?.pathname || '';

  const isLoginRoute = pathname.startsWith('/login');
  const isCreatorDashboardRoute = pathname === '/creator';

  useEffect(() => {
    function handleLogout() {
      console.log('User Logged Out');
      history.push('/');
    }
    const unsubscribe = AuthStore.subscribe(() => {
      if (!isUserLoggedIn(AuthStore.getState())) {
        handleLogout();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [history]);

  useEffect(() => {
    if (isCreatorDashboardRoute) {
      setLayoutStyle({ padding: '0 0' });
      setMainContentLayout({
        padding: '24px 0 24px 48px',
        margin: 0,
        minHeight: '100vh',
        backgroundColor: '#F0F2F5'
      });
    } else if (isLoginRoute) {
      setLayoutStyle({ padding: '0 0' });
      setMainContentLayout({
        padding: 0,
        margin: 0,
        minHeight: '100vh',
        backgroundColor: 'white'
      });
    } else {
      setLayoutStyle({ padding: '0 24px 24px' });
      setMainContentLayout({
        padding: 24,
        margin: 0,
        minHeight: '100vh',
        backgroundColor: 'white'
      });
    }
  }, [location]);

  const showTabs = isUserLoggedIn(AuthStore.getState());

  return (
    <Provider store={store}>
      <Layout>
        {!isLoginRoute && <Header />}
        <Layout>
          {showTabs && (
            <SideBar
              navItems={navItems}
              isCollapsed={isCollapsed}
              setIsCollapsed={() => setIsCollapsed(!isCollapsed)}
            />
          )}
          <Layout style={layoutStyle}>
            <Content style={mainContentLayout}>
              <AdminRouter />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default App;
