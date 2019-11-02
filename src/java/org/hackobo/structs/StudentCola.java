/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.hackobo.structs;

import java.util.ArrayList;
import java.util.List;
import org.hackobo.beans.Students;
import org.hackobo.structs.StudentPila;

/**
 *
 * @author Hackobo
 */
public class StudentCola {
    private List<Students> auxCola = new ArrayList();
    private List<Students> auxColaData = new ArrayList();
    private static StudentCola instance;
    private Students ultimo;
    private Students eRaiz;
    private Students eFin;
    private int nElementos = 0;
     
    
     //propiedades de clase
     private String tempCarnet;
     private String tempNombre;
     private String tempNacimiento;
    
     
     public StudentCola(){
         this.eRaiz = null;
         this.eFin = null;
         this.nElementos = 0;
     }
     
     
     public static StudentCola getInstance(){
         if( instance == null ){
             instance = new StudentCola();
         }
         return instance;
     }
     
     // PUSH
    public void push(String carnet, String nombre, String date){
        Students nuevo = new Students(carnet, nombre, date);
        if (this.eFin != null){
            this.eFin.setNextStudent(nuevo);
        }
        this.eFin = nuevo;
        if ( this.eRaiz == null){
            this.eRaiz = nuevo;
        }
        this.nElementos ++;
    }
    
       
    //POP
    public Students pop(){
        Students auxiliar = this.eRaiz;
        this.eRaiz = this.eRaiz.getNextStudent();
        auxiliar.setNextStudent(null);
        this.nElementos--;
        return auxiliar;
    }
     
     public void execOPT(){
        this.auxCola = StudentPila.getInstance().allStudents();
        this.ultimo = this.auxCola.get( this.auxCola.size() -1 );
        this.tempCarnet = this.ultimo.getCarnet();
        this.tempNombre = this.ultimo.getFullname();
        this.tempNacimiento = this.ultimo.getbDay();
        this.auxColaData
            .add(
        new Students(this.tempCarnet, this.tempNombre, this.tempNacimiento ));
        
       //Set status to singleton @param [last-value in array aux]
        StudentPila.getInstance().quitLastElement();
     }
     
     public List<Students> allStudentsCola(){
         return this.auxColaData;
     }
}
