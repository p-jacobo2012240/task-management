/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.hackobo.controllers;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hackobo.beans.Students;
import org.hackobo.structs.StudentPila;

/**
 *
 * @author Hackobo
 */
@WebServlet(name = "StudentAddController", urlPatterns = {"/StudentAddController"})
public class StudentAddController extends HttpServlet {
    private String carnet = "";
    private String nombre = "";
    private String fnacimiento = "";
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
            this.carnet = request.getParameter("carnet");
            this.nombre = request.getParameter("nombre");
            this.fnacimiento = request.getParameter("cumple");
            
            List<Students> pilaStudentAux = new ArrayList();
            
            StudentPila.getInstance()
                .push(this.carnet, this.nombre, this.fnacimiento);
            pilaStudentAux = StudentPila.getInstance().allStudents();
            Collections.reverse(pilaStudentAux);
            
            out.println("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>");
            out.println("<ul class='list-group'>");
            for(Students s : pilaStudentAux ){
                out.println("<li class='list-group-item' aria-disabled='true' > Carnet : " + s.getCarnet()  + "</li> ");
                out.println("<li class='list-group-item' aria-disabled='true' > Fullname : " + s.getFullname() + "</li> ");
                 out.println("<li class='list-group-item' aria-disabled='true' > Fecha Nacimiento : " + s.getbDay() + "</li><br>");
            }
            out.println("</ul>");
            out.println("<a href='homeView.jsp' >Regresar al menu </a>");
            
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
