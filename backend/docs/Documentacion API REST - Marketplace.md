# Endpoints

**Raiz** <<<
```txt
http://localhost:3001
```

Recurso **Registro**
```txt
{raiz}/Registro
```

Recurso **Login**
```txt
{raiz}/Login
```

Recurso **Usuario**
```txt
{raiz}/Usuario
```

Recurso **Producto**
```txt
{raiz}/Producto
```

Recurso **Categoria**
```txt
{raiz}/Categoria
```

Recurso **Tienda**
```txt
{raiz}/Tienda
```

---

# Metodos HTTP:

### Operaciones `Registro`

```txt
# Registrarse con un usuario
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
# Logearse con un mail (devuelve JWT)
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
```

```
# Obtener usuario por id ( un unico usuario ) o Detalle de Usuario (ID)
Authorization: Bearer <JWT>
GET /Usuario/{id}
```

```
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

```txt
# Editar / Modificar un usuario Por ID
Authorization: Bearer <JWT>
DELETE /Usuario/{id}
```



### Operaciones `Producto`

```txt
# Recuperar todos los productos
Authorization: Bearer <JWT>
GET /Producto
```

```
# Recuperar un producto por ID
Authorization: Bearer <JWT>
GET /Producto/{id}
```

```
### Crear un nuevo Producto (Corregir)
Authorization: Bearer <JWT>
POST /Producto
{
      "Nombre": "Maceta",
      "Disponible": 1,
      "Precio": 13.55,
      "Cantidad": 50,
      "Imagen": "https://url.com.ar",
      "Descripcion": "Un recipiente para plantar flores",
      "Genero": "Femenino",
      "StoreId": 1,
      "CategoryId": 1
}
```


### Operaciones `Categoria` (working on)

```txt
### Recuperar todas las categorias
Authorization: Bearer <JWT>
GET /Categoria
```

```txt
### Crear una nueva categoria (recurso / registro en db)
Authorization: Bearer <JWT>
POST /Categoria
{
      "Nombre": "Accesorios"
}
```


### Operaciones `Tienda`

```txt
# Crear una tienda
Authorization: Bearer <JWT>
POST /Tienda
{
      "Nombre": "Almacen de amor",
      "Imagen": "http://urlfalsa.ultra.falsa"
}
```

```
# Recuperar TODAS las tiendas
Authorization: Bearer <JWT>
GET /Tienda
```

```txt
### Recuperar una tienda por ID (el detalle de UNA tienda con TODOS SUS PRODUCTOS)
Authorization: Bearer <JWT>
GET /Tienda/{id}
```

```txt
### Modificar una tienda
Authorization: Bearer <JWT>
PUT /Tienda
{
      "Id": "1",
      "Nombre": "Verduleria de la pasion",
      "Imagen": "google"
}
```

```
# Eliminar una tienda
Authorization: Bearer <JWT>
DELETE /Tienda/{id}
```


### Operaciones `Transaccion`

```txt
### Crear Transaccion
Authorization: Bearer <JWT>
POST /Transaccion
{
      "Titulo": "Maceta",
      "UserId": 1,
      "ProductId": 1,
      "StoreId": 1,
      "CategoryId": 1,
      "FechaCompra": "2024-04-13T22:17:12.837Z",
      "Cantidad": 5,
      "PrecioTotal": 500.0
}
```

```
### Obtener TRANSACCIONES
Authorization: Bearer <JWT>
GET /Transaccion
```

```
### Obtener TODAS las COMPRAS de un usuario {ID}
Authorization: Bearer <JWT>
GET /Transaccion/Compra/1
```
