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

const a = prompt("Какой последний фильм вы смотрели?",""),
 		b = prompt("Какова ваша оценка?"),
		c = prompt("Какой последний фильм вы смотрели?",""),
		d = prompt("Какова ваша оценка?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);

