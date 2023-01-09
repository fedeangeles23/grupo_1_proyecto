import React from 'react'

function IniciarSesion() {
    return (
        <body class="login">

            <main>
                <h1>Iniciá sesión</h1>
                <form action="" method="post">
                    <div class="container bottom">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Ingresa tu email" />
                    </div>
                    <div class="container bottom">
                        <label for="name">Contraseña</label>
                        <div class="password">
                            <input type="password" name="pass" id="pass" placeholder="Ingresa tu contraseña" />
                        </div>
                    </div>
                    <div class="button">
                        <button type="submit" class="spacing">INICIAR SESIÓN</button>
                        <p>¿Has olvidado tu contraseña?</p>
                        <p>¿No tenés una cuenta en nuestra página?</p>
                        <p><a class="link" href="/registro">Registrate aquí</a></p>
                    </div>
                </form>
            </main>

        </body>
    )
}

export default IniciarSesion