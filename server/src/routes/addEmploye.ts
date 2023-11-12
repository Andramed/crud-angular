// import AppDataSourcePhoto from './data-source/photo-data-sources';

import AppDataSourcePhoto from '../data-source/photo-data-sources'
import { Photo } from '../entity/Photo'

AppDataSourcePhoto.initialize().then(async () => {
	
	// const photo = new Photo();
	// photo.name = "Me and Bears"
	// photo.description = "I am near polar bears"
	// photo.views = 1
	// photo.isPublished = true
	
	// const photoRepo = AppDataSourcePhoto.getRepository(Photo);
	// try {
	// 	const savedPhoto =	await photoRepo.save(photo);
	// 	const allPhotos = await photoRepo.find();
	// 	console.log(allPhotos);
		
		
	// } catch (error) {
	// 	console.log('Photo not saved: ', error);
		
	// }
}).catch(error => console.log(error))