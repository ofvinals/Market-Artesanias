# Endpoints

*Raiz*
```txt
http://localhost:3001
```

Recurso *Usuario*:
```txt
{raiz}/Registro
```

Recurso *Login*
```txt
{raiz}/Login
```

Recurso *Producto*
```txt
{raiz}/Producto
```

Recurso *Categoria*
```txt
{raiz}/Categoria
```

Recurso *Tienda*
```txt
{raiz}/Tienda
```

---

# Metodos HTTP:

### Operaciones `Registro`

```txt
// Registrarse con un usuario
POST /Registro
{
      "Nombre": "Javier",
      "Apellido": "Pignataro",
      "Email": "mail@gmail.com",
      "Contraseña": "123456789"
}


```


### Operaciones `Login`

```txt
// Logearse con un mail (devuelve JWT)
POST /Login
{
      "Email": "mail@gmail.com",
      "Contraseña": "123456789"
}
```


### Operaciones de `Usuario`

```txt
# Obtener todos los usuarios
Authorization: Bearer <JWT>
GET /Usuario

# Obtener usuario por id ( un unico usuario ) o Detalle de Usuario (ID)
Authorization: Bearer <JWT>
GET /Usuario/{id}

# Editar / Modificar un usuario Por ID
Authorization: Bearer <JWT>
PATCH /Usuario/{id}
{
      "Nombre": "Michael",
      "Apellido": "Jackson",
      "Genero": "Masculino",
      "FechaNacimiento": "2024-04-13T22:17:12.837Z",
      "Ubicacion": "Indiana, US"
}
```


### Operaciones `Producto`

```txt
// Recuperar todos los productos
GET /Producto

// Recuperar un producto por ID
GET /Producto/{id}

// Crear un nuevo Producto
POST /Producto
Content-Type: application/json
{
      "Nombre": "Maceta",
      "Imagen": "https://url.com.ar",
      "Disponible": 1,
      "Precio": 13.55,
      "Descripcion": "Un recipiente para plantar flores",
      "Activo": true,
      "StoreId": 1,
      "CategoryId": 1,
}
```


### Operaciones `Categoria` (working on)

```txt
{raiz}/Categoria
```


### Operaciones `Tienda`

```txt
// Crear una tienda
Authorization: Bearer <JWT>
POST /Tienda
{
      "Nombre": "Almacen de amor",
      "Imagen": "http://urlfalsa.ultra.falsa"
}

// Recuperar una tienda
Authorization: Bearer <JWT>
GET /Tienda

// Eliminar una tienda
Authorization: Bearer <JWT>
DELETE /Tienda/{id}
```

