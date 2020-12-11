import Patient from "../../models/Patient"
import Record from "../../models/Record";
import User from "../../models/User";
import auth from "../../util/auth";


class DummyData {

    // create new dummy data if there are not available
    static async createDummyData() {

        const patient = new Patient({NID: 1234556, firstname: 'Nehemia', lastname: 'Mukuruwabo', email: 'test3@gmail.com', gender: "male", phone: '123'});
        await patient.save();


        const doctor = new User({ firstname: 'Augistin', lastname: 'Mushumba', email: 'test2@gmail.com', phone: '456', password: auth.hashPassword('test2'), role: "doctor" });
        await doctor.save();

        const receptionist = new User({ firstname: 'Elie', lastname: 'Kamanzi', email: 'test1@gmail.com', phone: '590', password: auth.hashPassword('test1'), role: "receptionist" });
        await receptionist.save();

        const admin = new User({ firstname: 'Elie', lastname: 'Kamanzi', email: 'test1@gmail.com', phone: '590', password: auth.hashPassword('test1'), role: "admin" });
        await admin.save();

        const patientTo = await Patient.findOne({email: "test3@gmail.com"})
        const doctorTo = await User.findOne({email: "test2@gmail.com"})
        const record = new Record({ patient: patientTo._id, doctor: doctorTo._id, hospital: "Kibagabaga hospital", doctor: "Kalisa Ange", details: "abdominal pain"});
        await record.save()
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
            console.log(">>>New data has been Created")



        } catch (error) {
            console.log(">>> initial data has been Created")
        }

        

    }


}

export default DummyData;