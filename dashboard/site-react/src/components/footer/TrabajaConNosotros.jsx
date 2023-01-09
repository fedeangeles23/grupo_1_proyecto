import React from 'react'

function TrabajaConNosotros() {
    return (
        <body class="body-trabaja-con-nosotros">

            <h1 class="titulo">Trabajá con nosotros</h1>
            <p class="texto">Si te interesa desarrollar su carrera laboral en una empresa en pleno crecimiento, ElectroHogar tiene una oportunidad para vos.</p>
            <p class="texto">Para participar de las búsquedas de personal que hacemos habitualmente, debes llenar unos datos y podés adjuntra tu CV en el botón más abajo o envialo por mail a seleccion@electroHogar.com</p>

            <h3 class="subtitulo">Datos</h3>

            <div class="datosTrabajaCon">
                <input class="input-style" type="text" name="usuario" placeholder="Nombre y Apellido" />
                <span class="error-message">debes ingresar tu Nombre y Apellido</span>
            </div>

            <div class="datosTrabajaCon">
                <input class="input-style" type="text" name="usuario" placeholder="Gmail" />
                <span class="error-message">debes ingresar tu Gmail</span>
            </div>

            <div class="datosTrabajaCon">
                <input class="input-style" type="text" name="usuario" placeholder="Linkedin" />
                <span class="error-message">debes ingresar tu Linkedin</span>
            </div>

            <h3 class="subtitulo">Adjuntá acá tu CV</h3>

            <div class="cv">
                <label>Seleccionar documento:</label>
                <input type="file" name="cv" accept=".document" multiple />
            </div>
        </body>
    )
}

export default TrabajaConNosotros