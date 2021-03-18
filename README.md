# Extructura HTML

    * Selección de opciones
        Mostrar tres opciones disponibles
    * Sección de resultados
        Debe tener dos input:image sin src
        Debe tener un heading para mostrar el resultado del match
    * Footer
        Debe contener nombre autor y año
        Debe tener icono repo
        Debe tener icono red social

----------------

# Estilado básico
    
    * centrar elementos
    * selecionar fuente
    * elegir colores de fondo

----------------

# Logica de juego

    # Logica sin seleción externa

        * setear las opciones a elegir 
            ["piedra", "papel", "tijeras"]
        * Elecciones serán por indice en lista anterior (indexOf)
        * Computadora tiene opcion random entre las posibles
            Math.floor(Math.random() * 3);  (obtiene numero entre 0 y 2) --> indice_computadora
        * setear posibilidades
            Empate
                Cuando ambas opciones son iguales
            Ganas - Pierdes
                R > T
                T > P
                P > R
        * manejar las posibilidades
            ["piedra", "papel", "tijeras"] ["piedra", "papel", "tijeras"] ["piedra", "papel", "tijeras"]
                0    >   1     >  2     (indices)
            gana izquierda - pierde derecha

            indice_usuario === indice_computadora -> Empate
                indice_usuario === 0 -> piedra  || indice_usuario === 1 -> papel || indice_usuario === 2 -> tijeras (--> indice_computadora +3)
                    indice_computadora -1 === indice_usuario
                        pierde
                    sino
                        gana    

        # Logica con selección externa

            # Usuario elige boton y opción para la lógica 
                * setear onclick - pasar value a la función
                * tomar el valor y sacar el indice de la lista de opciones
            # Mostrar resultados
                # Dar src a los input:image en la Sección de resultados acorde a las opciones elegidas
                # Mostrar leyenda en heading del resultado del match (en heading creado en seccion de resultados)
                # Esconder opciones a elegir y solo mostrar resultados
                # Reset game
                    Esconde seccion de resultados
                    Muestra la seccion de opciones a elegir para continuar juego

----------------

# Estilado final
    * Ver sección "# Mostrar resultados"
    * sitio debe ser responsive
    * refinar estilo/agregar animaciones