package org.generation.exercises;

import java.util.ArrayList;
import java.util.Collections;
public class SorthMethod {

	public static void main(String[] args) {
	//El método .sort() permite ordenar los elementos de un ArrayList
		
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		
		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(9);
		points.add(8);
		
		
		System.out.println(points); //No se encuentran ordenados de menor a mayor, solamente como lo agregué en el ArrayList.
		
		//Ordenamiento de menor a mayor utilizando sort
		
		Collections.sort(points);
		System.out.println(points);
		
		names.add("Daniel");
		names.add("Rocio");
		names.add("Arturo");
		names.add("Eveida");
		names.add("fernanda");
		names.add("angel");
		
		System.out.println(names);
		//Ordenamiento de menor a mayor utilizando sort
		Collections.sort(names);
		System.out.println(names);
		
		
	}

}
