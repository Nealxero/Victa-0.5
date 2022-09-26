const API_URL =
  "http://192.168.22.122:3001/api/";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token : null,
      users: [],
      meals: [],
      favorites: []
      
    },
    actions: {
      // Use getActions to call a function within a fuction

      loadUsers: () => {
        const store = getStore();
        const userToken = localStorage.getItem('user_id');
        
        fetch(`${API_URL}user/${userToken}/daily_meals`)
          .then(data => data.json())
          .then(async (data) => {
            
            let newArray = store['users'];
          

            newArray = newArray.concat(data);
            console.log(data);
            setStore({ users: newArray });
            
          });
      },
      loadFavs: () => {
        const store = getStore();
        const userToken = localStorage.getItem('user_id');
        
        fetch(`${API_URL}user/${userToken}/favorites`)
          .then(data => data.json())
          .then(async (data) => {
            
            let newArray = store['favorites'];
          

            newArray = newArray.concat(data);
            console.log(data);
            setStore({ favorites: newArray });
            
          });
      },
      

      loadMeals: () => {
        const store = getStore();

        fetch(`${API_URL}meals`, )
          .then(data => data.json())
          .then(async (data) => {
            let newArray = store['meals'];

            newArray = newArray.concat(data);
            setStore({ meals: newArray });
          });
      },

      loadIndivUser: (url, id, plans) => {
        const store = getStore();

        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            let newArray = store[plans];
            newArray[id].info = data.result;
            setStore({ [plans]: newArray });
          });
      },

      loadIndivMeal: (url, id, plans) => {
        const store = getStore();

        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            let newArray = store[plans];
            newArray[id].info = data.result;
            setStore({ [plans]: newArray });
          });
      },
      // this function is to prevent the view of the app if the user has no token (logged in)
      protectedData : async () => {
				
				const token = sessionStorage.getItem('token');
				const response = await fetch('https://3001-nealxero-finalprojectna-fxjpcu5gpuq.ws-eu67.gitpod.io/api/private', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + token
					}
				});
				if (!response.ok) throw Error('login request failed, try again');
				const responseJson = await response.json();
				setStore(responseJson);
			},
      loadSomeData: () => {
				getActions().loadUsers()
        getActions().loadMeals()
        getActions().loadFavs()
				
			}
    },

  };
};

export default getState;
