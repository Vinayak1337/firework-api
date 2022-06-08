const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieThumnailNameSchema = new Schema(
  {
    movieName: {
      type: String,
      trim: true,
    },
    videoFIle: {
      type: String,
      trim: true,
    },
    thumnalFile:{
        type:String,
        trim:true,
    },
    caption:{
        type:String,
        trim:true,
        def:""
    },
    captionFontSize:{
      type:String,
      trim:true,
      def:"20"
    },
    captionFontColor:{
      type:String,
      def:"#000000"
    }
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("moviethumnailname", movieThumnailNameSchema);
