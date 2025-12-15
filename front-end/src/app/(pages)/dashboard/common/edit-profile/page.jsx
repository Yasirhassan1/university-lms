"use client"
import Field from "@/app/components/profile/Field";
import {data} from "./data";
export default function EditProfile(){
    return(
        <div className="container flex flex-col gap-4">
        <h3 className="">Edit Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
       <Field lable="Name" value={data.name} onChange={(e)=>data.name=e.target.value}/>
       <Field lable="Application No" value={data.applicationNo} onChange={(e)=>data.applicationNo=e.target.value}/>
       <Field lable="Registration No" value={data.registrationNo} onChange={(e)=>data.registrationNo=e.target.value}/>
       <Field lable="Program" value={data.program} onChange={(e)=>data.program=e.target.value}/>
       <Field lable="Department" value={data.department} onChange={(e)=>data.department=e.target.value}/>
       <Field lable="Session" value={data.session} onChange={(e)=>data.session=e.target.value}/>
       <Field lable="Gender" value={data.gender} onChange={(e)=>data.gender=e.target.value}/>
       <Field lable="Date of Birth" value={data.dateOfBirth} onChange={(e)=>data.dateOfBirth=e.target.value}/>
       <Field lable="Village" value={data.village} onChange={(e)=>data.village=e.target.value}/>
       <Field lable="Permanent Address" value={data.permanentAddress} onChange={(e)=>data.permanentAddress=e.target.value}/>
       <Field lable="Cell No" value={data.cellNo} onChange={(e)=>data.cellNo=e.target.value}/>
       <Field lable="Email" value={data.email} onChange={(e)=>data.email=e.target.value}/>
       <Field lable="Father Name" value={data.fatherName} onChange={(e)=>data.fatherName=e.target.value}/>
       <Field lable="Father Cell No" value={data.fatherCellNo} onChange={(e)=>data.fatherCellNo=e.target.value}/>
       <Field lable="Father Occupation" value={data.fatherOccupation} onChange={(e)=>data.fatherOccupation=e.target.value}/>
        </div>

        <div className="buttons flex flex-wrap gap-4 mt-12">
            <button className="bg-green-700 px-4 py-2 rounded-lg text-white">Edit</button>
            <button className="bg-green-700 px-4 py-2 rounded-lg text-white">Save</button>
        </div>
        </div>

    )
}