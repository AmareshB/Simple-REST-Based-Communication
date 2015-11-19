package com.webservices.rest.jersey;

import java.net.URI;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

import org.glassfish.jersey.client.ClientConfig;

public class client {

	//change the Url based on ur requirement
	//private static final String url_service="http://freemusicarchive.org/api/get/genres.json?api_key=60BLHNQCAOUFPIBZ";
	private static final String url_service="http://localhost:8080/SimpleRESTBasedCommunication";
	
public static void main(String[] args) throws Exception
{
	
	ClientConfig clientconfig=new ClientConfig();
	Client client=ClientBuilder.newClient(clientconfig);
	URI serviceURI=UriBuilder.fromUri(url_service).build();
	WebTarget webtarget=client.target(serviceURI);

	//GET method call
 //System.out.println(webtarget.path("rest").path("server").request().accept(MediaType.TEXT_PLAIN).get(String.class).toString());
	
	//POST method call
	//System.out.println(webtarget.path("rest").path("server/postcheck").request().accept(MediaType.APPLICATION_JSON).get(String.class).toString());

	//Some External URL call
	//System.out.println(webtarget.request().accept(MediaType.APPLICATION_JSON).get(String.class).toString());

}
}
