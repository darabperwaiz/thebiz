// import style from "./card.module.css";
// import { BsPlusLg } from "react-icons/bs";
// import { BsDashLg } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn";
// import Image from "next/image";

// export const Card = ({data, index}) => {
//     const [isActive, setIsActive] = useState(false)
//     const handleClick = (index) => {
//           setIsActive((prev)=> !prev)
//     }

//     useEffect(() => {
//         if(index===1 || index===7) {
//             setIsActive(true)
//         }
//         // return () => {
            
//         // };
//     }, [index]);
//   return (
//     <div className={style.card}>
//       <div className={style.cardLeft}>
//         <Image className={style.icons} src={`/assets/images/serviceIcons/${data.src}`} alt="" width={25} height={25} />
//         <p>{data.title}</p>
//       </div>
//       <div className={isActive? `${style.hide} ${style.cardRight}` : `${style.hide}`}>
//         <div className={''}>
//           <p>
//             {data.description}
//           </p>
//           <LearnMoreBtn text={"learn more"} url={"#"} color={"blue"} />
//         </div>
        
//       </div>
//       <div className={style.cardToggleBtn} onClick={()=> handleClick(index)}>
//         {/*  */}
//         {isActive ? <BsDashLg style={{color: "#707070"}}/> : <BsPlusLg style={{color: "#4285F4"}}/>}
          
//         </div>
//     </div>
//   );
// };


// Card.jsx
import style from "./card.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { LearnMoreBtn } from "../learnMoreBtn/LearnMoreBtn";
import Image from "next/image";

export const Card = ({ data, index, isActive, onClick }) => {
  return (
    <div className={style.card}>
      <div className={style.cardLeft}>
        <Image 
          className={style.icons} 
          src={`/assets/images/serviceIcons/${data.src}`} 
          alt="" 
          width={25} 
          height={25} 
        />
        <p>{data.title}</p>
      </div>
      <div className={isActive ? `${style.cardRight}` : `${style.hide}`}>
        <div>
          <p>{data.description}</p>
          <LearnMoreBtn text={"learn more"} url={"#"} color={"blue"} />
        </div>
      </div>
      <div 
        className={style.cardToggleBtn} 
        onClick={() => onClick(index)}
      >
        {isActive ? 
          <BsDashLg style={{color: "#707070"}}/> : 
          <BsPlusLg style={{color: "#4285F4"}}/>
        }
      </div>
    </div>
  );
};
