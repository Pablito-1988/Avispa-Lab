import { useParams } from "react-router-dom";
import {doc, getDoc , getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react";
import firebaseApp from "../../firebase";
const firestore = getFirestore(firebaseApp);

const Recipe = () => {
    const { id } = useParams();
    
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const recipe = getDoc(doc(firestore, `recetas/${id}`));
        recipe.then(recipe => {
            setRecipe(recipe.data());
        });
        setLoading(false);
    }, [id]);
    console.log(recipe)
  return <div className="recipeTag">
    {loading ? (
        <div>
            <p>Cargando...</p>
        </div>
    ) : (
        <div>
            <h1>{recipe.nombre}</h1>
            <p className='recipeInfo'>Fecha de cocción: {recipe.fecha}</p>
            <p className='recipeInfo'>Cantidad de granos: {recipe.kg}kg</p>
            <p className='recipeInfo'>Cantidad de lupulos: {recipe.lupulo}g</p>
            <p className='recipeInfo'>Cantidad de lupulo amargor: {recipe.lupuloamargor}g</p>
            <p className='recipeInfo'>Cantidad de lupulo aroma: {recipe.lupuloaroma}g</p>
            <p className='recipeInfo'>Timer lupulo aroma: {recipe.timerlupuloroma}min</p>
            <p className='recipeInfo'>Cantidad de lupulo sabor: {recipe.lupulosabor}g</p>
            <p className='recipeInfo'>Timer lupulo sabor: {recipe.timerlupulosabor}min</p>
            <p className='recipeInfo'>Densidad inicial receta: {recipe.dir}</p>
            <p className='recipeInfo'>Tiempo de macerado: {recipe.time}min</p>
            <p className='recipeInfo'>Tiempo de cocción: {recipe.boilingtime}min</p>
            <p className='recipeInfo'>Densidad a 20lts: {recipe.dlavado}</p>
            <p className='recipeInfo'>PH previo a hervido: {recipe.phprehervido}</p>
            <p className='recipeInfo'>PH final cocción: {recipe.phfinalcoccion}</p>
            <p className='recipeInfo'>Densidad final cocción: {recipe.dic}</p>

        </div>
    )}
  </div>;
};

export default Recipe;
