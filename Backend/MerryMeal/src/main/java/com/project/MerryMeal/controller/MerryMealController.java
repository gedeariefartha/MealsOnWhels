package com.project.MerryMeal.controller;

import com.project.MerryMeal.dto.CampaignRegDto;
import com.project.MerryMeal.dto.DeliverReqDto;
import com.project.MerryMeal.dto.MenuRegDto;
import com.project.MerryMeal.dto.OrderReqDto;
import com.project.MerryMeal.dto.StorePostDto;
import com.project.MerryMeal.dto.VolunteerRegDto;
import com.project.MerryMeal.entity.Campaign;
import com.project.MerryMeal.entity.Deliver;
import com.project.MerryMeal.entity.Menu;
import com.project.MerryMeal.entity.Order;
import com.project.MerryMeal.entity.Store;
import com.project.MerryMeal.entity.User;
import com.project.MerryMeal.entity.Volunteer;
import com.project.MerryMeal.exception.ResourceNotFoundException;
import com.project.MerryMeal.repository.CampaignRepository;
import com.project.MerryMeal.repository.DeliverRepository;
import com.project.MerryMeal.repository.MenuRepository;
import com.project.MerryMeal.repository.OrderRepository;
import com.project.MerryMeal.repository.StoreRepository;
import com.project.MerryMeal.repository.UserRepository;
import com.project.MerryMeal.repository.VolunteerRepository;
import com.project.MerryMeal.security.CurrentUser;
import com.project.MerryMeal.security.UserPrincipal;
import com.project.MerryMeal.service.MealService;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/meal")
public class MerryMealController {
	 public static String uploadDirectory = System.getProperty("user.dir") + "/uploads";
	@Autowired
    private MealService mealService;
	@Autowired
    private UserRepository userRepository;


//Campaign
		@PostMapping(value = "/post-campaign")
		public ResponseEntity<String> postCampaign(@RequestBody CampaignRegDto dtoNew) {

				Date cur_time=new Date();
				Campaign cam = new Campaign();
				cam.setTitle(dtoNew.getTitle());
				cam.setDesc(dtoNew.getDesc());
				cam.setTimedate(cur_time);
				cam.setStatus(dtoNew.isStatus());
				mealService.SaveCampaign(cam);
				return new ResponseEntity<>("Post Campaign Successful! ",HttpStatus.OK);
			
		}
		@PostMapping(value = "/edit-campaign")
		public ResponseEntity<String> editCampaign(@RequestBody CampaignRegDto dtoNew) {
				mealService.EditCampaign(dtoNew);
				return new ResponseEntity<>("Edit Campaign Successful! ",HttpStatus.OK);
			
		}
		@GetMapping("/campaign-list")
		public List<Campaign> Campaignlist() {
			List<Campaign> result = mealService.listCampaignByStatus();
			return result;		
		}
		@GetMapping("/campaign/{camId}")
		public Campaign getCampaignById(@PathVariable("camId") Long camId) {
		   Campaign cam = mealService.get(camId);
		   return cam;
		  }		
//Volunteer
		@PostMapping(value = "/post-volunteer")
		public ResponseEntity<String> newVolunteer(@RequestBody VolunteerRegDto dtoNew) {
			Volunteer volcam = mealService.getVolunteerCheck(dtoNew.getEmail(), dtoNew.getCampaignid());
			if(volcam != null) {
				return new ResponseEntity<>("Volunteer Already register! ",HttpStatus.BAD_REQUEST);
			}else {
				Campaign caid = mealService.get(dtoNew.getCampaignid());
				Volunteer vol = new Volunteer();
				vol.setEmail(dtoNew.getEmail());
				vol.setName(dtoNew.getName());
				vol.setPhone(dtoNew.getPhone());
				vol.setCampaignId(caid);
				mealService.SaveVolunteer(vol);
				return new ResponseEntity<>("Volunteer register Successful! ",HttpStatus.OK);
			}
		}
		@GetMapping("/volunteer-list")
		public List<Volunteer> Volunteerlist() {
			List<Volunteer> result = mealService.listAllVolunteer();
			return result;		
		}
//Menu
		@PostMapping(value = "/post-menu")
		public ResponseEntity<String> newMenu(@RequestBody MenuRegDto dtoNew) {

				User paid = mealService.getUserId(dtoNew.getPartnerid());
				Menu men = new Menu();
				men.setName(dtoNew.getName());
				men.setDesc(dtoNew.getDesc());
				men.setPartnerid(paid);
				men.setStatus(dtoNew.isStatus());
				mealService.SaveMenu(men);
				return new ResponseEntity<>("Post Menu Successful! ",HttpStatus.OK);
			
		}
		@PostMapping(value = "/edit-menu")
		public ResponseEntity<String> editMenu(@RequestBody MenuRegDto dtoNew) {
				mealService.EditMenu(dtoNew);
				return new ResponseEntity<>("Edit Menu Successful! ",HttpStatus.OK);
			
		}
		@GetMapping("/menu-list")
		public List<Menu> Menulist() {
			List<Menu> result = mealService.listMenuStatus();
			return result;		
		}
		@GetMapping("/menu-partner/{pid}")
		public List<Menu> MenuPartnerlist(@PathVariable("pid") Long pid) {
			List<Menu> result = mealService.listMenuPartner(pid);
			return result;		
		}
		@GetMapping("/menu/{menId}")
		public Menu getMenuById(@PathVariable("menId") Long menId) {
		   Menu cam = mealService.getMenuId(menId);
		   return cam;
		}	
//Order
		@PostMapping(value = "/post-order")
		public ResponseEntity<String> newOrder(@RequestBody OrderReqDto dtoNew) {
				Date cur_time=new Date();
				User usid = userRepository.findById(dtoNew.getMemberid()).get();
				User paid = userRepository.findById(dtoNew.getPartnerid()).get();
				Menu meid = mealService.getMenuId(dtoNew.getMenuid());
				Order ord = new Order();
				ord.setMemberid(usid);
				ord.setMenuid(meid);
				ord.setPartnerid(paid);
				ord.setDatetime(cur_time);
				ord.setStatus(dtoNew.isStatus());
				mealService.SaveOrder(ord);
				return new ResponseEntity<>("New Order Successfuly added! ",HttpStatus.OK);	
		}
		@PostMapping(value = "/edit-order")
		public ResponseEntity<String> editOrderStatus(@RequestBody OrderReqDto dtoNew) {
				mealService.EditOrderStatus(dtoNew);
				return new ResponseEntity<>("Edit Order Status Successful! ",HttpStatus.OK);
		}
		@GetMapping("/order-list/{pid}")
		public List<Order> Orderlist(@PathVariable("pid") Long pid) {
			List<Order> result = mealService.listOrderPartner(pid);
			return result;		
		}
		@GetMapping("/deliver-list")
		public List<Order> Deliverlist() {
			List<Order> result = mealService.listOrderStatus();
			return result;		
		}
		@GetMapping("/order/{ordId}")
		public Order getOrderById(@PathVariable("ordId") Long ordId) {
		   Order cam = mealService.getOrderId(ordId);
		   return cam;
		  }	
//Delivery
		@PostMapping(value = "/post-delivery")
		public ResponseEntity<String> newDelivery(@RequestBody DeliverReqDto dtoNew) {
				User raid = userRepository.findById(dtoNew.getRiderid()).get();
				User meid = userRepository.findById(dtoNew.getMemberid()).get();
				Order orid = mealService.getOrderId(dtoNew.getOrderid());
				Date cur_time=new Date();
				Deliver del = new Deliver();
				del.setOrderid(orid);
				del.setRiderid(raid);
				del.setMemberid(meid);
				del.setDatetime(cur_time);
				del.setStatus(dtoNew.isStatus());
				del.setDelivered(dtoNew.isDelivered());
				mealService.SaveDelivery(del);
				return new ResponseEntity<>("New Delivery Successfuly added! ",HttpStatus.OK);
		}
		@PostMapping(value = "/edit-delivery")
		public ResponseEntity<String> editDelivery(@RequestBody DeliverReqDto dtoNew) {
				mealService.EditDeliveryStatus(dtoNew);
				return new ResponseEntity<>("Edit Delivery Status Successful! ",HttpStatus.OK);
			
		}
		@GetMapping("/delivery/{memId}")
		public List<Deliver> getDeliveryList(@PathVariable("memId") Long delId) {
		   List<Deliver> cam = mealService.listDeliverMember(delId);
		   return cam;
		 }	
		@GetMapping("/delivery-list/{rid}")
		public List<Deliver> getDeliveryListRider(@PathVariable("rid") Long rId) {
		   List<Deliver> cam = mealService.listDeliverRider(rId);
		   return cam;
		 }
}
