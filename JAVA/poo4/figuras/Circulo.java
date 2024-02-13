import java.util.Scanner;  // Importar la clase Scanner del paquete java.util

class MangosNaranjas {
    private int mangos;  // Variable para almacenar la cantidad de mangos
    private int naranjas;  // Variable para almacenar la cantidad de naranjas

    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;  // Inicializar la variable de mangos con el valor proporcionado al constructor
        this.naranjas = naranjas;  // Inicializar la variable de naranjas con el valor proporcionado al constructor
    }

    public void imprimir() {
        int min = Math.min(mangos, naranjas);  // Obtener el mínimo de mangos y naranjas
        int cajas = min;  // El número de cajas será el mínimo de mangos y naranjas

        int mangosPorCaja = mangos / cajas;  // Calcular la cantidad de mangos por caja
        int naranjasPorCaja = naranjas / cajas;  // Calcular la cantidad de naranjas por caja

        System.out.println("El número de cajas es: " + cajas);  // Imprimir el número de cajas
        System.out.println("El número de mangos en una caja es: " + mangosPorCaja);  // Imprimir la cantidad de mangos por caja
        System.out.println("El número de naranjas en una caja es: " + naranjasPorCaja);  // Imprimir la cantidad de naranjas por caja
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Crear un objeto Scanner para leer la entrada del usuario

        System.out.print("Ingrese el número de mangos: ");  // Solicitar al usuario que ingrese el número de mangos
        int numeroMangos = scanner.nextInt();  // Leer el número de mangos desde la consola

        System.out.print("Ingrese el número de naranjas: ");  // Solicitar al usuario que ingrese el número de naranjas
        int numeroNaranjas = scanner.nextInt();  // Leer el número de naranjas desde la consola

        MangosNaranjas cajas = new MangosNaranjas(numeroMangos, numeroNaranjas);  // Crear un objeto MangosNaranjas con la entrada del usuario
        cajas.imprimir();  // Llamar al método imprimir para mostrar los resultados
    }
}
