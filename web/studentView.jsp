<%-- 
    Document   : studentView
    Created on : 01-nov-2019, 16:03:40
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
        <h1>Registra un estudiante!</h1>
        <form  method="post" action="StudentAddController"  >
            <div class="form-group">
                <label for="exampleInputEmail1">Carnet</label>
                <input type="text" name="username" class="form-control"  placeholder="Ingresa el Carnet ">
    
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Nombre</label>
                <input type="text" name="pasword" class="form-control"  placeholder="Ingresa el nombre">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Fecha de nacimiento</label>
                <input type="date" value="2019-11-03" name="dnacimiento" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
    </body>
</html>
