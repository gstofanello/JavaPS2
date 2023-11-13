//Gabriel Sanches Tofanello 42251631
//Rodrigo Pampolin Mendes   42230403
package br.mackenzie.ps2.ExampleJpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjPS2JPA {

	public static void main(String[] args) {
		SpringApplication.run(ProjPS2JPA.class, args);

		@Configuration
		public class CorsConfiguration implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
			}
		}
	}

}
