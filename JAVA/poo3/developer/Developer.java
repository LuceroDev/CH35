package org.generation.employee.developer;

import org.generation.employee.Employee;

public class Developer extends Employee {

    private String lenguajeProgramacion;

    // Constructor
    public Developer(String nombreCompleto, int id, double salario, String puesto, String lenguajeProgramacion) {
        super(nombreCompleto, id, salario, puesto);
        this.lenguajeProgramacion = lenguajeProgramacion;
    }

    public String getLenguajeProgramacion() {
        return lenguajeProgramacion;
    }

    public void setLenguajeProgramacion(String lenguajeProgramacion) {
        this.lenguajeProgramacion = lenguajeProgramacion;
    }

    public void codear() {
        System.out.println("El programador " + getNombreCompleto() + " utiliza " + lenguajeProgramacion);
    }

    @Override
    public String toString() {
        return "Developer [Id=" + getId() + ", NombreCompleto=" + getNombreCompleto() + ", Puesto=" + getPuesto() +
                ", Salario=" + getSalario() + ", lenguajeProgramacion=" + lenguajeProgramacion + "]";
    }
}
