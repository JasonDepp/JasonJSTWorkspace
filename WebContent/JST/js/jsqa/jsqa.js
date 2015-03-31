/**
 * used for jsqa.html
 */

function showQuestion(index){
	for(var i=0;i<document.getElementsByClassName("right").length;i++){
		hideQuestionUnit(i+1);
		hideAnswer(i+1);
	}
	showQuestionUnit(index);
	showPagenationUnit(index);
}

function showQuestionUnit(index){
	document.getElementById("q"+index).style.display = "";
}

function hideQuestionUnit(index){
	document.getElementById("q"+index).style.display = "none";
}

function showAnswer(index){
	document.getElementById("v"+index).innerHTML = "Hide Answer";
	document.getElementById("v"+index).onclick = function(){hideAnswer(index);};
	showAnswerUnit(index);
}

function hideAnswer(index){
	document.getElementById("v"+index).innerHTML = "View Answer";
	document.getElementById("v"+index).onclick = function(){showAnswer(index);};
	hideAnswerUnit(index);
}

function showAnswerUnit(index){
	document.getElementById("a"+index+"_0").style.display = "none";
	document.getElementById("a"+index+"_1").style.display = "";
}

function hideAnswerUnit(index){
	document.getElementById("a"+index+"_0").style.display = "";
	document.getElementById("a"+index+"_1").style.display = "none";
}

function showPagenationUnit(index){
	document.getElementById("p"+index).style.display = "";
}
function hidePagenationUnit(index){
	document.getElementById("p"+index).style.display = "none";
}

function showAllWithoutAnswers(){
	for(var i=0;i<document.getElementsByClassName("right").length;i++){
		showQuestionUnit(i+1);
		hideAnswerUnit(i+1);
		hidePagenationUnit(i+1);
	}
}

function showAllWithAnswers(){
	for(var i=0;i<document.getElementsByClassName("right").length;i++){
		showQuestionUnit(i+1);
		showAnswer(i+1);
		hidePagenationUnit(i+1);
	}
}