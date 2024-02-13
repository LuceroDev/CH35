package hilos;

public class Prueba1 extends Thread {
	private String numeroDePedido;
	
	
	public Prueba1(String numeroDePedido) {
		this.numeroDePedido = numeroDePedido;
	}
	@Override
	public void run () {
		
		System.out.println("Pedido procesado" + numeroDePedido);
	

	}


}