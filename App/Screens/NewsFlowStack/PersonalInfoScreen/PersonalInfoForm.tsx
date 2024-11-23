import { Button, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

type PersonalInfoModel = {
  firstName: string;
  lastName: string;
};

export default function PersonalInfoForm() {
  const { control, handleSubmit, onSubmit } = usePersonalInfoForm();
  return (
    <View className="flex-1 bg-pink-500">
      <View className="">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-6 "
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: true }}
        />
      </View>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="mb-6 "
              placeholder="Last name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
          rules={{ required: true }}
        />
      </View>
      <View className="absolute h-10 bg-green-200 bottom bottom-4">
        <Button
          title=">"
          onPress={handleSubmit(onSubmit)}
          color="#841584"
          accessibilityLabel="Submit"
        />
      </View>
    </View>
  );
}

function usePersonalInfoForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: PersonalInfoModel) => {};

  return { control, handleSubmit, onSubmit };
}
