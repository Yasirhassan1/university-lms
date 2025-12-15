import Field from "@/app/components/profile/Field";
import {data} from "./data";
export default function EditProfile(){
    return(
        <div className="container flex flex-col gap-4">
        <h3 className="">Edit Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
       <Field lable="Name" value={data.name}/>
       <Field lable="Application No" value={data.applicationNo}/>
       <Field lable="Registration No" value={data.registrationNo}/>
       <Field lable="Program" value={data.program}/>
       <Field lable="Department" value={data.department}/>
       <Field lable="Session" value={data.session}/>
       <Field lable="Gender" value={data.gender}/>
       <Field lable="Date of Birth" value={data.dateOfBirth}/>
       <Field lable="Village" value={data.village}/>
       <Field lable="Permanent Address" value={data.permanentAddress}/>
       <Field lable="Cell No" value={data.cellNo}/>
       <Field lable="Email" value={data.email}/>
       <Field lable="Father Name" value={data.fatherName}/>
       <Field lable="Father Cell No" value={data.fatherCellNo}/>
       <Field lable="Father Occupation" value={data.fatherOccupation}/>
        </div>

        <div className="buttons flex flex-wrap gap-4 mt-12">
            <button className="bg-green-700 px-4 py-2 rounded-lg text-white">Edit</button>
            <button className="bg-green-700 px-4 py-2 rounded-lg text-white">Save</button>
        </div>
        </div>

    )
}