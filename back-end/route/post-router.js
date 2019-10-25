'use strict'

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const Post = require('../model/post.js');

const posts = module.exports = new Router();

posts.post('/post', jsonParser, (req, res) => {
	console.log('made it to post, posting...');
	console.log(req.body);
	new Post(req.body).save()
	.then( list => res.json(list))
	.catch( err => res.json(err));
});

posts.get('/posts', (req, res) => {
	Post.find()
	  then(posts => res.json(posts));
});

posts.get('/posts/:id', (req, res) => {
	Post.findById(req.params.id)
	.then(post => res.json(post));
});


