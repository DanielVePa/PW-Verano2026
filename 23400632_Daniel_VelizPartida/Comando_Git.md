# Lista de comandos de github y para que se utilizan

# 1. git init
  - sirve para iniciar git en la carpeta donde esta el proyecto
  - ejemplo de caso de uso:
  - mkdir MiProyecto
  - cd MiProyecto
  - git init

# 2. git clone <url>
  - sirve para clonar un repositorio de github
  - ejemplo de caso de uso
  - git clone https://github.com/usuario/MiProyecto.git ProyectoLocal

# 3. git add
  - sirve para añadir todos lo archivos al commit o para guardar los cambios
  - ejemplo: git add . (en este caso agrega todos los archivos)
  - git add README.md (agrega un archivo en especifico)

# 4. git push origin master
  - sirve para subir el repositorio
  - git add . (se añade un archivo)
  - git commit -m "Agrega la página de inicio" (se guarda un cambio)
  - git push origin master (se manda el commit al repositorio remoto)

# 5. git log
  - muestra el historial de los commits o guardados o versiones
  - git add .
  - git commit -m "Actualiza el README"
  - git log (muestra el historial de cambios)

# 6. git diff o git diff --staged
  - muestra los cambios realizados a un archivo
  - echo "Nueva línea" >> README.md
  - git add README.md
  - git diff --staged

# 7. git reset HEAD <nombre archivo>
  - sirve para sacar un archivo del commit
  - por ejemplo si subiste un archivo a commit que no deberias puedes quitarlo del commit con el siguiente comando de ejemplo:
  - git reset HEAD config.txt

# 8. git remote add origin <url>
  - sirve para agregar un repositorio remoto
  - cuando ya se tiene un proyecto con archivos puedes enlazarlo tu repositorio local a un repositorio remoto para que tus compañeros puedan acceder a el
  - ejemplo: git remote add origin https://github.com/usuario/MiProyecto.git

# 9. git remote -v
  - muestra la lista de los repositorios
  - este se puede utilizar para cuando ya vinculaste el repositorio local con el remoto para verificar que este configurado correctamente

# 10. git remote rm <name/origin>
  - sirve para remover un repositorio
  - este sirve para casos en los que te equivocaste al vincular un repositorio local a uno remoto y quieres eliminarlo para configurarlo correctamente
  - ejemplo: git remote rm origin

# 11. git remote show origin
  - muestra los branches remotos
  - este lo pueden usar para verificar los datos detallados de un repositorios y asi ver que todo esta en orden

# 12. git branch <Name>
  - sirve para crear un branch
  - esto se utiliza cuando se quiere desarrollar una nueva funcionalidad sin que afecte el codigo estable 

# 13. git branch
  - sirve para ver la lista de los branches
  - se utiliza para confirmar que el branch se creo correctamente en el comando anterior

# 14. git branch -d <Name>
  - comando -d que elimina el branch y lo une al master
  - suponiendo que ya se creo el branch login y ya se trabajo y ya no se necesita se puede eliminar para que no ocupe espacio
  - ejemplo: git branch -d login

# 15. git branch -D <Name>
  - Elimina sin preguntar
  - hay casos en lo que el anterior comando no permite eliminar el branch por lo que este lo elimina definitivamente sin pedir nada mas

# 16. git tag
  - muestra una lista de todos los tags
  - por ejemplo es bastante comun que se utilicen las etiquetas para separar versiones: v1,v2,v3...

# 17. git status
  - lista un estado actual del repositorio con la lista de archivos modificados o agregados
  - se suele usar para ver cuales archivos estan listos para subirse con el commit y cuales 

# 18. git pull origin <nameBranch>
  - busca los cambios nuevos y actualiza el repositorio
  - suponiendo que varias personas estan trabajando en un mismo repositorio y una persona sube cambios se usa para que tu puedas ver los cambios ya puestos
  - ejemplo: git pull origin main

# 19. git fetch
  - verifica los cambios en el repositorio online con el local
  - este suele utilizarse cuando quieres ver si alguien ha subidos nuevas actualizaciones pero sin integrarlas todavia

# 20. git rm <archivo>
  - sirve para borrar un archivo del repositorio
  - suele usarse cuando quieres eliminar un archivo del repositorio ademas de agregarlo al commit ya sea porque no se necesite o se haya creado por error
