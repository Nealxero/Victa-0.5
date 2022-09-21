const API_URL =
  "http://192.168.22.125:3001/api/";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      meals: [],
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
            setStore({ users: newArray });
            
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

      updateFavoriteList: (newElement) => {
        const store = getStore();
        const newFavorites = [...store.users.favorites, newElement];
        setStore({ favorites: newFavorites });
      },

      deleteFavorite: (data) => {
        const store = getStore();

        let newFavorites = store.users.favorites.filter((item, i) => i != data);
        setStore({ favorites: newFavorites });
      },
      loadSomeData: () => {
				getActions().loadUsers()
        getActions().loadMeals()
				
			}
    },

  };
};

export default getState;
