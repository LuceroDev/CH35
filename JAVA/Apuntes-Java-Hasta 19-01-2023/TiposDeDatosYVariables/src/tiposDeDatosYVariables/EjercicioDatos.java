package tiposDeDatosYVariables;

public class EjercicioDatos {

    public static void main(String[] args) {
        // TODO Auto-generated method stub

        System.out.print("Hola Mundo"); // Es para imprimir en la consola

        /*
         * Así para comentarios multilinea
         */

        // Comentarios de una sola línea

        //=========TIPOS DE DATOS ENTEROS=========
        byte edad = 31; // byte sirve para representar un número entero 8 bits { -128 al 127}

        System.out.println("Edad del participante: " + edad);

        short usuariosNuevos = 200;

        System.out.println(" Usuarios finales: " + usuariosNuevos); // Sirve para representar un número entero 16 bits (-32768 al 32767)

        long usuariosPremium = 9512; // Sirve para representar un número entero con valores mucho mayores

        System.out.println(" Usuarios premium: " + usuariosPremium); //Sirve para representar un número entero con valores mucho mayores

        //===========TIPOS DE DATOS CON NÚMEROS DECIMALES======
        
        float altura = 1.61f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
        
        System.out.println("Altura del usuariox"+altura);
        
        double peso = 68; //Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
        
        String  nombreUsuario = "Lucero"; //Es una clase para tener cadenas de texto
        
        String costoBoleto = "500";//Es una clase para tener cadenas de texto
		String zonaBoleto = "52";
		System.out.println("Usuarix "+costoBoleto);
		System.out.println("Zona a la que pertenece "+zonaBoleto);
        char seccion = 'f'; //Sirve para representar valores con un solo caracter
        
        System.out.println("Seccion "+seccion);
        
        boolean clienteFrecuente = true; //Sirve para obtener true o false utilizando condicioanles
        
        System.out.println("Es un cliente frecuente "+clienteFrecuente);
        

        
       /* 
        //==Conversión de tipos 
        
        
        //Casteo a entero
        int pesoCambio = (int) peso;
        
        //Casteo entero
        long pesoCambio1 = (long) peso;
        
        System.out.println("double "+peso);
        System.out.println("int "+pesoCambio);
        System.out.println("long "+pesoCambio1);
       
        int nombreUsuario =Int.parseInt(nombreUsuario);
        double zonaCambio = Double.parseDouble(zonaBoleto);
        
        System.out.println("Zona del usuarix segun su boleto "+(nombreCambio * zonaCambio));*/
        
        
        
        
        
        /*=======Operadores Aritmeticos====
         + suma
         - resta
         * multiplicación
         / disión
          % Residuo
         * */
        
        /*======Operadores de comparación=====
         == compara si un operando es igual a otro
         != compara si es diferente
         < mayor que
         >menor que
         <= mayor o igual que
         >= menos o igual que
         */
        
//======Ejercicio: Declarar variables para el cine
        
        // Variables para el cine:
        
        double precioEntrada = 75.50;
        double precioPalomitas = 89.70;
        double precioBebida = 35.50;
        int capacidadTotal = 500;
        
       
        
       int personasDentro = 501;
       
       if(personasDentro > capacidadTotal) {
    	   
    	   System.out.println("Aforo lleno");
    	   
       }
       
       double totalEntrada = personasDentro * precioEntrada;
       double totalPalomitas = personasDentro * precioPalomitas;
       double totalBebidas = personasDentro * precioBebida;
       
       System.out.println("Total de personas: "+personasDentro);
       System.out.println("Total de entradas: "+totalEntrada);
       System.out.println("Total de palomitas: "+totalPalomitas);
       System.out.println("Total de bebidas: "+totalBebidas);
       
        

        //Ver datos en consola:
        
       /* System.out.println("Número de salas: " + numeroSalas);
        System.out.println("Asientos por sala: " + asientosPorSala); */
        /*System.out.println("Precio del boleto: $" + precioEntrada);
        System.out.println("Precio de las palomitas: $" + precioPalomitas);
        System.out.println("Precio de las bebidas: $" + precioBebida);*/
        
       
        
       // ====================================================================
        	
       //OPERADORES LOGICOS
       
       /*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
        		
       // && and
       
       int anios = 5;
		
		boolean esInfante = true; 
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println("Es peque " + costoInfante);
		
		
		
		
		String cliente = "cliente123";
		String credenciales = "contreseña123";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("contraseña123");
		
		System.out.println("La orden es valida " + credencialCorrecta);
		
		// || or
		
		double costoPasaje = 380.50;
		int edadd = 50;
		boolean credencialInapam = false;
		
		boolean descuentoAdultoMayor = edadd >= 60 || credencialInapam;
		
		System.out.println("Tienes descuento?" + costoPasaje);
		
		// ! not
		
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		System.out.println("Tenemos asientos con descuentos "+ asientosConDescuento);
		
		
		//===EJERCICIO AUTOBUS
		String destino = "Oaxaca";
		int costoBoletos = 350;
		int asientosTotales = 62;
        int asientosAdultosMayores = 4;
        int asientosEstudiantes = 6;
        double descuentoInapam = 0.35; // 35%
        double descuentoEstudiantes = 0.30; // 30%

		//Calculos
        
        int asientosGenerales =  asientosTotales - (asientosAdultosMayores + asientosEstudiantes) ;
        
        double precioConDescuentoEstudiante = costoBoletos - (costoBoletos * descuentoEstudiantes);
        
        double precioConDescuentoInapam = costoBoletos -(costoBoletos * descuentoInapam);
        
        int asientosOcupados = 63;
        
        if(asientosOcupados > asientosTotales) {
     	   
     	   System.out.println("Autobús lleno");
     	   
        }
        System.out.println("Destino del autobús: " + destino);
        System.out.println("Precio de  boleto general: " + costoBoletos);
        System.out.println("Asientos totales que no aplican decuento: " + asientosGenerales);
        System.out.println("Precio de un boleto para estudientes: " + precioConDescuentoEstudiante);
        System.out.println("Precio de un boleto para adulto mayor: " + precioConDescuentoInapam);
        
        
        
        
        
        
		
       
    }

}

    
