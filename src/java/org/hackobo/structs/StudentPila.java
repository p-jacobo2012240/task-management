/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.hackobo.structs;

import java.util.ArrayList;
import java.util.List;
import org.hackobo.beans.Students;


/**
 *
 * @author Hackobo
 */
public class StudentPila {
    private Students eRaiz;
    private int nElementos;
    private static StudentPila instance;
    private List<Students> auxPila = new ArrayList();
    
    public static StudentPila getInstance(){
        if( instance == null){
            instance = new StudentPila();
        }
        return instance;
    }
    
    public StudentPila(){
        this.eRaiz = null;
        this.nElementos = 0;
    }
    
    public void push(String carnet, String nombre, String fechaNacimiento){
        Students nuevo = new Students(carnet,nombre, fechaNacimiento);
        this.auxPila.add( new Students( carnet, nombre, fechaNacimiento));
        System.out.println(" LO QUE ESTA ENTRANDO EN LA PILA ES ::::" + this.auxPila.size() );
        nuevo.setNextStudent(this.eRaiz);
        this.eRaiz = nuevo;
        this.nElementos++;
        
    }
    
    public Students pop(){
        Students auxiliar = this.eRaiz;
        this.eRaiz = this.eRaiz.getNextStudent();
        auxiliar.setNextStudent(null);
        this.auxPila.remove( this.auxPila.size() -1 );
        this.nElementos--;
        return auxiliar;
    }
    
    public void verElementos(){
        Students aux;
       aux = this.eRaiz;
       
       for(Students es : this.auxPila ){
           System.out.println("This is elements ref" + es);
       }       
    }
    
    public List<Students> allStudents(){
        return this.auxPila;
    }
    
    public void quitLastElement(){
        this.auxPila.remove( this.auxPila.size() -1 );
    }   
}
