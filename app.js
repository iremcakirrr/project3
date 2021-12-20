class Request {
    get(url){ //GET REQUEST
        return new Promise((resolve,reject) => {

            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

        })
    }

       post(url,data){
           return new Promise((resolve, reject) =>{

            fetch(url,{
    
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                 "Content-type": "application/json; charset=UTF-8"
               }
             })
             .then(response => response.json())
             .then(data => resolve(data))
             .catch(err => reject(err));
        
            
           })

    }

    put(url,data) {
        return new Promise((resolve, reject) =>{
            fetch(url,{ 
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    
        })
      
    }

    delete(url){
        return new Promise((resolve, reject) =>{
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
  method: 'DELETE',

        }).then(response => resolve("veri silme işlemi başarılı"))
        .catch(err=>reject(err));

    });
    }
}


const request = new Request();
// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Tarkan karma"})
// .then(album => console.log(album))
// .catch(error => console.log(error));


request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(error => console.log(err));
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => {
    
//     console.log(albums);
// })
// .catch(err => console.log(err));
// console.log(albums); /7 asenkron
