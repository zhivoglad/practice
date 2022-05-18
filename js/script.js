"use strict"


let numberOfFilms;
//let answerConsole =  console.log(+numberOfFilms);
function start() {
	numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
	};

}
start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {
	},
	actors: {
	},
	genres: [],
	privat: false,
};
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const a = prompt(`Ваш любимый жанр под номером ${i} ?`);
		if (a != "" && a != null && isNaN(a)) {
			personalMovieDB.genres[i - 1] = a;
		}
	}
}
writeYourGenres();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}



/* 

можно так написать, а можем по другому
function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	} else {
		console.log('good luck');
	}
}
*/

function rememberMyFilms() {
	for (let i = 1; i < 2; i++) {

		const a = prompt("Какой последний фильм вы смотрели?", "").trim(),
			b = prompt("Какова ваша оценка?", "").trim();

		if (a !== null && a !== '' && a.length <= 50) {
			console.log('done');
			personalMovieDB.movies[a] = b;
		} else {
			console.log('error');
			i--;
		};
	}
}
rememberMyFilms();


function detecPersonalLevel() {
	if (numberOfFilms <= 10 && numberOfFilms != null && numberOfFilms != '' && numberOfFilms != 0) {
		console.log("Просмотренно довольно мало фильмов");
	} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
		console.log("Классический зритель");
	} else if (numberOfFilms > 30) {
		console.log("Вы киноман");
	} else {
		console.log("произошла ошибка");
	}
}
detecPersonalLevel();
showMyDB(personalMovieDB.privat);










/* Работа с циклом while
let i = 0;

while(i < 1){

	const a = prompt("Какой последний фильм вы смотрели?",""),
			b = prompt("Какова ваша оценка?","");
			if(a !== null && a !== '' && a.length <= 50){
				console.log('done');
				personalMovieDB.movies[a] = b;
			}else{
				console.log('error');
				i--;
			};
		if(personalMovieDB.count <= 10 && personalMovieDB.count != null && personalMovieDB.count != '' && personalMovieDB.count != 0 ){
		console.log("Просмотренно довольно мало фильмов");
		}else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
		console.log("Классический зритель");
		}else if(personalMovieDB.count > 30){
		console.log("Вы киноман");
		}else{
		console.log("произошла ошибка");
		
	}
	i++;
};

*/

/* Работа с циклом Do while
let i = 0;  
do{
  const a = prompt("Какой последний фильм вы смотрели?",""),
		  b = prompt("Какова ваша оценка?","");
		  if(a !== null && a !== '' && a.length <= 50){
			  console.log('done');
			  personalMovieDB.movies[a] = b;
		  }else{
			  console.log('error');
			  i--;
		  };
	  if(personalMovieDB.count <= 10 && personalMovieDB.count != null && personalMovieDB.count != '' && personalMovieDB.count != 0 ){
	  console.log("Просмотренно довольно мало фильмов");
	  }else if(personalMovieDB.count > 10 && personalMovieDB.count <= 30){
	  console.log("Классический зритель");
	  }else if(personalMovieDB.count > 30){
	  console.log("Вы киноман");
	  }else{
	  console.log("произошла ошибка");
  	
  }
  i++;

}	
while(i	<	1);	
	
*/




