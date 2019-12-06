/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controladores;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//estructuas
import estructura.Lista;
import estructura.Pila;
import java.util.ArrayList;
import java.util.List;
import modelos.Texto;

/**
 *
 * @author Hackobo
 */
@WebServlet(name = "ControladorVer", urlPatterns = {"/ControladorVer"})
public class ControladorVer extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            List<Texto> auxPila = new ArrayList();
            List<Texto> auxLista = new ArrayList();
            
            //invoke all data
            auxPila = Pila.getInstance().allData();
            auxLista = Lista.getInstance().allData();
            
            out.println("<p> elementos de la pila </p>");
            out.println("<ul>");
            for(Texto txt : auxPila){
                out.println("<li>" + txt.getContenido() + "</li>");
            }
            out.println("</ul>");
            
             out.println("<p> elementos de la lista </p>");
             out.println("<ul>");
            for(Texto txt : auxLista){
                out.println("<li>" + txt.getContenido() + "</li>");
            }
            out.println("</ul>");
            
            out.println("<a href='index.html'>regresar</a>");
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
