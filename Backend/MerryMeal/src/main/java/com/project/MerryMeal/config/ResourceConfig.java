package com.project.MerryMeal.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration public class ResourceConfig implements WebMvcConfigurer{
	  
	  @Override public void addResourceHandlers(ResourceHandlerRegistry registry) {
	  // TODO Auto-generated method stub
	  registry.addResourceHandler("/uploads/**").addResourceLocations(
	  "file:uploads/"); }
	  
	  
	  }