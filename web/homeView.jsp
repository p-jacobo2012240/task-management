<%-- 
    Document   : homeView
    Created on : 01-nov-2019, 16:03:04
    Author     : Hackobo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>JSP Page</title>
        <!-- Image and text -->
        <nav class="navbar navbar-dark bg-primary" >
            <a class="navbar-brand" href="#">
                Hola : <%= session.getAttribute("username") %>
            </a>
        </nav>
    </head>
    <body>
        <center>
            <ul class="list-group">
                <li class="list-group-item">
                    <a href="userView.jsp"  class="btn btn-primary">Agrega un usuario</a>
                </li>
                <li class="list-group-item">
                    <a href="studentView.jsp"  class="btn btn-primary">Agrega un estudiante</a>
                </li>
                <li class="list-group-item">
                    <a href="colaInscriptionView.jsp"  class="btn btn-primary"> Agrega un estudiante a la cola de inscripcion</a>
                </li>
                <li class="list-group-item">
                    <a href="studentsInscribed.jsp"  class="btn btn-primary">Inscripciones</a>
                </li>
                <li class="list-group-item">
                    <form method="post" action="UserController" >
                        <input type="hidden" name="outSession" value="out" >
                        <input type="submit" class="btn btn-danger" value="Salir" >
                    </form>         
                </li>
            </ul>
        </center>
    </body>
</html>
