import axios from "axios";

export async function getNegocios() {
    
    const axios = require("axios");


    const respuesta = await axios.get('https://bing-news-search1.p.rapidapi.com/news/search?q=Negocios',{
                                        params: {textFormat: 'Raw', safeSearch: 'Off', setLang: 'es'},
                                        headers: {
                                        'X-BingApis-SDK': 'true',
                                        'X-RapidAPI-Key': '123aca0c20mshb2ec03e5ed6d2eap1c33a4jsn3852a3586d65',
                                        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                                        }
    });
    return respuesta.data.value;
    
}

export async function getEntretenimiento() {
    
    const axios = require("axios");


    const respuesta = await axios.get('https://bing-news-search1.p.rapidapi.com/news/search?q=Entretenimiento',{
                                        params: {textFormat: 'Raw', safeSearch: 'Off', setLang: 'es'},
                                        headers: {
                                        'X-BingApis-SDK': 'true',
                                        'X-RapidAPI-Key': '123aca0c20mshb2ec03e5ed6d2eap1c33a4jsn3852a3586d65',
                                        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                                        }
    });
    return respuesta.data.value;
    
}

export async function getEconomiaDigital() {
    
    const axios = require("axios");


    const respuesta = await axios.get('https://bing-news-search1.p.rapidapi.com/news/search?q=Economia+digital',{
                                        params: {textFormat: 'Raw', safeSearch: 'Off', setLang: 'es'},
                                        headers: {
                                        'X-BingApis-SDK': 'true',
                                        'X-RapidAPI-Key': '123aca0c20mshb2ec03e5ed6d2eap1c33a4jsn3852a3586d65',
                                        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                                        }
    });
    return respuesta.data.value;
    
}
