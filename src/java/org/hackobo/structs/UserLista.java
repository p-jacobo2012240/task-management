/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.hackobo.structs;

import java.util.ArrayList;
import java.util.List;
import org.hackobo.beans.Users;

/**
 *
 * @author Hackobo
 */
public class UserLista {
    private static UserLista instance;
    private List<Users> listOrdered = new ArrayList();
    
    //informacion comodin
    private String comodinNickname = "progra2";
    private String comodinPassword = "umg123";
    
    public static UserLista getInstance(){
        if( instance == null ){
            instance = new UserLista();
        }
        return instance;
    }
    
    public boolean authUsers(String u, String p ){
        boolean status = false;
        this.listOrdered
            .add( 
            new Users( this.comodinNickname, this.comodinPassword));
        for(int i=0; i < this.listOrdered.size(); i++){
            String tempNick = this.listOrdered.get(i).getUsername();
            String tempPass = this.listOrdered.get(i).getPass();
            if( tempNick.equals( u ) && tempPass.equals( p)){
                status = true;
                break;
            }
            status = false; 
        }
        return status;
    }
    
    public void addUser(String u, String p){
        this.listOrdered.add(new Users(u, p ));
    }
    
    
    public List<Users> allUsers(){
        return this.listOrdered;
    }
}
