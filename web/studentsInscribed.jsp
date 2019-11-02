<%-- 
    Document   : studentsInscribed
    Created on : 01-nov-2019, 16:05:07
    Author     : Hackobo
--%>
    
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Ver Inscripciones realizadas!</h1>
        <form  method="post" action="StudentIncribedController">
                <input type="hidden" name="seeStudentsInPila" value="inPila">
                <button type="submit" class="btn btn-primary">Ver ahora</button>
            </form>
    </body>
</html>
