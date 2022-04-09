"use strict"


const numberOfFilms = prompt("Сколько фильмов Вы посмотрели?","");
//let answerConsole =  console.log(+numberOfFilms);

let personalMovieDB = {
	count: numberOfFilms,
	movies: {
	
	},
	actors:{

	},
	genres:[],
	privat:false,
};

  let boo = 10;
  let cool = "hello";

  for(let i= 1; i<2; i++){

	const a = prompt("Какой последний фильм вы смотрели?",""),
			b = prompt("Какова ваша оценка?","");
			
			if(a !== null && a !== '' && a.length <= 50){
				console.log('done');
				personalMovieDB.movies[a] = b;
			}else{
				console.log('error');
				i--;
			};
	};
	if(numberOfFilms <= 10 && numberOfFilms != null && numberOfFilms != '' && numberOfFilms != 0 ){
		console.log("Просмотренно довольно мало фильмов");
	}else if(numberOfFilms > 10 && numberOfFilms <= 30){
		console.log("Классический зритель");
	}else if(numberOfFilms > 30){
		console.log("Вы киноман");
	}else{
		console.log("произошла ошибка");
	}




console.log(personalMovieDB);








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




