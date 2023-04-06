package com.project.MerryMeal.controller;

import com.project.MerryMeal.dto.StorePostDto;
import com.project.MerryMeal.entity.Store;
import com.project.MerryMeal.entity.User;
import com.project.MerryMeal.exception.ResourceNotFoundException;
import com.project.MerryMeal.repository.StoreRepository;
import com.project.MerryMeal.repository.UserRepository;
import com.project.MerryMeal.security.CurrentUser;
import com.project.MerryMeal.security.UserPrincipal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/store")
public class StoreController {
	@Autowired
    private UserRepository userRepository;
	@Autowired
	private StoreRepository storeRepository;

	//Post new store
	@PostMapping(value = "/post-store")
	public ResponseEntity<String> postStore(@RequestBody StorePostDto storeNew) {
		Store checkPhoneNum= storeRepository.findByPhone(storeNew.getPhone());
		
		if (checkPhoneNum != null) {
			return new ResponseEntity<>("Phone number already taken",HttpStatus.BAD_REQUEST);
		} 
			Store sto = new Store();
			sto.setName(storeNew.getName());
			sto.setPhone(storeNew.getPhone());
			sto.setLocalities(storeNew.getLocalities());
			storeRepository.save(sto);
			return new ResponseEntity<>("Post Store Successful! ",HttpStatus.OK);
		
	}
	//Search neigbour based on name, phone, localities
	@GetMapping("/search")
	public List<Store> searchStore(@RequestParam("keyword") String keyword) {
		List<Store> result = storeRepository.search(keyword);
		
		return result;		
	}
	@GetMapping("/store-list")
	public List<Store> Storelist() {
		List<Store> result = storeRepository.findAll();
		
		return result;		
	}
//	 View Store detail
	@GetMapping("/store-detail")
	public Store carDetail(@RequestParam("sid") long sid) {
		Store detail = storeRepository.findById(sid).get();
		return detail;		
	}
}
