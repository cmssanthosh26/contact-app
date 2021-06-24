export default function() {
  this.get('/lists');
  this.get('/lists/:id');
  this.post('/lists' , function(schema){
    let attr = this.normalizedRequestAttrs();
    let post = schema.lists.create(attr);
    //return { alertMessage : "Record inserted successfully" , post };
    return {
      data : {
        id : post.id,
        type : "lists",
        attributes : {
          alertMessage : "Record inserted successfully" ,
          post,
        }
      }
    }
  });
  this.patch('/lists/:id' , /*function(schema , request){
    let id = request.params.id;
    let attr = this.normalizedRequestAttrs();
    let post = schema.list.find(id).update(attr);
    return { alertMessage : "Record updated successfully" , post };
  }*/);
  this.del('/lists/:id');
}


/*

Error: Ember Data Request POST /lists returned a 500\nPayload (application/json)\n[object Object]\n    
at ErrorClass.AdapterError (http://localhost:4200/assets/vendor.js:68125:29)\n    at new ErrorClass (http://localhost:4200/assets/vendor.js:68158:24)\n    
at JSONAPIAdapter.handleResponse (http://localhost:4200/assets/vendor.js:70073:20)\n    at ajaxError (http://localhost:4200/assets/vendor.js:70395:25)\n    
at fetchErrorHandler (http://localhost:4200/assets/vendor.js:70451:12)\n    at http://localhost:4200/assets/vendor.js:70150:19\n    
at invokeCallback (http://localhost:4200/assets/vendor.js:64509:17)\n    at publish (http://localhost:4200/assets/vendor.js:64492:9)\n  
  at http://localhost:4200/assets/vendor.js:58819:53\n    at invoke (http://localhost:4200/assets/vendor.js:57022:16)" */