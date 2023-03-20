import { ShareSocial } from "react-share-social";
import { useState, Fragment } from "react";
export default function ShareBoton({children}) {
  const [isOpen, setState] = useState(false); 
    const style = {
    root: {
      borderRadius: 3,
      border: 0,
      color: "white",
    },
    copyContainer: {
      width: "20rem", 
      border: "1px solid rgb(0,0,0,0.2)",
      borderRadius:"1rem",
      background: "var(--theme-primary)",
    },
  };
  return (
    <div style={{position:"relative", zIndex:"z-50"}}>
      <span onClick={()=> setState(true)}>
        {children}
      </span>
      {isOpen && (
        <div className="fixed inset-0 bg-black/25 grid place-content-center" 
          onClick={(e)=>{ 
            if(e.target === e.currentTarget){
              setState(false); 
            }
          }}>
          <ShareSocial
            style={style}
            url={window.location.href || "http:localhost:3000/"}
            socialTypes={["twitter","whatsapp","facebook", "reddit", "linkedin", "email"]}
          />
        </div>
      )}
    </div>
  );
}
