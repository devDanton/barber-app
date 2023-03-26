import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from "./app.routes"
import { TabRoutes } from './tab.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}