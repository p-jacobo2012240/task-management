/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package estructura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import modelos.Texto;

/**
 *
 * @author Hackobo
 */
public class Pila {
    private static Pila instance;
     private List<Texto> auxTexto = new ArrayList();
    
    public static Pila getInstance(){
        if( instance == null ){
            instance = new Pila();
        }
        return instance;
    }
    
    public void push( String t  ){
       this.auxTexto.add( new Texto( t ) );
   }
    
   public void pop(){
       if( this.auxTexto.size() > 0  ){
           this.auxTexto.remove( this.auxTexto.size() -1  );
       }
   }
   
   public List<Texto> allData(){
       Collections.reverse( this.auxTexto );
       return this.auxTexto;
   }
    
}
