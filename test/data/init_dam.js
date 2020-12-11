import Patient from "../../models/Patient"
import Record from "../../models/Record";
import User from "../../models/User";
import auth from "../../util/auth";


class DummyData {

    // create new dummy data if there are not available
    static async createDummyData() {

        const patient = new Patient({firstname: 'Nehemia', lastname: 'Mukuruwabo', email: 'test3@gmail.com', gender: "male", phone: '123'});
        await patient.save();

        const patient1 = new Patient({firstname: 'Aime', lastname: 'Nitonkuru', email: 'test5@gmail.com', gender: "male", phone: '123'});
        await patient1.save();


        const doctor = new User({ firstname: 'Augistin', lastname: 'Mushumba', email: 'test2@gmail.com', phone: '456', password: auth.hashPassword('test2'), role: "doctor" });
        await doctor.save();

        const doctor1 = new User({ firstname: 'Olivie', lastname: 'MUkarukudo', email: 'test6@gmail.com', phone: '456', password: auth.hashPassword('test6'), role: "doctor" });
        await doctor1.save();

        const receptionist = new User({ firstname: 'Elie', lastname: 'Kamanzi', email: 'test1@gmail.com', phone: '590', password: auth.hashPassword('test1'), role: "receptionist" });
        await receptionist.save();

        const receptionist1 = new User({ firstname: 'Yves', lastname: 'Dejuru', email: 'test7@gmail.com', phone: '590', password: auth.hashPassword('test7'), role: "receptionist" });
        await receptionist1.save();

        const admin = new User({ firstname: 'Elie', lastname: 'Kamanzi', email: 'test4@gmail.com', phone: '590', password: auth.hashPassword('test1'), role: "admin" });
        await admin.save();

        const admin1 = new User({ firstname: 'Ernet', lastname: 'Peace', email: 'test8@gmail.com', phone: '590', password: auth.hashPassword('test8'), role: "admin" });
        await admin1.save();

        const patientTo = await Patient.findOne({email: "test3@gmail.com"})
        const record = new Record({ patient: patientTo._id, hospital: "Kibagabaga hospital", doctorName: "Kalisa Ange", details: "abdominal pain"});
        await record.save()

        const patientTo1 = await Patient.findOne({email: "test5@gmail.com"})
        const record1 = new Record({ patient: patientTo1._id, hospital: "Kibagabaga hospital", doctorName: "Muhirwa Annette", details: "head pain"});
        await record1.save()
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