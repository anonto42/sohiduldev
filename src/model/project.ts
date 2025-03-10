import { Schema, model, Document, Model, models } from "mongoose";

export interface ProjectSchemaType extends Document{
    title: string;
    liveLink: string;
    frontImage: string;
}

const projectsSchema: Schema<ProjectSchemaType> = new Schema({
    title:{
        type : String,
        required: true
    },
    liveLink:{
        type : String,
        required: true
    },
    frontImage:{
        type : String,
        required: true
    }
},{timestamps:true});

const ProjectModel = ( models.Project as Model<ProjectSchemaType> ) || model<ProjectSchemaType>('Project',projectsSchema);
export default ProjectModel;