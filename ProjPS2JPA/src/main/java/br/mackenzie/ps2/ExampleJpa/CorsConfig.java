package br.mackenzie.ps2.CorsConfig;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

@Override
    	public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
            .allowedHeader("*")
            .allowCredentials(false)
            .maxAge(3600);
    		}
		}