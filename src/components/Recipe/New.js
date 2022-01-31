import firebaseApp from "../../firebase";
import './recipe.css'
import { Formik, Form, ErrorMessage } from "formik";
import {getFirestore, doc, setDoc } from "firebase/firestore";
import {  useState } from "react";
import KgToLts from "./KgToLts";
import Temp from "./Temp";
const firestore = getFirestore(firebaseApp);

const New = () => {
  const today = new Date(),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();

   const [grainKg , setGrainKg] = useState(0);
   const [mashTime , setMashTime] = useState(0);
 

  return (
    <div className="newRecipe">
      <h2 className="newRecipeTitle">Nueva Cocción</h2>
      <h4 className="newRecipeTitle">Datos de receta</h4>
      <Formik
        initialValues={{
          fecha: date,
          name: "",
          kg: 0,
          dir: 0,
          ph: 0,
          time: 0,
          lupulo: 0,
          dic: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Requerido";
          }
          if (!values.kg) {
            errors.kg = "Requerido";
          }
          if (!values.dir) {
            errors.dir = "Requerido";
          }
          if (!values.ph) {
            errors.ph = "Requerido";
          }
          if (!values.time) {
            errors.time = "Requerido";
          }
          if (!values.lupulo) {
            errors.lupulo = "Requerido";
          }
          if (!values.dic) {
            errors.dic = "Requerido";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          const docuref = doc(firestore,'recetas', values.name)
          setDoc(docuref, values)
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <div className="newRecipeForm">
              <label className="newRecipeLabel">Tipo de cerveza</label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                id="name"
                className="nameInput"
                placeholder="Ej. IPA"
              />
              <ErrorMessage name="name" component="span" className="error" />
              <label className="newRecipeLabel">Cantidad de granos</label>
              <input
                type="number"
                onChange={ (e)=>{setGrainKg(e.target.value); handleChange(e)}} 
                name="kg"
                id="kg"
                className="kgInput"
                placeholder="Ej. 5.5kg"
                step='any'
              />
              
              <ErrorMessage name="kg" component="span" className="error" />
              <label className="newRecipeLabel">Densidad inicial receta</label>
              <input
                type="number"
                onChange={handleChange}
                name="dir"
                id="dir"
                className="dirInput"
                placeholder="Ej. 1.055"
                step='any'
              />
              <ErrorMessage name="dir" component="span" className="error" />
              <label className="newRecipeLabel">PH </label>
              <input
                type="number"
                onChange={handleChange}
                name="ph"
                id="ph"
                className="phInput"
                placeholder="Ej. 5.55"
                step='any'
              />
              <ErrorMessage name="ph" component="span" className="error" />
              <label className="newRecipeLabel">Tiempo de macerado </label>
              <input
                type="number"
                onChange={ (e)=>{setMashTime(e.target.value); handleChange(e)}} 
                name="time"
                id="time"
                className="timeInput"
                placeholder="Ej. 90 min"
              />
              <ErrorMessage name="time" component="span" className="error" />
              <label className="newRecipeLabel">Cantidad de lupulo</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupulo"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
                step='any'
              />
              <ErrorMessage name="lupulo" component="span" className="error" />
              <label className="newRecipeLabel">Densidad Inicial Cocción</label>
              <input
                type="number"
                onChange={handleChange}
                name="dic"
                id="dic"
                className="dicInput"
                placeholder="Ej. 1.055"
                step='any'
              />
              <ErrorMessage name="dic" component="span" className="error" />
              <h3 className="newRecipeTitle">Cocción</h3>
              <h4 className="newRecipeTitle">1° Parte macerado</h4>
              <label className="newRecipeLabel">Agua para mash</label>
              <KgToLts grainKg= {grainKg} />
              <label className="newRecipeLabel">Temporizador</label>
              <Temp time= {mashTime} />
              <div>
                <button type="submit">Crear Coccion</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default New;
