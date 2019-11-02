<%-- 
    Document   : studentsInPila
    Created on : 01-nov-2019, 20:09:46
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
        <h1>Ver estudiantes en pila!</h1>
        <center>
            <form  method="post" action="StudentInPilaController"  >
                <input type="hidden" name="seeStudentsInPila" value="inPila">
                <button type="submit" class="btn btn-primary">Ver ahora</button>
            </form>
        </center>
    </body>
</html>
