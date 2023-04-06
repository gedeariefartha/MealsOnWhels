package com.project.MerryMeal.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.MerryMeal.dto.CampaignRegDto;
import com.project.MerryMeal.dto.DeliverReqDto;
import com.project.MerryMeal.dto.MenuRegDto;
import com.project.MerryMeal.dto.MessageDto;
import com.project.MerryMeal.dto.OrderReqDto;
import com.project.MerryMeal.entity.Campaign;
import com.project.MerryMeal.entity.Deliver;
import com.project.MerryMeal.entity.Menu;
import com.project.MerryMeal.entity.Order;
import com.project.MerryMeal.entity.User;
import com.project.MerryMeal.entity.Volunteer;
import com.project.MerryMeal.repository.CampaignRepository;
import com.project.MerryMeal.repository.DeliverRepository;
import com.project.MerryMeal.repository.MenuRepository;
import com.project.MerryMeal.repository.OrderRepository;
import com.project.MerryMeal.repository.UserRepository;
import com.project.MerryMeal.repository.VolunteerRepository;

@Service
public class MealService {
	@Autowired
    private VolunteerRepository volRepository;
	@Autowired
    private CampaignRepository camRepository;
	@Autowired
    private MenuRepository menRepository;
	@Autowired
    private OrderRepository ordRepository;
	@Autowired
    private DeliverRepository delRepository;
	@Autowired
    private UserRepository userRepository;

	public User getUserId(Long id) {
		return userRepository.findById(id).get();
	}
	public List<User> listMember() {
		List<User> listMember = userRepository.findByRoleMember();
		return listMember;
	}
	public List<User> listRider() {
		List<User> listMember = userRepository.findByRoleRider();
		return listMember;
	}
	public List<User> listUser() {
		List<User> listUser = userRepository.findAll();
		return listUser;
	}
//campaign	
	public Campaign SaveCampaign(Campaign cam) {
		return camRepository.save(cam);
	}
	public void EditCampaign(CampaignRegDto cam) {
		Date cur_time=new Date();
		Campaign edit = get(cam.getId());
		edit.setId(cam.getId());
		edit.setTitle(cam.getTitle());
		edit.setDesc(cam.getDesc());
		edit.setTimedate(cur_time);
		edit.setStatus(cam.isStatus());
		camRepository.save(edit);
	}
	public Campaign get(Long id) {
		return camRepository.findById(id).get();
	}
	public List<Campaign> listCampaignByStatus() {
		List<Campaign> listCampaign = camRepository.findByStatusTrue();
		return listCampaign;
	}
	public List<Campaign> listAllCampaign() {
		List<Campaign> listCampaign = camRepository.findAll();
		return listCampaign;
	}
//Volunteer	
	public Volunteer SaveVolunteer(Volunteer cam) {
		return volRepository.save(cam);
	}
	public Volunteer getVolunteerCheck(String email, Long cid) {
		return volRepository.findByEmailCampaign(email, cid);
	}
	public List<Volunteer> listAllVolunteer() {
		List<Volunteer> listVolunteer = volRepository.findAll();
		return listVolunteer;
	}
//Menu
	public Menu SaveMenu(Menu mdto) {

	    return menRepository.save(mdto);
	}
	public void EditMenu(MenuRegDto dto) {
		Menu edit = getMenuId(dto.getId());
		edit.setId(dto.getId());
		edit.setName(dto.getName());
		edit.setDesc(dto.getDesc());
		edit.setStatus(dto.isStatus());
		menRepository.save(edit);
	}
	public Menu getMenuId(Long id) {
		return menRepository.findById(id).get();
	}
	public List<Menu> listAllMenu() {
		List<Menu> list = menRepository.findAll();
		return list;
	}
	public List<Menu> listMenuStatus() {
		List<Menu> list = menRepository.findByStatusTrue();
		return list;
	}
	public List<Menu> listMenuPartner(Long pid) {
		List<Menu> list = menRepository.findByPartner(pid);
		return list;
	}
//Order
	public Order SaveOrder(Order dta) {
		return ordRepository.save(dta);
	}
	public void EditOrderStatus(OrderReqDto dto) {
		Order edit = getOrderId(dto.getId());
		edit.setId(dto.getId());
		edit.setStatus(dto.isStatus());
		ordRepository.save(edit);
	}
	public Order getOrderId(Long id) {
		return ordRepository.findById(id).get();
	}
	public List<Order> listOrderPartner(Long pid) {
		List<Order> list = ordRepository.findByPartner(pid);
		return list;
	}
	public List<Order> listOrderStatus() {
		List<Order> list = ordRepository.findByStatusTrue();
		return list;
	}
// Delivery
	public Deliver SaveDelivery(Deliver dta) {
		return delRepository.save(dta);
	}
	public void EditDeliveryStatus(DeliverReqDto dto) {
		Deliver edit = getDeliverId(dto.getId());
		edit.setId(dto.getId());
		edit.setDelivered(dto.isDelivered());
		delRepository.save(edit);
	}
	public Deliver getDeliverId(Long id) {
		return delRepository.findById(id).get();
	}
	public List<Deliver> listDeliverMember(Long pid) {
		List<Deliver> list = delRepository.findByDeliveredFalse(pid);
		return list;
	}
	public List<Deliver> listDeliverRider(Long pid) {
		List<Deliver> list = delRepository.findByRider(pid);
		return list;
	}
}
