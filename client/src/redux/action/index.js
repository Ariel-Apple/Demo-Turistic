/*  import axios from 'axios';




export const AllPostTuristic = () => {
  return async (dispach) => {
    const res = await axios.get('https://turistico-production.up.railway.app/turistic');
    const data = res.data.User
    return dispach({
        type: "ALL_POST_TURISTIC",
        payload: data
    })
  }
};

export const DetailsPostTuristic = (idTuristic) => {
  return async (dispach) => {
    const res = await axios.get(`https://turistico-production.up.railway.app/turistic/${idTuristic}`);
    const data = res.data.details
    return dispach({
        type: "DETAIL_POST_TURISTIC",
        payload: data
    })
  }
};



// postActions.js

export const createPost = (postData, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://turistico-production.up.railway.app/post', postData, {
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
    const res = await axios.post('https://turistico-production.up.railway.app/auth/register', payload);
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
      const response = await axios.post("https://turistico-production.up.railway.app/auth/login", {
        email,
        password,
      });

      // Verifica si la respuesta es exitosa y tiene un token
      if (response.status === 200 && response.data.token) {
        // Almacena el token en el local storage
        localStorage.setItem("token", response.data.token);

        // Despacha la acción de éxito de inicio de sesión con el token
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.token,
        });
      } else {
        // Si no se cumple la condición anterior, lanza un error
        throw new Error("Error during login.");
      }
    } catch (error) {
      // En caso de error, dispara la acción de error de inicio de sesión
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
};


export const UserLogout = (payload) => {
  return async (dispach) => {
    const res = await axios.post('https://turistico-production.up.railway.app/logout', payload);
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
   const res = await axios.get('https://turistico-production.up.railway.app/user', {
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
}  */  

  import axios from 'axios';




export const AllPostTuristic = () => {
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
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      // Verifica si la respuesta es exitosa y tiene un token
      if (response.status === 200 && response.data.token) {
        // Almacena el token en el local storage
        localStorage.setItem("token", response.data.token);

        // Despacha la acción de éxito de inicio de sesión con el token
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.token,
        });
      } else {
        // Si no se cumple la condición anterior, lanza un error
        throw new Error("Error during login.");
      }
    } catch (error) {
      // En caso de error, dispara la acción de error de inicio de sesión
      dispatch({ type: "LOGIN_ERROR" });
    }
  };
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