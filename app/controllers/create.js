import Controller from '@ember/controller';

export default Controller.extend ({
    /*name : "",
    address : "",
    dob : "",
    mobNumber : "",
    actions : {
        add(){
            const post = this.store.createRecord('list',{
                name : this.name,
                dob : this.dob,
                address : this.address,
                mobNumber : this.mobNumber
            });
            
            post.save();
            alert("Record inserted successfully");
            this.name = "";
            this.address = "";
            this.dob = "";
            this.mobNumber = "";
            this.transitionToRoute("lists");
        }
    }*/
    actions : {
        async add(){
            let num = await this.model.save();
            console.log(num);
            alert(num.alertMessage);
            console.log(num.name);
            console.log(this.model);
            this.transitionToRoute("list",this.model.id);
        }
    }
});
