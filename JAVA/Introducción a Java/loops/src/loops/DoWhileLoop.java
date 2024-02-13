package loops;

public class DoWhileLoop {

	public static void main(String[] args) {
		
		
		/*
		 * Ciclo do While, evalua la expresion en la parte inferior del ciclo
		 * Por tanto, las declaraciones dentro del bloque "do" siempre se ejecutan al menos una vez.*/
		
		int cuenta = 5;
		do {
			System.out.println("cuenta " + cuenta);
			cuenta++;
		} while (cuenta < 0); //output 1 ya se ejecutó al menos 1 vez
		

	}

}
