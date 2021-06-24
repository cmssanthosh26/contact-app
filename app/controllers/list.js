import Controller from '@ember/controller';

export default Controller.extend ({
    actions : {
        async remove(param){
            let person = await this.store.findRecord( 'list' , param , { backgroundReload: false } );
            person.deleteRecord();
            person.save();
            alert("Record deleted successfully"); 
            this.transitionToRoute('lists');
        }
    }
});