package main

import com.sun.net.httpserver.{HttpServer, HttpHandler, HttpExchange}
import java.net.InetSocketAddress

object Hello {
  def main(args: Array[String]): Unit = {
    val server =
      HttpServer.create(new InetSocketAddress("0.0.0.0", 9000), 0)

    server.createContext(
      "/",
      new HttpHandler {
        def handle(httpExchange: HttpExchange): Unit = {
          println(s"GET ${httpExchange.getRequestURI().getPath()} received.")

          val response = "Hello, Backend 102!"
          httpExchange.sendResponseHeaders(200, response.length)
          val out = httpExchange.getResponseBody()

          out.write(response.getBytes())
          out.flush()
          out.close()
        }
      }
    )

    server.start()
    println("Server started on port 9000")
  }
}
