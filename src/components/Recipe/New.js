import firebaseApp from "../../firebase";
import "./recipe.css";
import { Formik, Form, ErrorMessage } from "formik";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
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

  const [grainKg, setGrainKg] = useState(0);
  const [mashTime, setMashTime] = useState(0);
  const [boilTime, setBoilTime] = useState(0);
  const [amargor , setAmargor] = useState(0);
  const [sabor , setSabor] = useState(0);
  const [aroma , setAroma] = useState(0);


  return (
    <div className="newRecipe">
      <h2 className="newRecipeMainTitle">Nueva Cocción</h2>
      <h3 className="newRecipeTitle">Datos de receta</h3>
      <Formik
        initialValues={{
          fecha: date,
          nombre: "",
          kg: 0,
          dir: 0,
          time: 0,
          lupulo: 0,
          lupuloamargor: 0,
          lupulosabor: 0,
          lupuloaroma: 0,
          dic: 0,
          dlavado: 0,
          phprehervido: 0,
          boilingtime: 0,
          timerlupuloamargor: 0,
          timerlupulosabor: 0,
          timerlupuloroma: 0,
          phfinalcoccion: 0,
        }}
        validate={(values) => {
          const errors = {};
          console.log(errors)
          if (!values.nombre) {
            errors.nombre = "Requerido";
          }
          if (!values.kg) {
            errors.kg = "Requerido";
          }
          if (!values.dir) {
            errors.dir = "Requerido";
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
          if (!values.dlavado) {
            errors.dlavado = "Requerido";
          }
          if (!values.phprehervido) {
            errors.phprehervido = "Requerido";
          }
          if (!values.timerlupuloamargor) {
            errors.timerlupuloamargor = "Requerido";
          }
          if (!values.timerlupulosabor) {
            errors.timerlupulosabor = "Requerido";
          }
          if (!values.timerlupuloroma) {
            errors.timerlupuloroma = "Requerido";
          }
          if (!values.phfinalcoccion) {
            errors.phfinalcoccion = "Requerido";
          }
          if (!values.boilingtime) {
            errors.boilingtime = "Requerido";
          }
          
          return errors;
        }}
        onSubmit={(values) => {
          console.log('hola')
          console.log(values);
          const docuref = doc(firestore, "recetas", values.nombre);
          setDoc(docuref, values);
          
        }}
      >
        {({ handleChange }) => (
          <Form>
            <div className="newRecipeForm">
              <label className="newRecipeLabel">Tipo de cerveza</label>
              <input
                type="text"
                onChange={handleChange}
                name="nombre"
                id="name"
                className="nameInput"
                placeholder="Ej. IPA"
              />
              <ErrorMessage name="nombre" component="span" className="error" />
              <label className="newRecipeLabel">Cantidad de granos</label>
              <input
                type="number"
                onChange={(e) => {
                  setGrainKg(e.target.value);
                  handleChange(e);
                }}
                name="kg"
                id="kg"
                className="kgInput"
                placeholder="Ej. 5.5kg"
                step="any"
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
                step="any"
              />
              <ErrorMessage name="dir" component="span" className="error" />
              <label className="newRecipeLabel">Tiempo de macerado </label>
              <input
                type="number"
                onChange={(e) => {
                  setMashTime(e.target.value);
                  handleChange(e);
                }}
                name="time"
                id="time"
                className="timeInput"
                placeholder="Ej. 90 min"
              />
              <ErrorMessage name="time" component="span" className="error" />
              <label className="newRecipeLabel">Cantidad total de lupulo</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupulo"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
                step="any"
              />
              <ErrorMessage name="lupulo" component="span" className="error" />
              <label className="newRecipeLabel">Cantidad de lupulo amargor</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupuloamargor"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
                step="any"
              />
              <label className="newRecipeLabel">Cantidad de sabor</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupulosabor"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
                step="any"
              />
              <label className="newRecipeLabel">Cantidad de aroma</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupuloaroma"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
                step="any"
              />
              <h2 className="newRecipeMainTitle">Cocción</h2>
              <h4 className="newRecipeTitle">1° Parte macerado</h4>
              <label className="newRecipeLabel">Agua para mash</label>
              <KgToLts grainKg={grainKg} />
              <label className="newRecipeLabel">Temporizador macerado</label>
              <Temp time={mashTime} />
              <h4 className="newRecipeTitle">2° Parte lavado de granos</h4>
              <label className="newRecipeLabel">Densidad a 20 lts</label>
              <input
                type="number"
                onChange={handleChange}
                name="dlavado"
                id="dlavado"
                className="dicInput"
                placeholder="Ej. 1.055"
                step="any"
              />
              <ErrorMessage name="dlavado" component="span" className="error" />
              <label className="newRecipeLabel">PH previo a hervido</label>
              <input
                type="number"
                onChange={handleChange}
                name="phprehervido"
                id="phprehervido"
                className="dicInput"
                placeholder="Ej. 5.55"
                step="any"
              />
              <ErrorMessage
                name="phprehervido"
                component="span"
                className="error"
              />
              <h4 className="newRecipeTitle">3° Parte hervido y lupulado</h4>
              <p>Recordar que para 20l son 12cm</p>
              <label className="newRecipeLabel">Tiempo de hervido </label>
              <input
                type="number"
                onChange={(e) => {
                  setBoilTime(e.target.value);
                  handleChange(e);
                }}
                name="boilingtime"
                id="time"
                className="timeInput"
                placeholder="Ej. 60 min"
              />
              <ErrorMessage name="boilingtime" component="span" className="error" />
      
              <Temp time={boilTime} />
              <label className="newRecipeLabel">Lupulo armagor</label>
              <input
                type="number"
                onChange={(e) => {
                  setAmargor(e.target.value);
                  handleChange(e);
                }}
                name="timerlupuloamargor"
                id="time"
                className="timeInput"
                placeholder="Ej. 60 min"
              />
              <ErrorMessage name="timerlupuloamargor" component="span" className="error" />
              <Temp time={amargor} />
              <label className="newRecipeLabel">Lupulo sabor</label>
              <input
                type="number"
                onChange={(e) => {
                  setSabor(e.target.value);
                  handleChange(e);
                }}
                name="timerlupulosabor"
                id="time"
                className="timeInput"
                placeholder="Ej. 60 min"
              />
              <ErrorMessage name="timerlupulosabor" component="span" className="error" />
              <Temp time={sabor} />
              <label className="newRecipeLabel">Lupulo aroma</label>
              <input
                type="number"
                onChange={(e) => {
                  setAroma(e.target.value);
                  handleChange(e);
                }}
                name="timerlupuloroma"
                id="time"
                className="timeInput"
                placeholder="Ej. 60 min"
              />
              <ErrorMessage name="timerlupuloroma" component="span" className="error" />
              <Temp time={aroma} />
              <h4 className="newRecipeTitle">4° Parte mediciones finales de cocción</h4>
              <label className="newRecipeLabel">Densidad final de cocción</label>
              <input
                type="number"
                onChange={handleChange}
                name="dic"
                id="dic"
                className="dicInput"
                placeholder="Ej. 1.055"
                step="any"
              />
              <ErrorMessage name="dic" component="span" className="error" />
              <label className="newRecipeLabel">PH final cocción</label>
              <input
                type="number"
                onChange={handleChange}
                name="phfinalcoccion"
                id="phprehervido"
                className="dicInput"
                placeholder="Ej. 5.55"
                step="any"
              />
              <ErrorMessage
                name="phfinalcoccion"
                component="span"
                className="error"
              />
              <div>
                <button type="submit" className="createButton">
                  Guardar Cocción
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default New;
