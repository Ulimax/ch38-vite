// Import our custom CSS
import './style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getUsersUsignFetch, getUsersUsingAxios } from './src/js/getUsers'
import { userCards } from './src/js/userCards';

const getUsers = async()=>{
    // const users = await getUsersUsignFetch("https://reqres.in/api/users?page=2");

    const users = await getUsersUsingAxios("https://reqres.in/api/users?page=2");
    console.log( users );
    userCards(users);
}

getUsers();


