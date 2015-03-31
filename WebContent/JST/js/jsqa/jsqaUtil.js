/**
 * To create page content
 */


function createQuestion(index,title,content,result,hasPrevious,hasNext){
	createMenuItem(index,title);
	createQuestionContent(index,title,content,result,hasPrevious,hasNext);
}
function createQuestionContent(index,title,content,result,hasPrevious,hasNext){
	document.writeln('<div class="right" id="q'+index+'" style="display:none;">');
	document.writeln('	<div class="info">');
	document.writeln('	<a class="info" href="#nogo">'+title+'</a>');
	document.writeln('</div>');
	document.writeln('<p>'+content+'</p>');
	document.writeln('<p class="date" id="p'+index+'">');
	document.writeln('	<img src="../../images/timeicon.gif" alt="" />');
	document.writeln('	<a id="v'+index+'" href="#" onclick="showAnswer('+index+');">View Answer</a>');
	
	if(hasPrevious){
		document.writeln('	<img src="../../images/arrow.gif" alt="" />');
		document.writeln('	<a href="#" onclick="showQuestion('+(index-1)+');">Previous</a>');
	}
	if(hasNext){
		document.writeln('	<img src="../../images/arrow.gif" alt="" />');
		document.writeln('	<a href="#" onclick="showQuestion('+(index+1)+');">Next</a>');
	}
	
	document.writeln('</p>');

	document.writeln('<div class="line"></div>');
	document.writeln('<div class="right_left">');
	document.writeln('	<h2>ANSWER</h2>');
	document.writeln('	<p id="a'+index+'_0">?</p>');
	document.writeln('	<p id="a'+index+'_1" style="display:none;">'+result+'</p>');
	document.writeln('</div>');
	document.writeln('</div>');
};

function createMenuItem(index,title){
	
	var menubar = document.getElementById("qtabs");
	var showAllItem = document.getElementById("showAllWithoutAnswers");
	var newItem = document.createElement("a");
	newItem.innerHTML = title;
	newItem.href = "#";
	newItem.onclick = function(event){showQuestion(index);};
	menubar.insertBefore(newItem,showAllItem);
}


