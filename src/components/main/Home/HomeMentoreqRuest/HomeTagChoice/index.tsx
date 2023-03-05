import { Dev } from "../devlogo";
import { useHomeTagChoice } from "../../../../../hooks/home/HomeTagChoice/useHomeTagChoice";
import { Tag } from "../../../../../recoil/home/HomeAtom";
import { useRecoilState } from "recoil";

export default function HomeTagChoice(){
    
    const { onClick } = useHomeTagChoice();
    const [tag, SetTag] = useRecoilState<string>(Tag);

    return(
        <>
            {
                Dev.map((dev)=>
                <div key={dev.name} onClick={()=>onClick(dev.name)}>
                    <img style={{cursor:'pointer'}} src={tag === dev.name ? dev.logo2 : dev.logo} alt={dev.name} />
                </div>)
            }
        </>
    );
}