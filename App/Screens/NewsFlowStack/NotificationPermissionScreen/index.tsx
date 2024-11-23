import ScreenSurface from "@Components/Atoms/ScreenSurface";
import { Button, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NotificationPermissionScreenProps = {
  navigation: NativeStackNavigationProp<{}>;
};

export default function NotificationPermissionScreen({
  navigation,
}: NotificationPermissionScreenProps) {
  //   const { requestNotificationPermission } = useNotificationPermissionScreen(navigation);

  return (
    <ScreenSurface>
      <View className="items-center justify-center">
        <Text className="mb-8 text-lg font-bold text-right">Allow Notifications</Text>
        <Text className="mb-8 text-right">
          We need to send you notifications to keep you updated with the latest news.
        </Text>
        <Button
          title="Allow Notifications"
          //   onPress={requestNotificationPermission}
          //   textCl="text-white bg-primary"
        />
      </View>
    </ScreenSurface>
  );
}
