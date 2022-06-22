package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String nameInput = request.getParameter("name-input");
    String schoolInput= request.getParameter("school-input");
    String linkedInInput = request.getParameter("linkedin-input");
    String DescriptionInput = request.getParameter("description-input");

    // Print the value so you can see it in the server logs.
    System.out.println("This is what someone submitted:");
    System.out.println(" Their name: " + nameInput);
    System.out.println("Their school: " + schoolInput);
    System.out.println("Their linkedIn: " + linkedInInput);
    System.out.println("Self description: " + DescriptionInput);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Thanks for sharing! This is what you submitted:");
    response.getWriter().println("Your name is " + nameInput + ".");
    response.getWriter().println("You go to school at " + schoolInput + ", and");
    response.getWriter().println("your linkedIn profile is: " + linkedInInput + "!");
    response.getWriter().println("A bit about yourself: " + DescriptionInput);
  }
}