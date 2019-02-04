import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import UploadOriginal from '../screens/UploadOriginal';
import UploadPractice from '../screens/UploadPractice';
import CompareVideos from '../screens/CompareVideos';
import BodyRecog from '../screens/BodyRecog';

const AppNavigation = createStackNavigator({
  Menu: Home,
  Original: UploadOriginal,
  Practice: UploadPractice,
  Compare: CompareVideos,
  BodyRecog: BodyRecog,
});

const AppNav = createAppContainer(AppNavigation);

export default class RootNavigation extends React.Component{
  render() {
    return <AppNav />
  }
}
