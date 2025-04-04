# Prompt Requerimientos funcionales y no funcionales
Private: https://claude.ai/chat/a72c6e41-3948-46ce-a117-81343f5ced40
Shared: https://claude.ai/share/82d77002-0a30-43a5-b4d3-274780ee2f79

Eres un experto en pruebas de software. Toma la siguiente idea de proyecto como referencia "Una aplicación en React y usando Visual Code como IDE la cual permitira generar “quizzes” con preguntas de conceptos básicos del Testing (ISTQB Foundation Level)" y genera los requerimientos funcionales y no funcionales posibles en formato de tabla con las siguientes columnas: Id, Titulo, Descripcion del Requerimiento, Tipo de Requerimiento. Para las columnas que no se tenga certeza de su valor infiere un resultado posible. El total de la suma de los requerimientos tanto funcionales como no funcionales no debe de exceder de 15.


# Prompt Casos de Prueba de Aceptación
Private: https://claude.ai/chat/a72c6e41-3948-46ce-a117-81343f5ced40
Shared: https://claude.ai/share/82d77002-0a30-43a5-b4d3-274780ee2f79

Toma la anterior tabla de requerimientos funcionales y no funcionales como referencia y genera todos los casos de prueba de aceptacion posibles en formato de tabla con las siguientes columnas: IdCaso, IdRequerimiento, Titulo, Precondiciones, Pasos de prueba, Resultado esperado, Datos de Prueba, Resultado real, Estado de la prueba. Para las columnas que no se tenga certeza de su valor infiere un resultado posible. La columna IdRequerimiento debe indicar a que ID de requerimiento pertenece el caso de prueba.


# Prompt Ejecución Pruebas de Aceptación vs Requerimientos Inválidos
Private: https://claude.ai/chat/a72c6e41-3948-46ce-a117-81343f5ced40
Shared: https://claude.ai/share/82d77002-0a30-43a5-b4d3-274780ee2f79 

Toma este archivo de requerimientos funcionales y no funcionales y ejecuta todos los casos de prueba de aceptacion para la aplicacion de quizzes ISTQB. Si algun caso de prueba llega a fallar genera una tabla de errores con estas columnas: IdError, Titulo del Error, Gravedad del Error, Priorizacion del Error, Pasos para Reproducirlo, IdCaso. Para las columnas que no se tenga certeza de su valor, infiere un resultado posible. La columna IDCaso debe indicar a que ID de caso de prueba pertenece el error.


# Prompt Generación de Casos de Uso
Private: https://claude.ai/chat/a72c6e41-3948-46ce-a117-81343f5ced40
Shared: https://claude.ai/share/82d77002-0a30-43a5-b4d3-274780ee2f79 

Toma como referencia el documento Requerimientos para aplicación de quizzes de Testing ISTQB y genera todos los casos de uso posibles en formato de tabla con las siguientes columnas: IDCasoUso, Titulo Caso de Uso, Descripción, Tipo, IDRequerimiento. Para las columnas que no se tenga certeza de su valor, infiere un resultado posible. La columna IDRequerimiento debe indicar a que ID de Requerimiento pertenece el caso de uso. La columna Tipo debe indicar si es Funcional o No Funcional. El total de la suma de los caso de uso tanto funcionales como no funcionales no debe de exceder de 15. Y debe existir un caso de uso como minimo para cada requerimiento.


# Prompt Generación de Interfaces de Usuario
Private: https://claude.ai/chat/a72c6e41-3948-46ce-a117-81343f5ced40
Shared: https://claude.ai/share/82d77002-0a30-43a5-b4d3-274780ee2f79

Toma como referencia el documento Requerimientos para aplicación de quizzes de Testing ISTQB y genera prototipos de diseño de Interfaces de Usuario. Para los elementos UI que no se tenga certeza, infiere un posible diseño.


# Prompt Generación de Casos de Prueba de Sistema
Private: https://claude.ai/chat/ab786b7b-84a3-4791-8377-6bbe6c5a0d10
Shared: https://claude.ai/share/2728ac0b-4700-4dbd-a1c7-999778da5726

Eres un experto en pruebas de software. Toma como referencia los siguientes documentos de requerimientos funcionales y no funcionales asi como de Casos de Uso y genera todos los casos de prueba de SISTEMA posibles en formato de tabla con las siguientes columnas: IdCaso, Titulo, Precondiciones, Pasos de prueba, Resultado esperado, Datos de Prueba, Resultado real, Estado de la prueba. Para las columnas que no se tenga certeza de su valor infiere un resultado posible. Debe existir como minimo un caso de prueba de sistema para cada uno de los requerimientos y casos de uso.


# Prompt Ejecución Pruebas de Sistema vs Casos de Uso + Interfaces de Usuario Inválidas
Private: https://claude.ai/chat/ab786b7b-84a3-4791-8377-6bbe6c5a0d10
Shared: https://claude.ai/share/2728ac0b-4700-4dbd-a1c7-999778da5726

Toma estos archivos de Casos de Uso e Interfaces de Usuario y ejecuta todos los casos de prueba de sistema. Si algun caso de prueba llega a fallar genera una tabla de errores con estas columnas: IdError, Titulo del Error, Gravedad del Error, Priorizacion del Error, Pasos para Reproducirlo, IdCaso. Para las columnas que no se tenga certeza de su valor, infiere un resultado posible. La columna IDCaso debe indicar a que ID de caso de prueba pertenece el error.


