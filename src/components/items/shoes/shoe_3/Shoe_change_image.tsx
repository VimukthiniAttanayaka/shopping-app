import React from 'react'
import {Image} from 'react-bootstrap'
import shoes_3_1 from "./shoes_images/shoe_3_1.webp"
import shoes_3_2 from "./shoes_images/shoe_3_2.webp"
import shoes_3_3 from "./shoes_images/shoe_3_3.webp"
import shoes_3_4 from "./shoes_images/shoe_3_4.webp"

type shoe1Props = {
    numb:number
}

const ShoeChangeImage : React.FC<shoe1Props> = (props) => {

    const {numb} = props;
    var photo_name:string = shoes_3_1;

        if(numb===1){
            photo_name=shoes_3_1
          }
          if(numb===2){
            photo_name=shoes_3_2
          }
          if(numb===3){
            photo_name=shoes_3_3
          }
          if(numb===4){
            photo_name=shoes_3_4
          }

    return (
        <div>
            <Image src={photo_name} fluid/>
        </div>
    )
}
export default ShoeChangeImage;