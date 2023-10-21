import axios from 'axios';




export const AllPostTuristic = () => {
  return async (dispach) => {
    const res = await axios.get('https://demo-turistic-production.up.railway.app/turistic');
    const data = res.data.User
    return dispach({
        type: "ALL_POST_TURISTIC",
        payload: data
    })
  }
 };
 
 export const DetailsPostTuristic = (idTuristic) => {
  return async (dispach) => {
    const res = await axios.get(`https://demo-turistic-production.up.railway.app/turistic/${idTuristic}`);
    const data = res.data.details
    return dispach({
        type: "DETAIL_POST_TURISTIC",
        payload: data
    })
  }
 };
 export const HostesstUser = (idHostess) => {
  return async (dispach) => {
    const res = await axios.get(`https://demo-turistic-production.up.railway.app/hostess/${idHostess}`);
    const data = res.data.details
    return dispach({
        type: "HOSTESS_USER",
        payload: data
    })
  }
 };
 
 
 
 // postActions.js
 
 export const createPost = (postData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://demo-turistic-production.up.railway.app/post', postData, {
        headers: {
          Authorization: `${token}`,
        },
      });
 
      const createdPost = response.data.post;
 
      dispatch({
        type: 'POST_CREATED',
        payload: createdPost,
      });
 
      return createdPost;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };
 };
 
 export const UserRegister = (payload) => {
  return async (dispach) => {
    const res = await axios.post('https://demo-turistic-production.up.railway.app/auth/register', payload);
    const data = res.data
    return dispach({
        type: "USER_REGISTER",
        payload: data
    })
  }
 }
 
 
 export const UserLogin = (email, password) => {
   return async (dispatch) => {
     try {
       const isServerOnline = await checkServerStatus(); // Verificar si el servidor está en línea
 
       if (isServerOnline) {
         const response = await axios.post("https://demo-turistic-production.up.railway.app/auth/login", {
           email,
           password,
         });
 
         if (response.status === 200 && response.data.token) {
           localStorage.setItem("token", response.data.token);
 
           dispatch({
             type: "LOGIN_SUCCESS",
             payload: response.data.token,
           });
         } else {
           throw new Error("Error durante el inicio de sesión.");
         }
       } else {
         localStorage.removeItem("token"); // Elimina el token si el servidor no está disponible
         throw new Error("El servidor no está disponible.");
       }
     } catch (error) {
       dispatch({ type: "LOGIN_ERROR" });
     }
   };
 };
 
 const checkServerStatus = async () => {
   try {
     const response = await axios.get("https://demo-turistic-production.up.railway.app/status");
     return response.status === 200;
   } catch (error) {
     return false;
   }
 };
 
 
 export const UserLogout = (payload) => {
  return async (dispach) => {
    const res = await axios.post('https://demo-turistic-production.up.railway.app/logout', payload);
    const data = res.data
    return dispach({
        type: "LOGOUT_USER",
        payload: data
    })
  }
 }
 
 export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token
 });
 export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
 };
 
 
 export const dataPersonal = (token) => {
  return async (dispatch) => {
   const res = await axios.get('https://demo-turistic-production.up.railway.app/user', {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    "Content-Type": "application/json",
  },
   }) ;
   const data = await res.data;
 
   return dispatch({
    type:'SET_DATA_PERSONAL',
    payload: data
   })
  }
 };
 
 export const updatePersonal = (userId, userData) => {
   return async (dispatch) => {
     try {
       const res = await axios.put(`https://demo-turistic-production.up.railway.app/user/preregister/${userId}`, userData);
       const data = await res.data;
 
       return dispatch({
         type: 'UPDATE_PERSONAL',
         payload: data
       });
     } catch (error) {
       // Maneja los errores apropiadamente
       console.error(error);
     }
   };
 };
 
 
 
 
 
 
 export const DeletePost = (postId) => {
  return async (dispach) => {
    const res = await axios.delete(`https://demo-turistic-production.up.railway.app/post/${postId}`);
    const data = res.data
    return dispach({
        type: "DELETE_POST",
        payload: data
    })
  }
 };
 
 export const OnlyAllPost = () => {
  return async (dispach) => {
    const res = await axios.get(`https://demo-turistic-production.up.railway.app/posthostess`);
    const data = res.data.OnlyPosts
    return dispach({
        type: "ONLY_POST",
        payload: data
    })
  }
 };     
 
 export const UserPostDetails = (idUser) => {
   return async (dispach) => {
     const res = await axios.get(`https://demo-turistic-production.up.railway.app/user/${idUser}`);
     const data = res.data.UserDetails
     return dispach({
         type: "USER_POST",
         payload: data
     })
   }
  }; 
 
 
 











 






 /*  export const AllPostTuristic = () => {
 return async (dispach) => {
   const res = await axios.get('http://localhost:4000/turistic');
   const data = res.data.User
   return dispach({
       type: "ALL_POST_TURISTIC",
       payload: data
   })
 }
};

export const DetailsPostTuristic = (idTuristic) => {
 return async (dispach) => {
   const res = await axios.get(`http://localhost:4000/turistic/${idTuristic}`);
   const data = res.data.details
   return dispach({
       type: "DETAIL_POST_TURISTIC",
       payload: data
   })
 }
};
export const HostesstUser = (idHostess) => {
 return async (dispach) => {
   const res = await axios.get(`http://localhost:4000/hostess/${idHostess}`);
   const data = res.data.details
   return dispach({
       type: "HOSTESS_USER",
       payload: data
   })
 }
};



// postActions.js

export const createPost = (postData, token) => {
 return async (dispatch) => {
   try {
     const response = await axios.post('http://localhost:4000/post', postData, {
       headers: {
         Authorization: `${token}`,
       },
     });

     const createdPost = response.data.post;

     dispatch({
       type: 'POST_CREATED',
       payload: createdPost,
     });

     return createdPost;
   } catch (error) {
     console.error('Error creating post:', error);
     throw error;
   }
 };
};

export const UserRegister = (payload) => {
 return async (dispach) => {
   const res = await axios.post('http://localhost:4000/auth/register', payload);
   const data = res.data
   return dispach({
       type: "USER_REGISTER",
       payload: data
   })
 }
}


export const UserLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const isServerOnline = await checkServerStatus(); // Verificar si el servidor está en línea

      if (isServerOnline) {
        const response = await axios.post("http://localhost:4000/auth/login", {
          email,
          password,
        });

        if (response.status === 200 && response.data.token) {
          localStorage.setItem("token", response.data.token);

          dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data.token,
          });
        } else {
          throw new Error("Error durante el inicio de sesión.");
        }
      } else {
        localStorage.removeItem("token"); // Elimina el token si el servidor no está disponible
        throw new Error("El servidor no está disponible.");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
};

const checkServerStatus = async () => {
  try {
    const response = await axios.get("http://localhost:4000/status");
    return response.status === 200;
  } catch (error) {
    return false;
  }
};


export const UserLogout = (payload) => {
 return async (dispach) => {
   const res = await axios.post('http://localhost:4000/logout', payload);
   const data = res.data
   return dispach({
       type: "LOGOUT_USER",
       payload: data
   })
 }
}

export const loginSuccess = (token) => ({
 type: 'LOGIN_SUCCESS',
 payload: token
});
export const logoutUser = () => {
 return {
   type: 'LOGOUT_USER',
 };
};


export const dataPersonal = (token) => {
 return async (dispatch) => {
  const res = await axios.get('http://localhost:4000/user', {
   method: "GET",
   headers: {
     Authorization: `${token}`,
   "Content-Type": "application/json",
 },
  }) ;
  const data = await res.data;

  return dispatch({
   type:'SET_DATA_PERSONAL',
   payload: data
  })
 }
};

export const updatePersonal = (userId, userData) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:4000/user/preregister/${userId}`, userData);
      const data = await res.data;

      return dispatch({
        type: 'UPDATE_PERSONAL',
        payload: data
      });
    } catch (error) {
      // Maneja los errores apropiadamente
      console.error(error);
    }
  };
};






export const DeletePost = (postId) => {
 return async (dispach) => {
   const res = await axios.delete(`http://localhost:4000/post/${postId}`);
   const data = res.data
   return dispach({
       type: "DELETE_POST",
       payload: data
   })
 }
};

export const OnlyAllPost = () => {
 return async (dispach) => {
   const res = await axios.get(`http://localhost:4000/posthostess`);
   const data = res.data.OnlyPosts
   return dispach({
       type: "ONLY_POST",
       payload: data
   })
 }
};     

export const UserPostDetails = (idUser) => {
  return async (dispach) => {
    const res = await axios.get(`http://localhost:4000/user/${idUser}`);
    const data = res.data.UserDetails
    return dispach({
        type: "USER_POST",
        payload: data
    })
  }
 }; 


 */