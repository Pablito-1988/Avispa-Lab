import firebaseApp from "../../firebase";
import { Formik, Form, ErrorMessage } from "formik";
import {getFirestore, doc, setDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const New = () => {
  const today = new Date(),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
  return (
    <div className="newRecipe">
      <h2 className="newRecipeTitle">Nueva receta</h2>
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
        {({ handleChange }) => (
          <Form>
            <div className="newRecipeForm">
              <label>Tipo de cerveza</label>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                id="name"
                className="nameInput"
                placeholder="Ej. IPA"
              />
              <ErrorMessage name="name" component="span" className="error" />
              <label>Cantidad de granos</label>
              <input
                type="number"
                onChange={handleChange}
                name="kg"
                id="kg"
                className="kgInput"
                placeholder="Ej. 5.5kg"
              />
              <ErrorMessage name="kg" component="span" className="error" />
              <label>Densidad inicial receta</label>
              <input
                type="number"
                onChange={handleChange}
                name="dir"
                id="dir"
                className="dirInput"
                placeholder="Ej. 1.055"
              />
              <ErrorMessage name="dir" component="span" className="error" />
              <label>PH </label>
              <input
                type="number"
                onChange={handleChange}
                name="ph"
                id="ph"
                className="phInput"
                placeholder="Ej. 5.55"
              />
              <ErrorMessage name="ph" component="span" className="error" />
              <label>Tiempo de macerado </label>
              <input
                type="number"
                onChange={handleChange}
                name="time"
                id="time"
                className="timeInput"
                placeholder="Ej. 90 min"
              />
              <ErrorMessage name="time" component="span" className="error" />
              <label>Cantidad de lupulo</label>
              <input
                type="number"
                onChange={handleChange}
                name="lupulo"
                id="lupulo"
                className="lupuloInput"
                placeholder="Ej. 90 g"
              />
              <ErrorMessage name="lupulo" component="span" className="error" />
              <label>Densidad Inicial Cocción</label>
              <input
                type="number"
                onChange={handleChange}
                name="dic"
                id="dic"
                className="dicInput"
                placeholder="Ej. 1.055"
              />
              <ErrorMessage name="dic" component="span" className="error" />
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
