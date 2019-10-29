/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.pablojacobo.lib;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.pablojacobo.beans.Users;

/**
 *
 * @author Hackobo
 */
public class SessionEnviroment {
    private static SessionEnviroment instance;
    private List<Users> usersList = new ArrayList();
    
    //Dummy autorities [Initial]
    private String dummyUsername = "progra2";
    private String dummyPassword = "umg123";
    //flag LOGIN status
    private boolean statusLogin = false;
    
    public static SessionEnviroment getInstance(){
        if( instance == null ){
            instance = new SessionEnviroment();
        }
        return instance;
    }
    
    public boolean authSession(String user, String pass ){
        this.usersList.add( new Users( this.dummyUsername, this.dummyPassword ));
        for(int i=0; i < this.usersList.size(); i++ ){
            String u = this.usersList.get(i).getUsername();
            String p = this.usersList.get(i).getPassword();
            boolean expUsername = ( u.equals(user));
            boolean expPassword = ( p.equals(pass));
            if( expUsername == true && expPassword == true ){
                this.statusLogin = true;
                break;
            }
            this.statusLogin = false;
        }
        
        return this.statusLogin;
    }
    
    
}
