<%-- 
    Document   : index.jsp
    Created on : 01-nov-2019, 16:02:24
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
        <h1> UMG-DEVAPP !</h1>
        <form  method="post" action="UserController"  >
            <div class="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input type="text" name="u" class="form-control" id="exampleInputEmail1"  placeholder="Ingresa tu usuario">
    
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Contrasena</label>
                <input type="password" name="p" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu contrasena">
            </div>
            <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>
    </body>
</html>
