#!/bin/bash

# Verifica si se pasó un mensaje de commit como argumento
if [ -z "$1" ]; then
  echo "Error: Debes proporcionar un mensaje para el commit."
  echo "Uso: $0 <mensaje-del-commit>"
  exit 1
fi

# Guarda el mensaje del commit en una variable
COMMIT_MESSAGE="$1"

# Agrega todos los cambios
git add .

# Hace el commit con el mensaje proporcionado
git commit -m "$COMMIT_MESSAGE"

# Envía los cambios al repositorio remoto
git push

# Muestra un mensaje de éxito
echo "Cambios agregados, commiteados y enviados correctamente."