# Prompt Generación Diagrama de Infraestructura del Sistema
Private: https://claude.ai/chat/6ef7f84d-7626-4855-94aa-c0267d0a82ce
Shared: https://claude.ai/share/d69d54e8-2873-4031-8bdd-cef45f522fc4 

Toma como referencia el siguiente documento de requerimientos funcionales y no funcionales y genera el DIAGRAMA DE INFRAESTRUCTURA DEL SISTEMA. Para los componentes de infraestructura que no se tenga certeza infiere un resultado posible.


# Prompt Generación Diagrama de Componentes
Private: https://claude.ai/chat/6ef7f84d-7626-4855-94aa-c0267d0a82ce
Shared: https://claude.ai/share/d69d54e8-2873-4031-8bdd-cef45f522fc4 

Toma como referencia el documento de requerimientos funcionales y no funcionales y genera el DIAGRAMA DE COMPONENTES DEL SISTEMA. Para los componentes de de sistema que no se tenga certeza infiere un resultado posible.


# Prompt Generación Diagrama de Bases de Datos
Private: https://claude.ai/chat/6ef7f84d-7626-4855-94aa-c0267d0a82ce
Shared: https://claude.ai/share/d69d54e8-2873-4031-8bdd-cef45f522fc4 

Toma como referencia el documento de requerimientos funcionales y no funcionales y genera el DIAGRAMA DE BASE DE DATOS


# Prompt Casos de Prueba de Integración
Private: https://claude.ai/chat/142d4769-a87a-486a-8e4b-c9646efe729f
Shared: https://claude.ai/share/136f0efd-52f3-4757-a1cd-119df1149f38

Eres un experto en pruebas de software. Toma como referencia los siguientes diagramas de componentes de sistema y base de datos y genera todos los casos de prueba de integración posibles en formato de tabla con las siguientes columnas: IdCaso, Titulo, Precondiciones, Pasos de prueba, Resultado esperado, Datos de Prueba, Resultado real, Estado de la Prueba. Para las columnas que no se tenga certeza de su valor infiere un resultado posible. El limite de casos de prueba es de 20.


# Prompt Ejecución Pruebas de Integración vs Diagramas de Arquitectura Inválidos
Private: https://claude.ai/chat/142d4769-a87a-486a-8e4b-c9646efe729f
Shared: https://claude.ai/share/136f0efd-52f3-4757-a1cd-119df1149f38

Toma estos diagramas de arquitectura y ejecuta todos los Integration Test Cases for ISTQB Quiz System. Si algun caso de prueba llega a fallar genera una tabla de errores con estas columnas: IdError, Titulo del Error, Gravedad del Error, Priorizacion del Error, Pasos para Reproducirlo, IdCaso. Para las columnas que no se tenga certeza de su valor, infiere un resultado posible. La columna IDCaso debe indicar a que ID de caso de prueba pertenece el error.


# Prompt Generación Diagrama de Clases y de Flujo
Private: https://claude.ai/chat/142d4769-a87a-486a-8e4b-c9646efe729f
Shared: https://claude.ai/share/136f0efd-52f3-4757-a1cd-119df1149f38

Toma como referencia el siguiente documento de requerimientos funcionales y no funcionales y genera el Diagrama de Clases y el Diagrama de Flujo del SISTEMA.


# Prompt Generacion Casos de Prueba Unitaria
Private: https://claude.ai/chat/142d4769-a87a-486a-8e4b-c9646efe729f
Shared: https://claude.ai/share/136f0efd-52f3-4757-a1cd-119df1149f38

Toma como referencia los DIAGRAMAS DE CLASE Y DE FLUJO y genera todos los casos de prueba unitarias posibles en formato de tabla con las siguientes columnas: IdCaso, Titulo, Precondiciones, Pasos de prueba, Resultado esperado, Datos de Prueba, Resultado real, Estado de la prueba. Para las columnas que no se tenga certeza de su valor infiere un resultado posible. El limite de casos de prueba es de 15.


# Prompt Generación Código Funcional
## Claude
Private: https://claude.ai/chat/4103b319-f8f9-4540-bc8c-aa44603a69ba
Shared: https://claude.ai/share/54b1cb29-092f-4648-8c82-1d9461eb2d61 

Toma la siguiente interfaz de usuario y genera el componente .js y su css en React para ser utilizado en un quiz. Las preguntas estan predefinidas en un array llamado "questions".

## Copilot
Evidencia del Prompt en la Presentacion Slide #31


# Prompt Generación de Código de Pruebas Unitarias
## Copilot
Evidencia del Prompt en la Presentacion Slide #32


# Prompt Clasificar Errores por Grado de Severidad y Tipo de Error 
Private: https://claude.ai/chat/4103b319-f8f9-4540-bc8c-aa44603a69ba
Shared: https://claude.ai/share/54b1cb29-092f-4648-8c82-1d9461eb2d61 

toma el siguiente archivo PDF y asigna a cada error registrado su grado de severidad y a que tipo de error pertenece. Genera una tabla con los errores clasificados, la tabla debe contener 2 columnas adicionales llamadas "Grado Severidad" y "Tipo de Error".