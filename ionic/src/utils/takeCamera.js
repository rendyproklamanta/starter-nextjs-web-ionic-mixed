import { Camera, CameraResultType } from '@capacitor/camera';

export const takeCamera = async () => {

   try {
      const image = await Camera.getPhoto({
         quality: 90,
         allowEditing: true,
         resultType: CameraResultType.Uri
      });
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
      // console.log("🚀 ~ file: Contents.jsx:23 ~ takePicture ~ imageUrl:", imageUrl);
      return imageUrl;
   } catch (error) {
      console.log(error);
      return false;
   }

};