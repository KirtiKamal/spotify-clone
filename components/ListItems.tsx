"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Image from "next/image";
import {FaPlay} from "react-icons/fa" 

interface ListItemProps{
    image: string;
    name: string;
    href: string;

}

const ListItem: React.FC<ListItemProps> =({
    image,
    name,
    href
})  => {
    const router = useRouter();

    const onClick = ()=>{
        // Add authentication before push
        router.push(href);
    }
    return (
      <div>
          <Button 
          onClick={onClick}
          className="relative group rounded-md flex items-center overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
            <Image
            className="object-cover"
            fill
            src={image}
            alt="Image"
            />

            </div>
            <p className="font-medium truncate py-5 ">
                {name}
            </p>
            <div className="
            absolute
            opacity-0
            transition
            rounded-full
            bg-green-500
            items-center
            justify-center
            flex
            p-4
            drop-shadow-md
            right-5
            group-hover:opacity-100
            hover:scale-110




            ">
            <FaPlay className="text-black"/>
            </div>
          </Button>
      </div>
      );
  }
  
  export default ListItem;