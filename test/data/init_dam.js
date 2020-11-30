import Patient from "../../models/Patient"

import User from "../../models/User";
import auth from "../../util/auth";


class DummyData {

    // create new dummy data if there are not available
    static async createDummyData() {

        const patient = new Patient({firstname: 'Nehemia', lastname: 'Mukuruwabo', email: 'test2@gmail.com', gender: "male", phone: '123', record: 'abdominal pain'});
        await patient.save();


        const user = new User({ firstname: 'Augistin', lastname: 'Mushumba', email: 'test1@gmail.com', phone: '456', password: auth.hashPassword('test1') });
        await user.save();


    }

    // check for data in database, to save dummy data if there are not
    static async dataExist(){

        try {
            // remove any data that has been added 
            await User.collection.drop();
            await Patient.collection.drop();
            console.log("***Existing data have been removed****")

            // add initual data
            this.createDummyData();
            console.log(">>>New data have been Created")


        } catch (error) {
            throw error;
        }

        

    }


}

export default DummyData;