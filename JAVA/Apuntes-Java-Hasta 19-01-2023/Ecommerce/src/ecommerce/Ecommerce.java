package ecommerce;

import java.util.ArrayList;
import java.util.List;

public class Ecommerce {
	
	static class Producto {
		
		String nombre;
		double precio;
		
		Producto(String nombre, double precio) {
			
			this.nombre = nombre;
			this.precio = precio;
			
		}//función
	}//class
		
		static class CarritoCompra {
			List<Producto> productos = new ArrayList<>();
			
			//void: No tiene un valor de retorno, no se le puede asignar un return
			void agregarProducto(Producto barbie) { 
				productos.add(barbie);
			}//void
			
			double calcularTotal() { //calcular total de carrito de compra
				double total = 0;
				for(Producto barbie : productos) {
				total += barbie.precio; //+= el valor de la var derecha se asigne al valor de la var izquierda (producto.propiedadPrecio)
				}//for
				return total;
			}//double	
		}//class carritocompra

	public static void main(String[] args) {
		
		Producto munieca1 = new Producto ("Chelsa", 98.70);
		Producto munieca2 = new Producto ("Skipper", 85.40);
		
		
		CarritoCompra carrito = new CarritoCompra(); //instanciar new CarritoCompra
		
		carrito.agregarProducto(munieca1);
		carrito.agregarProducto(munieca2);
		
		double totalCarrito = carrito.calcularTotal();
		
		System.out.println("Total del carrito: $"+ totalCarrito);
	}//main
}//class