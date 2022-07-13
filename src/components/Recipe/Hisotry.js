import firebaseApp from "../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const firestore = getFirestore(firebaseApp);



const  Hisotry =    () => {
   const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
  const allRecipes = getDocs( collection (firestore, "recetas"));
  allRecipes.then(recipes => {
    setData(recipes.docs.map(doc => doc.data()));
  });
  setLoading(false);
  }, []);
  
  
  
    
  
  return <div className="historyTag">
    <h1 className="historyTitle">Historial</h1>
    <div className="historyContainer">
      <p className="historyInfo">
        Nombre
      </p>
      <p className="historyInfo">Fecha</p>
     
      </div>
       <span className="divisorHistory"></span>

    {loading ? (
      <div>
        <p className="historyTitle">No hay cocciones</p>
      </div>
    ) : (
      <div className="history">
        {data.length > 0 ?  data.map(recipe => (
          <div className="historyItem" key={recipe.id}>
            <div className="historyItemLeft">
              <NavLink to={`/recipe/${recipe.id}`}><p className="historyInfo">{recipe.nombre}</p></NavLink>
              <NavLink to={`/recipe/${recipe.id}`}><p className="historyInfo">{recipe.fecha}</p></NavLink>
             </div>
           </div>
        )) : <p className="historyInfo">Cargando datos....</p>}
        
        </div>   
    )}

  </div>;
};

export default Hisotry;
