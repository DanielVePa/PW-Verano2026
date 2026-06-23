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
sirve para remover un repositorio

# 11. git remote show origin
muestra los branches remotos

# 12. git branch <Name>
sirve para crear un branch

# 13. git branch
sirve para ver la lista de los branches 

# 14. git branch -d <Name>
comando -d que elimina el branch y lo une al master

# 15. git branch -D <Name>
Elimina sin preguntar

# 16. git tag
muestra una lista de todos los tags

# 17. git status
lista un estado actual del repositorio con la lista de archivos modificados o agregados

# 18. git pull origin <nameBranch>
busca los cambios nuevos y actualiza el repositorio

# 19. git fetch
verifica los cambios en el repositorio online con el local

# 20. git rm <archivo>
sirve para borrar un archivo del repositorio
