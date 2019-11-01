/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.hackobo.beans;

/**
 *
 * @author Hackobo
 */
public class Students {
    private String carnet;
    private String fullname;
    private String bDay;
    private Students nextStudent;

    public Students(String carnet, String fullname, String bDay, Students nextStudent) {
        this.carnet = carnet;
        this.fullname = fullname;
        this.bDay = bDay;
        this.nextStudent = nextStudent;
    }

    public Students(String carnet, String fullname, String bDay) {
        this.carnet = carnet;
        this.fullname = fullname;
        this.bDay = bDay;
    }
    
    public Students(){}

    public String getCarnet() {
        return carnet;
    }

    public void setCarnet(String carnet) {
        this.carnet = carnet;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getbDay() {
        return bDay;
    }

    public void setbDay(String bDay) {
        this.bDay = bDay;
    }

    public Students getNextStudent() {
        return nextStudent;
    }

    public void setNextStudent(Students nextStudent) {
        this.nextStudent = nextStudent;
    }
        
}
