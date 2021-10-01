/* import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json=await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type:'GET_DOGS',
            payload:json.data
        })
    };
};

export function dogDetail(id){
    return function(dispatch){
        axios.get('http://localhost:3001/dogs/'+id);
        then(dog=>{
            dispatch({
                type:'DOG_DETAIL',
            payload:json.data
            })
        })
    }
};

export function dogsName(name){
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/dogs?name='+name)
        return dispatch({
            type:'DOG_DETAIL',
            payload:json.data
        })
    }
};

export function getTemperament(){
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/temperament/');
        return dispatch({
            type:'GET_TEMPERAMENTS',
            payload:json.data
        })
    }
};

export function filterDogsCreated (payload){
    return {
        type: 'FILTER_DOGS_CREATED',
        payload
    }
};


export function postDogs(payload) {
    return async function (dispatch){
        var json = await axios.post("http://localhost:3001/dog/",payload); 
        console.log(json);
        return json;

    }
}


export function orderAZ(payload) {
    return function(dispatch){
        return axios.get('https://localhosta:3001/dogs')
        .then(d=>{
            const az=d.data.sort((a,b)=>{
                if(a.name>b.name)return 1
                if(a.name<b.name)return -1
                return 0
            })
            dispatch ({
                type: 'ORDER_AZ',
                payload:az
            })
        })
    }
   
}; 
export function orderZA(payload) {
    return function(dispatch){
        return axios.get('https://localhosta:3001/dogs')
        .then(d=>{
            const za=d.data.sort((a,b)=>{
                if(a.name>b.name)return 1
                if(a.name<b.name)return -1
                return 0
            })
            dispatch ({
                type: 'ORDER_ZA',
                payload:za
            })
        })
    }
   
}; 

export function getLight() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderLight = dog.data.sort((a, b) => {
                    if (typeof dog.data.id === 'string') {
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                        if (parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                        return 0
                    }
                })
                dispatch({
                    type: 'ORDER_LIGHT',
                    payload: orderLight
                })
            })
    }
}

export function getHeavy() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/dogs')
            .then(dog => {
                const orderHeavy = dog.data.sort((b, a) => {
                    if (typeof dog.data.id === 'string') {
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0
                    } else {
                        if (parseInt(a.weight.metric) > parseInt(b.weight.metric)) return 1
                        if (parseInt(a.weight.metric) < parseInt(b.weight.metric)) return -1
                        return 0
                    }
                })
                dispatch({
                    type: 'ORDER_HEAVY',
                    payload: orderHeavy
                })
            })
    }
} */
import axios from 'axios';

export function getDogs(){
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: 'GET_DOGS', 
            payload: json.data
    
        }) 
    }; 
};
export function dogDetail(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/dogs/' + id);
            return dispatch({
                type: 'DOG_DETAIL', 
                payload: json.data
            })
        } catch (error){
            console.log(error);
        }
    }
};


export function getNameDogs (name){ 
    return async function(dispatch) { 
        var json = await axios.get("http://localhost:3001/dogs?name=" + name );
        return dispatch({
            type: 'GET_NAME_DOGS',
            payload: json.data
        });

    };    
}; 

export function getTemperaments() {
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/temperament/");
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data

        })

    }
};

export function filterDogsCreated (payload){
    return {
        type: 'FILTER_DOGS_CREATED',
        payload
    }
};


export function postDogs(payload) {
    return async function (dispatch){
        var json = await axios.post("http://localhost:3001/dog",payload); 
        console.log(json);
        return json;

    }
}


export function byOrder(payload) {
    return {
        type: 'ORDER',
        payload
    }
}; 

export function byOrderWeight(payload) {
    return {
        type: 'ORDER_WEIGHT',
        payload
    }
};