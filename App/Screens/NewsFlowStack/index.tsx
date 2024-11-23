import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen, { Place } from "./HomeScreen";
import { HistoricalPlacesProvider } from "App/Store/HistoricalPlacesCtx";
import PlaceDetailScreen from "@Screens/NewsFlowStack/PlaceDetailScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import PersonalInfoScreen from "./PersonalInfoScreen";

export type NewsStackParamList = {
  PersonalInfoScreen?: undefined;
  HomeScreen?: undefined;
  DetailScreen: { place: Place };
};

const NewsStack = createNativeStackNavigator<NewsStackParamList>();

export type HistoricalPlacesStackProps = object;

function NewsFlowStack({}: HistoricalPlacesStackProps) {
  return (
    <HistoricalPlacesProvider>
      <NewsStack.Navigator screenOptions={{ headerShown: false }}>
        <NewsStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
        <NewsStack.Screen name="HomeScreen" component={HomeScreen} />
        <NewsStack.Screen name="DetailScreen" component={PlaceDetailScreen} />
      </NewsStack.Navigator>
    </HistoricalPlacesProvider>
  );
}

export default NewsFlowStack;
