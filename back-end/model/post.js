'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
	title: {
		titleString: { type: String, required: false },
		titleHref: { type: String, required: false }
	},
	date: { type: Date, required: true },
	postType: { type: String, required: true, enum: ['LONG', 'PHOTO', 'SHORT', 'LINK'] },
	asset: {
		isS3: { type: Boolean, required: true, default: false },
		assetString: { type: String, required: true }
	}
});

module.exports = mongoose.model('post', postSchema);
