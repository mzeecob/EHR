import Insurance from "../../models/Insurance"
import Car from "../../models/Car";
import User from "../../models/User";
import auth from "../../util/auth";


class DummyData {

    // create new dummy data if there are not available
    static async createDummyData() {

        const insurance = new Insurance({name: 'A+', descrption: 'good one'});
        await insurance.save();


        const user = new User({ firstname: 'Augistin', lastname: 'Mushumba', email: 'test1@gmail.com', phone: '456', password: auth.hashPassword('test1') });
        await user.save();

        const userTo = await User.findOne({email: 'test1@gmail.com'});
        const car = new Car ({ plateNumber: 'RAD123E', seats: '5', owner: userTo._id, type: 'jeep', yellowCardNumber: 'RAD455' });

        await car.save();

    }

    // check for data in database, to save dummy data if there are not
    static async dataExist(){

        try {
            // remove any data that has been added 
            await User.collection.drop();
            await Car.collection.drop();
            await Insurance.collection.drop();
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