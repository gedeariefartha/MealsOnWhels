package com.project.MerryMeal.entity;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "order_tb")
public class Order {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "menu_id")
	private Menu menuid;
	@ManyToOne
	@JoinColumn(name = "member_id")
	private User memberid;
	@ManyToOne
	@JoinColumn(name = "partner_id")
	private User partnerid;
	private Date datetime;
	private boolean status;
	
	public Order() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Menu getMenuid() {
		return menuid;
	}

	public void setMenuid(Menu menuid) {
		this.menuid = menuid;
	}

	public User getMemberid() {
		return memberid;
	}

	public void setMemberid(User memberid) {
		this.memberid = memberid;
	}

	public User getPartnerid() {
		return partnerid;
	}

	public void setPartnerid(User partnerid) {
		this.partnerid = partnerid;
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
	
}
