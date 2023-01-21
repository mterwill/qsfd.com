$(function() {
  var images = [
    'atthescene.jpg',	  
    'temp-truck.jpg',
    'stations-01.jpg',
    'stations-02.jpg',
    'divers.jpg',	  
    'eta-497.jpg',
    'er-493.jpg',
    'two-trucks.jpg',
    'fundraising.jpg',	  
    'IMG_0147.jpg',
    'IMG_0191.jpg',
    'IMG_8583.jpg',
    'Resized_20200420_170057.jpeg',
  ];

	$('<img src="assets/img/home-rotate/' + images[Math.floor(Math.random() * images.length)] + '" width=100% >').appendTo('#banner');
});
