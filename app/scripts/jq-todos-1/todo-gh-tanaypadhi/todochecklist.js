/**
 * Checklist by @tanaypadhi
 *
 * Dependencies; 
 *	- jQuery library
 *	- jQuery UI
 *
 */

$(document).ready(function() {
	
	
	//Check for locally stored list of tasks, otherwise create new ones.
	if (localStorage.getItem("tasklist") != null) {
		var tasks = JSON.parse(localStorage.getItem("tasklist"));
	}
	else {
		var tasks = [];
	}
	
	if (localStorage.getItem("checklist") != null) {
		var checks = JSON.parse(localStorage.getItem("checklist"));
	}
	else {
		var checks = [];
	}

	//Add the stored tasks to the page and add checks
	for (var k = 0; k < tasks.length; k++) {
		$('#task_list ul').prepend('<li id = taskitem' + k + '><div class = "task" id =' + k + ' > ' + '<input type="checkbox" class="completed" id = task' 
			+ k + '>' + '<p class = "title" id = tasktext'+ k + '>' 
			+ tasks[k] + '</p></div></li>');
		if (checks !== null && checks[k] == true) {
			$('#task' + k).prop('checked', true);
		}
		
	};

	//Update header with number of tasks
	displayTaskCount();

	//Update tasks with a strikethrough if checked
	displayCompletedTasks(tasks);

	//Reset local storage to wipe all existing tasks and reload page
	$("#clear_button").click(function() {
		localStorage.clear();
		location.reload();
		return false;
	});

	//Add a new task provided it isn't a duplicate
	$("#add_button").click(function() {
		displayCompletedTasks(tasks);
		var taskTitle = $('#task_title').val();
		if(jQuery.inArray(taskTitle, tasks) == -1 && taskTitle!= '') {																			//Only enter if it isn't a duplicate
			tasks.push(taskTitle);
			$('#task_list ul').prepend('<li id = taskitem' + tasks.indexOf(taskTitle) + '><div class = "task" id =' + tasks.indexOf(taskTitle) + ' > ' + '<input type="checkbox" class="completed" id = task' 
			+ tasks.indexOf(taskTitle) + '>' + '<p class = "title" id = tasktext'+ tasks.indexOf(taskTitle) + '>' 
			+ taskTitle + '</p></div></li>');
		}
		else {
			//If duplicate, highlight the existing task in orange
			$('#tasktext' + jQuery.inArray(taskTitle, tasks)).css("color", "#FF7700");
		}
		$('form')[0].reset();

		//Update task counter and update local storage
		displayTaskCount();
		localStorage.setItem("tasklist", JSON.stringify(tasks));
		return false;
	});

	//Edit task on double click
	$('ul#ulist').on("dblclick", " li", function() {
		
		var oldText = $(this).find('.title').text();
		$(this).find('.title').attr('contenteditable','true');
		
		//On pressing enter, replace the text and update local storage
		//If edited task is a duplicate, resets to the older pre-edit text and highlights the original entry in orange
		$(this).find('.title').keypress(function(e) {
    		if(e.which == 13) {
    			var newText = $(this).text(); 
    			if (jQuery.inArray(newText, tasks) < 0) {
    				$(this).attr('contenteditable','false');
    				var temp = tasks.indexOf(oldText);
    				tasks[temp] = newText;
    				//If all the text is cleared, remove the task
    				
    				if(newText == '') {	
    					toRemove = tasks.indexOf(newText);
    					$('#taskitem' + toRemove).remove();
    					checks.splice(toRemove, 1);
    					tasks.splice(toRemove, 1);
    					localStorage.setItem("checklist", JSON.stringify(checks));
    					localStorage.setItem("tasklist", JSON.stringify(tasks));
    					location.reload();
    					
    				}
    				
    				localStorage.setItem("checklist", JSON.stringify(checks));
    				localStorage.setItem("tasklist", JSON.stringify(tasks));
    				displayCompletedTasks(tasks);
    				displayTaskCount();
    				$(this).text(newText);
       			}
    			else if (String(oldText) === String (newText)){
    				$(this).attr('contenteditable','false');
    			}
    			
    			
    		};
   		
		});

		
		
	});


	//When a checkbox is checked, update the displayed tasks and local storage
	$('ul#ulist').on('click', '.completed', function() {
		displayCompletedTasks(tasks);
		localStorage.setItem("checklist", JSON.stringify(checks));
	})

	//Display tasks and update list of checks
	function displayCompletedTasks(array) {
		for (i = 0; i < array.length; i++) {
			if ($('#task' + i).is(':checked')) {

				//Strikethrough and grey if checked
				$('#tasktext' + i).css("text-decoration", "line-through");
				$('#tasktext' + i).css("color", "#8A8A8A");
				checks[i] = true;
				
			}
			else {
				$('#tasktext' + i).css("text-decoration", "none");
				$('#tasktext' + i).css("color", "#000000");
				checks[i] = false;

			}

		};

	}

	//Display the number of tasks in the header.
	function displayTaskCount() {

		if (tasks == null) {
			$('#empty').html("<h4>You have no tasks at the moment.</h4>");	
		}
		if(parseInt(tasks.length) == 1) {

			//Grammar heh.
			$('#empty').html("<h4>You have " + String(parseInt(tasks.length))+ " task at the moment.</h4>");
		} 
		else {
			$('#empty').html("<h4>You have " + String(parseInt(tasks.length))+ " tasks at the moment.</h4>");
		};


	}


	
});	