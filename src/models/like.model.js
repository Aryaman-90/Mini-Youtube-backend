import mongoose, { Schema } from "mongoose";



const LikeSchema = new Schema({
   
    video :{
        type :Schema.Types.ObjectId,
        ref : "Video",
        required : true

    },
   comment :{
    type :Schema.Types.ObjectId,
    ref : "Comment",
    required : true

},
    likedBy :{
        type :Schema.Types.ObjectId,
        ref : "User",
        required : true

    },
    tweet : {
        type :Schema.Types.ObjectId,
        ref : "Tweet",
        required : true

    }
    
},{timestamps: true});





commentSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);