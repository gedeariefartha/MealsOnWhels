import axios from "axios";


// GET List Role
export function getListRole(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/auth/role-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Role Detail
export function getRole(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/auth/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET List Role
export function getListCampaign(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/campaign-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Role Detail
export function getCampaign(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/campaign/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET List Menu
export function getListMenu(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/menu-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListMenuPartner(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/menu-partner/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
// GET Menu Detail
export function getMenu(id, callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/menu/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListOrderPartner(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/order-list/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListVolunteer(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/volunteer-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListDeliver(callback, errorCallback) {
  axios
    .get("http://localhost:8082/api/meal/deliver-list")
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListDeliverRider(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/delivery-list/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListDeliveryMember(id,callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/meal/delivery/${id}`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListMember(callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/users/member-list`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListUser(callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/users/user-list`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}
export function getListRider(callback, errorCallback) {
  axios
    .get(`http://localhost:8082/api/users/rider-list`)
    .then((res) => {
      if (callback != null) {
        callback(res.data);
      }
    })
    .catch((err) => {
      if (errorCallback != null) {
        errorCallback(err.message);
      }
    });
}


