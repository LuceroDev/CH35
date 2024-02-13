-- Sentencias/querys/comandos basicos de SQL

-- Mostrar las bases de datos almacenadas 

SHOW DATABASES; 



-- Para usar una base de datos en especifico es 
USE taza;


-- Mostrar las tablas 
SHOW TABLES;

/*
DML COMANDOS 
SELECT Nos va a mostrar la informacion que solicitemos 
SELECT nos permite recuperar datos de una base de datos. Es una de las operaciones mas comunes.
SELECT + datosABuscar + From dondeVoyABuscar + condicion o filtro especial
*/
-- Consulta de toda la informacion de una tabla (usando el asterisco)
SELECT * FROM productos;

-- Mostrar un atributo en especifico de mi tabla productos 

SELECT nombre FROM productos;

-- Consultar multiples datos de una tabla 

SELECT nombre, descripcion, stock FROM productos;

-- Filtrar informacion usando SELECT mas la clausula WHERE

SELECT * FROM productos

WHERE nombre = "Taza Clásica Blanca" AND stock= 100;

-- Funcion Min para calcular el minimo de una columna 
SELECT MIN(precio) AS Precio_Minimo FROM productos;

-- Funcion Max para calcular el maximo de una columna 
SELECT MAX(precio) AS Precio_Minimo FROM productos;

-- Funcion COUNT para calcular el total de productos 
SELECT count(*) AS Total_de_productos FROM productos;


-- Funcion para calcular el promedio del precio de los productos 
SELECT AVG(precio) AS Precio_promedio FROM productos;

-- Funcion para sumar el total de precios 
SELECT sum(precio) AS Ingresos_totales FROM productos;


SELECT  clientes.nombre, pedidos.total
FROM clientes 
INNER JOIN pedidos ON clientes.ID = pedidos.ID_clientes;



-- Consulta para seleccioroductos con Id_Producto en un conjunto específico
SELECT *
FROM Productos
WHERE Id_Producto IN (1, 3, 5);





-- Consulta de el precio de un producto 
SELECT nombre, descripcion, stock, precio FROM productos 
WHERE precio > 50;


-- Consulta de stock y precio 
SELECT nombre, descripcion, stock, precio FROM productos 
WHERE stock <= 100 AND precio > 10;

-- Consulta para buscar todos los productos con nombre vaso 
SELECT * FROM productos WHERE nombre LIKE '%Vaso%';

-- Consulta para saber el numero totla de productos 
SELECT COUNT(*) AS 'Total de Productos' FROM productos;

-- Conslta para sumar el total de los precios de los productos 
SELECT SUM(precio) AS 'Ingresos Totales' FROM productos;


-- JOINS clausulas que se utilizan para combinar dos o mas tablas en una columna relacionada 

-- Inner Join toma dos tablas y hace una o trabaja a partir de su co-relacion 

-- Consulta para obtener el nombre del cliente y los detalles del pedido

-- (Inner join)
SELECT Pedidos.ID_Pedido, Clientes.Nombre, Pedidos.Fecha, Pedidos.EstadoPedido
FROM Pedidos
INNER JOIN Clientes ON Pedidos.ID_Cliente = Clientes.ID_Cliente
WHERE Pedidos.Fecha = '2022-01-20';



-- Consulta para clientes y pedidos 
-- (Left join)
SELECT Clientes.Nombre, Pedidos.ID_Pedido
FROM Clientes
LEFT JOIN Pedidos ON Clientes.ID_Cliente = Pedidos.ID_Cliente;

-- Consulta para productos y pedidos 
-- (Right join)
SELECT Productos.Nombre, DetallesPedido.Cantidad, DetallesPedido.PrecioUnitario
FROM DetallesPedido
RIGHT JOIN Productos ON DetallesPedido.ID_Producto = Productos.ID_Producto;

-- Where (IN, BETWEEN, LIKE)

-- Consulta utilizando Where IN (es un operador que nos va a permitir comprobar si un valor se encuentra dentro de un conjunto de datos)
SELECT *
FROM Pedidos
WHERE ID_Cliente IN (2, 1, 4);

-- Consulta utilizando Where Between ( es un operador que nos va a permitir seleccionar filas seleccionando un rango especifico de algun valor que este entre dos rangos especificos)
SELECT *
FROM Pedidos
WHERE Fecha BETWEEN '2023-01-01' AND '2023-12-31';

-- Consulta utilizando Where Like ( es un operador que nos permite seleccionar o buscar registros especificos con el simbolo %)
SELECT Nombre
FROM Clientes
WHERE Nombre LIKE 'D%';

-- Consulta utilando Where In y Between
SELECT * FROM Pedidos WHERE Fecha BETWEEN '2022-01-01' AND '2024-02-06' AND ID_Cliente IN (2, 4);

-- Consulta utilizando LIKE y ORDER BY
SELECT * FROM Clientes WHERE Nombre LIKE 'M%' ORDER BY Apellido;

-- Como eliminar un cliente en especifico de una tabla 

DELETE FROM Clientes
WHERE ID_Cliente = 1;


-- Como eliminar los datos de una tabla  
DELETE FROM Clientes;





















 
 
 