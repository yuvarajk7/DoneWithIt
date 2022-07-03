import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  //const [imageUri, setImageUri] = useState();
  const [imageUris, setImageUris] = useState([]);

  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access the camera");
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) setImageUri(result.uri);
  //   } catch (error) {
  //     console.log("Error reading an image " + error);
  //   }
  // };

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    <Screen>
      {/* <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}

      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}

      <ListingEditScreen />
    </Screen>
  );
}
