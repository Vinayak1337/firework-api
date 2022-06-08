import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

var VideoSchema = new Schema(
	{
		images: {
			type: SchemaTypes.ObjectId,
			ref: 'Images',
			required: false,
			default: null
		},
		upload_flag: { type: Boolean, default: false },
		videoUrl: { type: String, default: '' },
		loop: { type: Number, default: 5 },
		name: { type: String, default: 'Video' },
		thumbnail: { type: String, default: '' },
		caption: {
			text: { type: String, default: '' },
			color: { type: String, default: '#000000' },
			size: { type: Number, default: 16 }
		},
		fw: { type: Boolean, default: false }
	},
	{
		timestamps: true
	}
);

export const VideoConverted = model('VideoConverted', VideoSchema);
