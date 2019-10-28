/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.pablojacobo.beans;

/**
 *
 * @author Hackobo
 */
public class Students {
    private int carnet;
    private String nombre;
    private String dateOfBirth; //latter migrate to date type
    private int idUser; //idUser [CREATED] ->  to -> Student
    
    public Students(){}

    public Students(int carnet, String dateOfBirth, int idUser) {
        this.carnet = carnet;
        this.dateOfBirth = dateOfBirth;
        this.idUser = idUser;
    }

    public int getCarnet() {
        return carnet;
    }

    public void setCarnet(int carnet) {
        this.carnet = carnet;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }
    
    
}
