import './Button.css'

/**
 *Props. Propiedades que se pueden asignar a los componetes para modificar el texto, la información desde la renderización del mismo.

 *Se asignan como parámetro de la función con el nombre del prop y debe ir entre llaves.

 *Se manda a llamar en el bloque de código donde se debe  implementar
 utilizando llaves

 {label} es para poder reutilizar el boton con diferente contenido
 
 */
const Button = ({label}) => {
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button