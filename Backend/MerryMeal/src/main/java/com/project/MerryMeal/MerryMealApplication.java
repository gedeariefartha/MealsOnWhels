package com.project.MerryMeal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.project.MerryMeal.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MerryMealApplication {

	public static void main(String[] args) {
		SpringApplication.run(MerryMealApplication.class, args);
		System.out.println("==== Merry Meal API Running! ====");
	}

}
