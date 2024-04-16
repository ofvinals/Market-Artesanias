# Endpoints

*Raiz*
```http
http://localhost:3001
```

Recurso *Usuario*:
```http
{raiz}/Registro
```

Recurso *Login*
```http
{raiz}/Login
```

Recurso *Producto*
```http
{raiz}/Producto
```

Recurso *Categoria*
```http
{raiz}/Categoria
```

Recurso *Tienda*
```http
{raiz}/Tienda
```

---

# Metodos HTTP:

### Operaciones `Registro`

```json
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

```json
// Logearse con un mail (devuelve JWT)
POST /Login
{
      "Email": "mail@gmail.com",
      "Contraseña": "123456789"
}
```


### Operaciones `Producto`

```json
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

```http
{raiz}/Categoria
```

### Operaciones `Tienda`

```json
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
