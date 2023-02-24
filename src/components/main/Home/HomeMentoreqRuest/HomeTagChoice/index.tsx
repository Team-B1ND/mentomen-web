import { Dev } from "../devlogo";
import { useHomeTagChoice } from "../../../../../hooks/home/HomeTagChoice/useHomeTagChoice";

export default function HomeTagChoice(){
    
    const { onClick } = useHomeTagChoice();

    return(
        <>
            {
                Dev.map((dev)=>
                    <div key={dev.name} onClick={()=>onClick(dev.name)}>
                        <img style={{cursor:'pointer'}} src={dev.logo} alt={dev.name}/>
                    </div>
                )
            }
        </>
    );
}