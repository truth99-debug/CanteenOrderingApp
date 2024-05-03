import { Button } from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const saveImageToDb = () => {

    const [selectedImage, setSelectedImage] = useState()
    const [imageByteArray, setImageByteArray] = useState()
    const [imageName, setImageName] = useState()
    const [imageSize, setImageSize] = useState()


const handleSelectedImage = (event) => {
    const file = event.target.files[0];
    if(file.name.endsWith('png') || file.name.endsWith('jpeg') || file.name.endsWith('webp'))
        setSelectedImage(file);
        setImageName(file.name)
    setImageSize(file.size)
}

const changeImageToByteArray = () => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(selectedImage);
        if(e.target.readyState === FileReader.DONE ) {
            const arrayBuffer = e.target.result,
                array = new Uint8Array(ArrayBuffer);
            for (const a of array ) {
                imageByteArray.push(a);
            }
            setImageByteArray(imageByteArray)
        }
    }

    useEffect (() => {
        if (selectedImage) {
            changeImageToByteArray();
        }
    }, [selectedImage]);

    const saveImageToDb = (e) => {
        const data = {
            imageName: imageName,
            imageContents: imageByteArray,
            fileSize: imageSize
        }
        service.submitImageToDb(data).then((response) => {
            if (response.ok) {
                console.log('image successfully saved');
            }
        }).catch((error) => {
            console.log('could not save the image');
        })
        
    }
}



