import functions from "../../functions/Math";
import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import './styles.css'
const Sugar = () => {
  const [qty, setQty] = useState(0);

  return (
    <div className="sugarContainer">
      <h2 className="sugarTitle">Calculadora de azucar</h2>
      <div className="sugarForm">
        <Formik
          initialValues={{
            beerQty: 0,
          }}
          validate={(values) => {
            const errors = {};

            if (!values.contenedor) {
              errors.contenedor = "Required";
            } else if (values.contenedor < 0) {
              errors.contenedor = "Must be positive";
            }
    
            if (!values.beerQty) {
              errors.beerQty = "Required";
            } else if (values.beerQty < 0) {
              errors.beerQty = "Must be positive";
            }

            if (!values.densidad) {
              errors.densidad = "Required";
            } else if (values.densidad < 0) {
              errors.densidad = "Must be positive";
            }

            return errors;
          }}
          onSubmit={(values) => {
           
            setQty(functions.sugar(values.contenedor,values.beerQty,values.densidad));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <label>Peso del contenedor vacio:</label>
              <input type="number" placeholder="0"
                onChange={handleChange}
                step="0.01"
                name="contenedor"
                className="beerQty" />
                <ErrorMessage name="beerQty" />
              <label>Peso del contenedor con cerveza:</label>
              <input type="number" placeholder="0"
                onChange={handleChange}
                step="0.01"
                name="beerQty"
                className="beerQty" />
                <ErrorMessage name="beerQty" />
              <label>Densidad de la cerveza:</label>
              <input type="number" placeholder="0"
                step="0.01"
                onChange={handleChange}
                name="densidad"
                className="beerQty" />
                <ErrorMessage name="beerQty" />
              <button type="submit" className="submitButton">Calcular</button>
            </Form>
          )}
        </Formik>
        <hr />
        <p className='totalStyle'>Total de litros: {qty[0]}lts</p>
        <p className='totalStyle'>Total: {qty[1]}gm</p>
      </div>
    </div>
  );
};

export default Sugar;
