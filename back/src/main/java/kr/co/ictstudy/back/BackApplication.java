package kr.co.ictstudy.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BackApplication {
	@Bean
	public WebMvcConfigurer crosConfigurer() {
		return new WebMvcConfigurer() {
			// 마우스 우클릭 소스작업.. 클릭
			// 오버라이딩 있음
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				System.out.println("==========Cors Test==========");
				registry.addMapping("/**")
						.allowedOrigins("http://192.168.0.45:3001/", "http://localhost:3001/")
						.allowedHeaders("*")
						.allowedMethods("*").maxAge(3600);
			}

		};
	}

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

}
