package br.mackenzie.ps2.CorsConfig;

import org.springframework.web.servlet.config.annotation.*;
import org.springframework.context.annotation.*;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

@Override
    	public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
    		}
		}