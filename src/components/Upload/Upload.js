import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { property as storage } from "../../db/db";

const UploadImage = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const uploadImage = async options => {
    const { onSuccess, onError, file } = options;
    const random = Math.random().toString(36).slice(2)
    try {
        await storage.ref(`property/${file.name}_${random}`).put(file)
        await storage.ref(`property/${file.name}_${random}`).getDownloadURL().then((src) => {
           console.log(src);
        });

        
        onSuccess("Ok");
    } catch (err) {
        console.log("Eroor: ", err);
       // const error = new Error("Some error");
        onError({ err });
    }
};

  return (
    <ImgCrop rotate>
      <Upload
         customRequest={uploadImage}
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};


export default  UploadImage;