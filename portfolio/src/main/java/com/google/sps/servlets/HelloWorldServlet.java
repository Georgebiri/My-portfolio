package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import com.google.gson.Gson;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    ArrayList<String> array = new ArrayList<String>();
    array.add("My favorite anime is Seven Deadly Sins");
    array.add("I was born on the commonwealth day");
    array.add("I am an Astrophilic Nyctophile");
    
    String json = convertToJsonUsingGson(array);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
}
/**
* Converts an array of strings into a JSON string using the Gson library.
*/
private String convertToJsonUsingGson(ArrayList<String> array) {
    Gson gson = new Gson();
    String json = gson.toJson(array);
    return json;
    }
}


