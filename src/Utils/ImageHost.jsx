import axios from "axios";

export const imageUpload = async (image) => {
  // console.log(image)
  const fromData = new FormData();
  fromData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
    fromData
  );
  // console.log(data)
  return data;
};