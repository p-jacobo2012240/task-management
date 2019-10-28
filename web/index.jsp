<%-- 
    Document   : index
    Created on : 27-oct-2019, 23:42:30
    Author     : Hackobo
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Login</h1>
        <form method="post" action="OAuthController">
            <label> Usuario: <input name="username" type="text" > </label>
            <br>
            <label> Contrasena: <input name="pass" type="password" > </label>
            <input type="submit" value="Ingresar" >
        </form>
    </body>
</html>
