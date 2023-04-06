package com.project.MerryMeal.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.project.MerryMeal.entity.Menu;
import com.project.MerryMeal.entity.Order;
import com.project.MerryMeal.entity.User;



public class DeliverReqDto {
	private Long id;
	private Long orderid;
	private Long riderid;
	private Long memberid;
	private Date datetime;
	private boolean status;
	private boolean delivered;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getOrderid() {
		return orderid;
	}
	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}
	public Long getRiderid() {
		return riderid;
	}
	public void setRiderid(Long riderid) {
		this.riderid = riderid;
	}
	
	public Long getMemberid() {
		return memberid;
	}
	public void setMemberid(Long memberid) {
		this.memberid = memberid;
	}
	public Date getDatetime() {
		return datetime;
	}
	public void setDatetime(Date datetime) {
		this.datetime = datetime;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public boolean isDelivered() {
		return delivered;
	}
	public void setDelivered(boolean delivered) {
		this.delivered = delivered;
	}
	
	
}
