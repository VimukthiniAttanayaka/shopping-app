import React from 'react'
import {Image} from 'react-bootstrap'
import shoes_2_1 from "./shoes_images/shoe_2_1.webp"
import shoes_2_2 from "./shoes_images/shoe_2_2.webp"
import shoes_2_3 from "./shoes_images/shoe_2_3.webp"
import shoes_2_4 from "./shoes_images/shoe_2_4.webp"
import shoes_2_5 from "./shoes_images/shoe_2_5.webp"


type shoe1Props = {
    numb:number
}

const ShoeChangeImage : React.FC<shoe1Props> = (props) => {

    const {numb} = props;
    var photo_name:string = shoes_2_1;

        if(numb===1){
            photo_name=shoes_2_1
          }
          if(numb===2){
            photo_name=shoes_2_2
          }
          if(numb===3){
            photo_name=shoes_2_3
          }
          if(numb===4){
            photo_name=shoes_2_4
          }
          if(numb===5){
            photo_name=shoes_2_5
          }

    return (
        <div>
            <Image src={photo_name} fluid/>
        </div>
    )
}
export default ShoeChangeImage;