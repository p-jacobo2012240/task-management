/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.pablojacobo.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//SESSION ENVIROMENT
import org.pablojacobo.lib.SessionEnviroment;

/**
 *
 * @author Hackobo
 */
@WebServlet(name = "OAuthController", urlPatterns = {"/OAuthController"})
public class OAuthController extends HttpServlet {
    private String tempUsername = "";
    private String tempPasssword = "";
    private boolean statusAuth = false;
    
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
            this.tempUsername = request.getParameter("username");
            this.tempPasssword = request.getParameter("pass");
            
            System.out.println(" VALOR EN EL SEVLET DEK USERNAME " + this.tempUsername  );
            System.out.println(" VALOR EN EL SERVLET DEL PASS " + this.tempPasssword  );
            
            this.statusAuth = SessionEnviroment
                .getInstance()
                .authSession(this.tempUsername, this.tempPasssword);
            
            if( this.statusAuth == true  ){
                RequestDispatcher view = request
                    .getRequestDispatcher("home.jsp");      
                view.forward(request, response);
            }
            response.sendRedirect("index.jsp");
            
            System.out.println("STATUS LOGIN ::: "+ this.statusAuth );
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
