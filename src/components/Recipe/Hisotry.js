import firebaseApp from "../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
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
  
  
  console.log(data)
    
  /* console.log(allRecipes) */
  return <div className="historyTag">
    <h2 className="historyTitle">Historial</h2>
    {loading ? (
      <div>
        <p>Cargando...</p>
      </div>
    ) : (
      <div className="history">
        {data.map(recipe => (
          <div className="historyItem" key={recipe.id}>
            <div className="historyItemLeft">
              <NavLink to={`/recipe/${recipe.id}`}><p className="historyInfo">{recipe.nombre}</p></NavLink>
              <NavLink to={`/recipe/${recipe.id}`}><p className="historyInfo">{recipe.fecha}</p></NavLink>
             </div>
           </div>
        ))}
        </div>   
    )}

  </div>;
};

export default Hisotry;
